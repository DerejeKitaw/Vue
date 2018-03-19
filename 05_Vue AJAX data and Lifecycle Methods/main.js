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
