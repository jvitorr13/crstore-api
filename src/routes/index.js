import AdressRoute from "./AdressRoute";
import CategoryRoute from "./CategoryRoute";
import CupomRoute from "./CupomRoute";
import OrderRoute from "./OrderRoute";
import ProductRoute from "./ProductRoute";
import UserRoute from "./UserRoute";
import PaymentRoute from "./PaymentRoute";

function Routes (app) {
    AdressRoute(app)
    CategoryRoute(app)
    CupomRoute(app)
    OrderRoute(app)
    ProductRoute(app)
    UserRoute(app)
    PaymentRoute(app)
}

export default Routes