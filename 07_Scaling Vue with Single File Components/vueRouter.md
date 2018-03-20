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
{
            path: '/friends/:id/:age/:weight',
            name: 'Friends',
            component: Friends
        },
```
Accss param value in friends component
```js
<template>
<div>
  <h1>Freinds</h1>
  {{$route.params.id}}
  {{$route.params.age}}
  {{$route.params.weight}}
  </div>
</template>
```
validate params using props
```js
<template>
<div>
  <h1>Freinds</h1>
  {{$route.params.id}}
  {{$route.params.age}}
  {{$route.params.weight}}
  </div>
</template>

<script>
export default {
props:[
  'id',
  'age',
  'weight'
]
}
</script>
<!-- scopped limit the style from being global -->
<style scoped>
h1 {
    color: red;
}
</style>
```
in router/index.js
```js
        {
            path: '/friends/:id/:age/:weight',
            name: 'Friends',
            props:true,
            component: Friends
        },
```
So now params are passed as props so
```html
<template>
    <div>
        <h1>Freinds</h1>
        {{id}}
        {{age}}
        {{weight}}
  </div>
</template>
```
