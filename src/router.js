import Home from "@/views/Home.vue";
import Calculator from "@/views/Calculator.vue";
import Table from "@/views/Table.vue";


const routes = [
    {
        path: "/",
        name:"home",
        component: Home,
    },
    {
        path: "/calculator",
        name: "calculator",
        component: Calculator,
    },
    {
    path: "/table",
    name: "table",
    component: Table,
    },
]

export default routes;
