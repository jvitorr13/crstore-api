import AdressController from '../controllers/AdressController'

export default (app) => {
	app.post('/address/', AdressController.persist)
	app.patch('/address/:id', AdressController.persist)
	app.delete('/address/destroy:id', AdressController.destroy)
	app.get('/address/', AdressController.get)
	app.get('/address/:id', AdressController.get)
}