import Login from '../Pages/Auth/Login'
import LoginCover from '../Pages/Auth/LoginCover'
const publicRoutes = [
    { path: "/", component: <Login /> },
    { path: "/LoginCover", component: <LoginCover /> },



];

export { publicRoutes };