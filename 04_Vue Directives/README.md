## Break up app into Vue Components

### create new component called friends
```js
Vue.component('friend',{
    
})
```
### Component will have same objects like the vue app
```js
Vue.component('friend',{
    filter:{

    },
    methods:{

    },
    templet:``
});
```
### move all propertis to this friend component
```js
Vue.component('friend',{
    filter:{
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
    templet:`
    <div>
    <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
    </div>
    `
});
```
### Add component to the app
```js
Vue.component('friend',{
    filters:{
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
    templet:`
    <div>
    <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
    </div>
    `
});
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
    
  template: `
    <div>
       <friend v-for="friend in friends" />
    </div>
    `
})

```
### the above code is not going to work. So need data to the component. we send data using propes
```js
Vue.component('friend',{
    props: ['friend'],
    filters:{
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
    template:`
    <div>
        <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
    </div>
    `
});
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
    
  template: `
    <div>
       <friend v-for="friend in friends" v-bind:friend="friend" />
    </div>
    `
})
```
### rename component 
```js
Vue.component('friend-component',{
    props: ['friend'],
    filters:{
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
    template:`
    <div>
        <h4>{{friend | fullName}}</h4>
       <h5>age: {{friend.age}}</h5>
       <button v-on:click="decrementAge(friend)">-</button>
       <button v-on:click="incrementAge(friend)">+</button>
       <input v-model="friend.first"/>
       <input v-model="friend.last"/>
    </div>
    `
});
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
    
  template: `
    <div>
       <friend-component v-for="item in friends" v-bind:friend="item" />
    </div>
    `
})
```

