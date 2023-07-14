import CupomController from "../controllers/CupomController"



export default (app) => {
  app.post('/Cupom/destroy',  CupomController.delet)
  app.get('/Cupom/',  CupomController.getAll)
  app.post('/Cupom/',  CupomController.persist)
  app.get('/Cupom/:id',  CupomController.getById)
  app.post('/Cupom/:id', CupomController.persist)
}