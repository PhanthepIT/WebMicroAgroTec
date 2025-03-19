import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import cardReducer from "./reducers/cardReducer";
import orderReducer from "./reducers/orderReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    card: cardReducer,
    order: orderReducer,
    dashboard: dashboardReducer,
    chat: chatReducer
}
export default rootReducer;