### Creating a Vue Instance
> Every Vue application starts by creating a new Vue instance with the Vue function:

> When a Vue instance is created, it adds all the properties found in its `data` object to Vue’s reactivity system. When the values of those properties change, the view will “react”, updating to match the new values.

> When this data changes, the view will re-render. It should be noted that properties in data are only reactive if they `existed` when `the instance was created`. That means if you add a new property, like:
```js
 vm.b = 'hi'
```
> Then changes to b will not trigger any view updates. If you know you’ll need a property later, but it starts out empty or non-existent, you’ll `need to set some initial value`. For example:
```js
 data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```
> The only exception to this being the use of Object.freeze(), which prevents existing properties from being changed, which also means the reactivity system can’t track changes.
```js
 var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```
```html
 <div id="app">
  <p>{{ foo }}</p>
  <!-- this will no longer update `foo`! -->
  <button @click="foo = 'baz'">Change it</button>
</div>
```
> In addition to data properties, Vue instances expose a number of useful instance properties and methods. These are prefixed with $ to differentiate them from user-defined properties. For example:

```js
 var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})
```

```html
 
```
```js
 
```
