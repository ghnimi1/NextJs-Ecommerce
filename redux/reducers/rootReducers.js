import { combineReducers } from "redux"
import {
    userLoginReducer,
    userRegisterReducer
} from "./authReducers"
import {
    userProfileReducer,
    updateProfileReducer,
    fetchUsersReducer,
    fetchSingleUserReducer,
    deleteUserReducer,
    updateUserReducer
} from "./usersReducers";
import {
    fetchCategoryReducer,
    addCategoryReducer,
    deleteCategoryReducer,
    updateCategoryReducer
} from "./categoryReducers"
import {
    fetchAllProductsReducer,
    fetchSingleProductReducer,
    fetchTopProductReducer,
    addProductReducer,
    addReviewsReducer,
    deleteProductReducer,
    updateProductReducer
} from './productsReducers'
import {
    fetchAllOrdersReducer,
    fetchMyOrdersReducer,
    fetchSingleOrderReducer,
    addOrderReducer,
    deleteOrderReducer,
    updateOrderToDeliveredReducer,
    payOrderReducer
} from './orderReducers'
import {
    cartReducer
} from './cartReducers'
const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    updateProfile: updateProfileReducer,
    users: fetchUsersReducer,
    user: fetchSingleUserReducer,
    updateUser: updateUserReducer,
    deleteUser: deleteUserReducer,
    category: fetchCategoryReducer,
    addCategory: addCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    updateCategory: updateCategoryReducer,
    products: fetchAllProductsReducer,
    product: fetchSingleProductReducer,
    topProducts: fetchTopProductReducer,
    addProduct: addProductReducer,
    addReviews: addReviewsReducer,
    deleteProduct: deleteProductReducer,
    updateProduct: updateProductReducer,
    orders: fetchAllOrdersReducer,
    order: fetchSingleOrderReducer,
    myOrder: fetchMyOrdersReducer,
    deleteOrder: deleteOrderReducer,
    addOrder: addOrderReducer,
    updateDelivered: updateOrderToDeliveredReducer,
    payOrder: payOrderReducer,
    cartItems: cartReducer
})

export default rootReducer;