import { defineNuxtPlugin } from '#app'
import * as BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVueNext.BootstrapVueNext)
})