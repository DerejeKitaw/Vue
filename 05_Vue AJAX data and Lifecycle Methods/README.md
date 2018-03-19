## AJAX data and Lifecycle Methods

```js
const app = new Vue({
  el: '#app',
  data:{
      friends: ["Jack", "John"]
    },
    beforeCreated(){

    },
    create(){

    },
    beforeMount(){

    },
    mounted(){

    },
    beforeDestroy(){

    },
    destroy(){

    },
  template: `
    <div>
       <li v-for="friend in friends">{{friend}}</li>
    </div>
    `
})
```
### mount an app
```js
 el: '#app',
 ```
 ### mount app from the console window
 ```js
 // remove el: '#app' from the app and run in console the following.
 app.$mount("#app")
 ```
 ### we want to call the data after the app mounted. So we search for the data in mounted life cycle method
 ```js
mounted(){
    console.log("Mounted!!!")
    fetch()
    .then(response => response.json())
    .then((data)=> {
        // do something
    })
    },
 ```
 ### create rest api username dtk
 ```
 http://rest.learncode.academy/api/dtk/friends
 ```
 ### insert this to the fetch
 ```js
 const app = new Vue({
    el: '#app',
  data:{
      friends: ["Jack", "John"]
    },
    beforeCreated(){

    },
    create(){

    },
    beforeMount(){

    },
    mounted(){
    console.log("Mounted!!!")
    fetch(" http://rest.learncode.academy/api/dtk/friends")
    .then(response => response.json())
    .then((data)=> {
        // do something
        this.friends = data;
    })
    },
    beforeDestroy(){

    },
    destroy(){

    },
  template: `
    <div>
       <li v-for="friend in friends">{{friend}}</li>
    </div>
    `
})
```
### add data using curl
```
curl -H "Content-Type:application/json" -X POST -d '{"name": "Dereje"}' http://rest.learncode.academy/api/dtk/friends
```
return
```
{"name":"Dereje","id":"5aaf4245697509010019461d"}Derejes-MBP:~ derejekitaw$ 
```
### finame
```
const app = new Vue({
    el: '#app',
  data:{
      friends: ["Jack", "John"]
    },
    beforeCreated(){

    },
    create(){

    },
    beforeMount(){

    },
    mounted(){
    console.log("Mounted!!!")
    fetch(" http://rest.learncode.academy/api/dtk/friends")
    .then(response => response.json())
    .then((data)=> {
        this.friends=data;
    })
    },
    beforeDestroy(){

    },
    destroy(){

    },
  template: `
    <div>
       <li v-for="friend in friends">{{friend.name}}</li>
    </div>
    `
})
```