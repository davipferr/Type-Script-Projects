import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@c/HomeComponent.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@c/CartComponent.vue"),
  },
  {
    path: "/finish-purchase",
    name: "finish-purchase",
    component: () => import("@c/StepsToFinishPurchase.vue")
  },
  {
    path: "/404",
    name: "error-page-404",
    component: () => import("@c/ErrorPage404.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router