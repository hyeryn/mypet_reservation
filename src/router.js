import Vue from "vue"
import VueRouter from "vue-router"
import Home from  "./views/Home"
import Signup from "./views/Signup"
import Login from "./views/Login"
import Mypage from "./views/Mypage"
import Before from "./components/Before"
import About from "./views/About"
import Reserv from './views/Reservation'
import Map from './views/map'
//import SMap from './views/searchmap'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Before},
        {path: "/About", component: About},
        {path: "/Reservation", component: Reserv},
        {path: "/Home", component: Home},
        {path: "/Signup", component: Signup},
        {path: "/Login", component: Login},
        {path: "/Mypage", component: Mypage},
        {path: "/Map", component: Map},
        //{path: "/SMap", component: SMap}
    ]
})

export default router;