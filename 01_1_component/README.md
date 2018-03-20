### Define a new component called todo-item
```html
 <div id="app-7">
        <ol>
            <!-- Create an instance of the todo-item component -->
            <todo-item></todo-item>
        </ol>
    </div>
```
```js
    // Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })
var app7 = new Vue({
    el:'#app-7',
})

```
### component called todo-item accept a prop:
```html
  <div id="app-8">
        <ol>
            <!--
                      Now we provide each todo-item with the todo object
                      it's representing, so that its content can be dynamic.
                      We also need to provide each component with a "key",
                      which will be explained later.
                    -->
            <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
            </todo-item>
        </ol>
    </div>
```
```js
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

var app8 = new Vue({
    el:'#app-8',
    data: {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      } 
})
```