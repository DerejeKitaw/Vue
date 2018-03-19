const app = new Vue({
    el: '#app',
  data:{
     editFriend: null,
      friends: ["Jack", "John"]
    },
    methods:{
        deleteFriend(id, i){
            fetch("http://rest.learncode.academy/api/dtk/friends/" + id,{
                method: "DELETE"
            })

            .then((data)=> {
                console.log("Deleted!!!");
                this.friends.splice(i, 1);
            })
        },
        updateFriend(friend){
            fetch("http://rest.learncode.academy/api/dtk/friends/" + friend.id,{
                body: JSON.stringify(friend),
                method: "PUT",
                headers:{
                    "content-Type": "application/json",
                }
            })

            .then((data)=> {
                console.log("Updated!!!");
                this.editFriend=null; // After update exit the edit mode
            })
        }
    },
    mounted(){
    console.log("Mounted!!!")
        fetch("http://rest.learncode.academy/api/dtk/friends")
        .then(response => response.json())
        .then((data)=> {
            this.friends=data;
        })
    },
  template: `
    <div>
       <li v-for="friend, i in friends">
            <div v-if="editFriend === friend.id">
                    <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
                    <button v-on:click="updateFriend(friend)">save<button>
            </div>
            <div v-else>
                    <button v-on:click="editFriend = friend.id">Edit</button>
                    <button v-on:click="deleteFriend(friend.id, i)">X</button>
                    {{friend.name}}
            </div>
       </li>
    </div>
    `
})
