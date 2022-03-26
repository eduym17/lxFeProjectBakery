import { createRouter, createWebHashHistory } from 'vue-router'
import ContentMain from '../components/ContentMain.vue'
import PedidosCake from '../PedidosCake.vue'
import PasteleroCake from '../PasteleroCake.vue'

const pedidos = {
  props: { default: true },
  components: { default: PedidosCake },
  path: '/:pedidos',
}

const pastelero = {
  props: { default: true },
  components: { default: PasteleroCake },
  path: '/:pastelero',
}

const routes = [
  { path: '/', component: ContentMain },
  pedidos,
  pastelero,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router;