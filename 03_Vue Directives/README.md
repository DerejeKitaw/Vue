### Vue Directives and event listener

### Add arrays of string - friends
```js
const app = new Vue({
  el: '#app',
  data:{
      friends: ["bobby", "john"],
      bobby: {
        first: "bobby",
        last: "Boone",
          age: 25
        },
      john: {
          first: "John",
          last: "Boby",
          age: 35
        }
    },
    filters: {
        fullName(value){
            return `${value.last}, ${value.first}`;
        },
        ageInOneYear(age){
            return age + 1;
        }
    },
  template: `
    <div>
       <h2 v-for="friend in friends">{{friend}}</h2>
    </div>
    `
})
```
### Add arrays of objects - friends
```js
const app = new Vue({
  el: '#app',
  data:{
      friends: [
      {
        first: "bobby",
        last: "Boone",
          age: 25
        },
      {
          first: "John",
          last: "Boby",
          age: 35
        }
    ]
    },
    filters: {
        fullName(value){
            return `${value.last}, ${value.first}`;
        },
        ageInOneYear(age){
            return age + 1;
        }
    },
  template: `
    <div>
       <h2 v-for="friend in friends">
       <h4>{{friend | fullName}}</h4>
       </h2>
    </div>
    `
})
```
### v-model for two way data binding
```html
template: `
    <div>
       <h2 v-for="friend in friends">
       <h4>{{friend | fullName}}</h4>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
       </h2>
    </div>
    `
```
### v-oo:click 
```html
<h5>age: {{friend.age}}</h5>
       <button v-on:click="friend.age = friend.age -1">-</button>
       <button v-on:click="friend.age = friend.age +1">+</button>
```
### add method object
```js
methods:{
        incrementAge(friend){
            friend.age= friend.age + 1;
        },
        decrementAge(friend){
            friend.age= friend.age - 1;
        }
    },
```
```html
  template: `
    <div>
       <h2 v-for="friend in friends">
       <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
       </h2>
    </div>
    `
```
```js
const app = new Vue({
  el: '#app',
  data:{
      friends: [
      {
        first: "bobby",
        last: "Boone",
          age: 25
        },
      {
          first: "John",
          last: "Boby",
          age: 35
        }
    ]
    },
    filters: {
        fullName(value){
            return `${value.last}, ${value.first}`;
        },
        ageInOneYear(age){
            return age + 1;
        }
    },
    methods:{
        incrementAge(friend){
            friend.age= friend.age + 1;
        },
        decrementAge(friend){
            friend.age= friend.age - 1;
        }
    },
  template: `
    <div>
       <h2 v-for="friend in friends">
       <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
       </h2>
    </div>
    `
})
```