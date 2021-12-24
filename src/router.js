import Vue from "vue"
import VueRouter from "vue-router"
import Home from  "./views/Home"
import Signup from "./views/Signup"
import Login from "./views/Login"
import Mypage from "./views/Mypage"
import Before from "./components/Before"
import About from "./views/About"
import Profile from "./views/Profile"
import Reserv from './views/Reservation'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Before},
        {path: "/About", component: About},
        {path: "/Profile", component: Profile},
        {path: "/Reservation", component: Reserv},
        {path: "/Home", component: Home},
        {path: "/Signup", component: Signup},
        {path: "/Login", component: Login},
        {path: "/Mypage", component: Mypage},
    ]
})

export default router;