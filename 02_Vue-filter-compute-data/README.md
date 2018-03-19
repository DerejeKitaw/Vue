### computed values act as data

```js
const app = new Vue({
  el: '#app',
  data:{
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
    computed: {
        bobbyFullName() {
            return `${this.bobby.first} ${this.bobby.last}`
        },
        johnFullName() {
            return `${this.john.first} ${this.john.last}`
        },
        johnAgeInOneYear(){
            return this.john.age +1;
        }
    },
  template: `
    <div>
        <h1>Name: {{bobbyFullName}}</h1>
        <h1>Age: {{bobby.age}}</h1>
        <h1>Name: {{johnFullName}}</h1>
        <h1>Age: {{john.age}}</h1>
        <h1>Age: John will be {{johnAgeInOneYear}} next year</h1>
    </div>
    `
})
```
### We can do compute in a reusable fashin using fillters object
```js
  filters: {
        fullName(value){
            return `${value.first} ${value.last}`;
        }
```
And the template will be
```html
<div>
        <h1>Name(filtered): {{bobby | fullName}}</h1>
        <h1>Name(filtered): {{john | fullName}}</h1>
    </div>
```
Complelte app
```js
const app = new Vue({
  el: '#app',
  data:{
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
    computed: {
        bobbyFullName() {
            return `${this.bobby.first} ${this.bobby.last}`
        },
        johnFullName() {
            return `${this.john.first} ${this.john.last}`
        },
        johnAgeInOneYear(){
            return this.john.age +1;
        }
    },
    filters: {
        fullName(value){
            return `${value.first} ${value.last}`;
        }
    },
  template: `
    <div>
        <h1>Name: {{bobbyFullName}}</h1>
        <h1>Name(filtered): {{bobby | fullName}}</h1>
        <h1>Age: {{bobby.age}}</h1>
        <h1>Name: {{johnFullName}}</h1>
        <h1>Name(filtered): {{john | fullName}}</h1>
        <h1>Age: {{john.age}}</h1>
        <h1>Age: John will be {{johnAgeInOneYear}} next year</h1>
    </div>
    `
})
```
### any time we can change fullname filter
```js
   filters: {
        fullName(value){
            return `${value.last}, ${value.first}`;
        }
    },
```
### add ageInOneYear filter
```js
 ageInOneYear(age){
            return age + 1;
        }
```
template
```html
<h1>Age(filtered): {{bobby.age | ageInOneYear}}</h1>
```
