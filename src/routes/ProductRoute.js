import ProductController from '../controllers/ProductController'

export default (app) => {
	app.post('/products/', ProductController.persist)
	app.patch('/products/:id', ProductController.persist)
	app.delete('/products/destroy/:id', ProductController.destroy)
	app.get('/products/', ProductController.get)
	app.get('/products/:id', ProductController.get)
	app.get ('/products-by-category/:id',ProductController.getByCategoria)
}