import OrderController from '../controllers/OrderController'

export default (app) => {
	app.post('/orders/', OrderController.persist)
	app.patch('/orders/:id', OrderController.persist)
	app.delete('/orders/destroy/:id', OrderController.destroy)
	app.get('/orders/', OrderController.get)
	app.get('/orders/:id',OrderController.get)
}