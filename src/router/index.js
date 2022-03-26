import { createRouter, createWebHashHistory } from 'vue-router'
import ContentMain from '../components/ContentMain.vue'
import PedidosCake from '../PedidosCake.vue'
import PasteleroCake from '../PasteleroCake.vue'
import ContactoCake from '../ContactoCake.vue'

const pedidos = {
  props: { default: true },
  components: { default: PedidosCake },
  path: '/pedidos',
}

const pastelero = {
  props: { default: true },
  components: { default: PasteleroCake },
  path: '/pastelero',
}

const contacto = {
  props: { default: true },
  components: { default: ContactoCake },
  path: '/contacto',
}

const routes = [
  { path: '/', component: ContentMain },
  pedidos,
  pastelero,
  contacto,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router;