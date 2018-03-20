## v-bind
```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
```
```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
```
> The v-bind attribute are directive. 

> Directives are prefixed with v- to indicate that they are special attributes provided by Vue, they apply special reactive behavior to the rendered DOM. 

> v-bind:title="message" - “keep title attribute up-to-date with the message property on the Vue instance.”

> If you open up your JavaScript console again and enter app2.message = 'some new message', you’ll once again see that the bound HTML - in this case the title attribute - has been updated.

## v-if
```html
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```
```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```
## v-for
```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
```

## v-on
> v-on directive to attach event listeners that invoke methods on our Vue instances:
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```
```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
## v-model
> v-model directive that makes two-way binding between form input and app state a breeze:
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```
## v-once
```html
<span v-once>This will never change: {{ msg }}</span>
```

```html

```
```js

```


```html

```
```js

```


```html

```
```js

```
