### Create simple html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>
```
### add id for the dive tag to reference it with vue
```html
<div id="app">
```
### Add vue script
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">

    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
</body>
</html>
```
### create new empty vue object in main.js
```js
const app = new Vue({
    
})
```
### mount the app in vue
```js
const app = new Vue({
    el: "#app"
})
```
### tell the application to create some html for us
```js
const app = new Vue({
    el: "#app",
    template: "<h1>Hi<h1>"
})
```
### use ES6 template string for multiple line
Always one root tag required
```js
const app = new Vue({
  el: '#app',
  template: `
    <div>
        <h1>Hi</h1>
        <h1>There</h1>
    </div>
    `
});
```
### add data
```js
const app = new Vue({
  el: '#app',
  data:{
      name: "bobby",
      age: 25
  },
  template: `
    <div>
        <h1>Name: {{name}}</h1>
        <h1>Age: {{age}}</h1>
    </div>
    `
});
```
### nest objects
```js
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
```

