import { createMemoryHistory, createRouter } from 'vue-router'

import Page from './Page.vue'
import Project from './Project.vue'
import Journal from './Journal.vue'

const routes = [
  { path: '/', component: Page },
  { path: '/project', component: Project },
  { path: '/journal', component: Journal },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router