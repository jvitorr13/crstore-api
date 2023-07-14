import CategoryController from '../controllers/CategoryController'

export default (app) => {
	app.post('/categories/', CategoryController.persist)
	app.patch('/categories/:id', CategoryController.persist)
	app.delete('/categories/destroy/:id', CategoryController.destroy)
	app.get('/categories/', CategoryController.get)
	app.get('/categories/:id', CategoryController.get)
	app.get('/categories/', CategoryController.getAll)
}