import PaymentController from '../controllers/PaymentController'

export default (app) => {
	app.post('/payment/', PaymentController.persist)
	app.patch('/payment/:id', PaymentController.persist)
	app.delete('/payment/destroy/:id', PaymentController.destroy)
	app.get('/payment/', PaymentController.get)
	app.get('/payment/:id', PaymentController.get)
}
