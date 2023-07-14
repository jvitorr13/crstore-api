import UserModel from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const get = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, "") : null;

    if (!id) {
      let response = await UserModel.findAll({
        order: [["id", "asc"]],
      });
      return res.status(200).send({
        type: "success",
        message: "Registros carregados com sucesso",
        data: response,
      });
    }

    let response = await UserModel.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: "error",
        message: `Nenhum registro com id ${id}`,
        data: [],
      });
    }

    return res.status(200).send({
      type: "success",
      message: "Registro carregado com sucesso",
      data: response,
    });
  } catch (error) {
    return res.status(200).send({
      type: "error",
      message: `Ops! Ocorreu um erro`,
      error: error.message,
    });
  }
};

// bcrypt.compare(senhaquefoipassada, userExists.passwordHash)




const register = async (req, res) => {
  try {
    let { username, name, phone, password, role, cpf, email } = req.body;
    
    let userExists = await UserModel.findOne({
      where: {
        email: email
      }
    });

    if (userExists) {
      return res.status(200).send({
        type: 'error',
        message: 'Já existe um email cadastrado com esse username!'
      });
    }

    console.log('oi');
    let passwordHash = await bcrypt.hash(password, 10);
    let response = await UserModel.create({
      username,
      name,
      phone,
      passwordHash,
      role,
      cpf,
      email
    });
    return res.status(200).send({
      type: 'sucess',
      message: 'Usuário cadastrado com sucesso!',
      
      data: response
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message
    });
  }
}

const login = async (req, res) => {
  try {
    let { username, password } = req.body;

    let user = await user.findOne({
      where: {
        username
      }
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(200).send({
        type: 'error',
        message: 'Usuário ou senha incorretos!'
      });
    }

    let token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role }, 
      process.env.TOKEN_KEY,  
      { expiresIn: '2h' }
    );

    user.token = token;
    await user.save();

    return res.status(200).send({
      type: 'sucess',
      data: user,
      token
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}

const persist = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, "") : null;

    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(200).send({
      type: "error",
      message: `Ops! Ocorreu um erro`,
      error: error,
    });
  }
};

const getByToken = async (req, res) => {
    try {
      let userForget = await getByToken.getUserByToken(
        req.headers.authorization
      );
      let idUser = userForget.id;
      return await getById(idUser, req, res);
    } catch (error) {
      return res.status(200).send({
        type: "error",
        message: "Ops! Ocorreu um erro!",
        data: err.message,
      });
    }
  };



const create = async (dados, res) => {
  let {
    UserModelname,
    cpf,
    name,
    phone,
    passwordHash,
    token,
    username,
    role,
    cart,
    email,
    recuperation,
  } = dados;

  let response = await UserModel.create({
    UserModelname,
    cpf,
    name,
    phone,
    passwordHash,
    username,
    token,
    role,
    cart,
    email,
    recuperation,
  });

  return res.status(200).send({
    type: "success",
    message: `Cadastro realizado com sucesso`,
    data: response,
  });
};

const update = async (id, dados, res) => {
  let response = await UserModel.findOne({ where: { id } });

  if (!response) {
    return res.status(200).send({
      type: "error",
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  Object.keys(dados).forEach((field) => (response[field] = dados[field]));

  await response.save();
  return res.status(200).send({
    type: "success",
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
};

const destroy = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, "") : null;
    if (!id) {
      return res.status(200).send({
        type: "error",
        message: `Informe um id para deletar o registro`,
        data: [],
      });
    }

    let response = await UserModel.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: "error",
        message: `Nenhum registro com id ${id} para deletar`,
        data: [],
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: "success",
      message: `Registro id ${id} deletado com sucesso`,
      data: [],
    });
  } catch (error) {
    return res.status(200).send({
      type: "error",
      message: `Ops! Ocorreu um erro`,
      error: error.message,
    });
  }
};

export default {
  get,
  persist,
  destroy,
  getByToken,
  register,
  login,
};