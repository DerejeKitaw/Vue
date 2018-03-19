const app = new Vue({
  el: '#app',
  data:{
      bobby: {
          name: "bobby",
          age: 25
        },
      john: {
          name: "John boby",
          age: 35
        },
  },
  template: `
    <div>
        <h1>Name: {{bobby.name}}</h1>
        <h1>Age: {{bobby.age}}</h1>
        <h1>Name: {{john.name}}</h1>
        <h1>Age: {{john.age}}</h1>
    </div>
    `
})
