import UserController from '../controllers/UserController'

export default (app) => {
	app.post('/users/', UserController.persist)
	app.patch('/users/:id', UserController.persist)
	app.delete('/users/destroy/:id', UserController.destroy)
	app.get('/users/', UserController.get)
	app.get('/users/:id', UserController.get)
	app.get('/users/by-token', UserController.getByToken)
	app.post('/users/login', UserController.login)
	app.post('/users/register', UserController.register)
}