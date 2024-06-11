import { createMemoryHistory, createRouter } from 'vue-router'

import Page from './Page.vue'
import Project from './Project.vue'

const routes = [
  { path: '/', component: Page },
  { path: '/project', component: Project },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router