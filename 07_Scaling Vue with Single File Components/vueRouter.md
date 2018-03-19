### Adding vue router
App.vue
```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>
```
main.js
```js
import Vue from 'vue'
import App from './App'
import router from './router'   <-------------

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,                       <--------------
  components: { App },
  template: '<App/>'
})
```
run: npm install --save vue-router
then
src/router/index.js
```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        }
    ]
})
```
### Add routs
```
