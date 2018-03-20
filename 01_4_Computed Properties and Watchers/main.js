var app17 = new Vue({
  el: '#app-17',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message
        .split('')
        .reverse()
        .join('');
    }
    // run in the console
    // console.log(vm.reversedMessage) // => 'olleH'
    //  vm.message = 'Goodbye'
    //  console.log(vm.reversedMessage) // => 'eybdooG'
  }
});

var app18 = new Vue({
  el: '#app-18',
  data: {
    message: 'Hello'
  },
  methods: {
    reverseMessage: function() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
  // Instead of a computed property, we can define the same function 
  // as a method instead. For the end result, the two approaches are 
  // indeed exactly the same. However, the difference is that computed 
  // properties are cached based on their dependencies. 
  // A computed property will only re-evaluate when some of its dependencies 
  // have changed. This means as long as message has not changed, 
  // multiple access to the reversedMessage computed property will 
  // immediately return the previously computed result without having to 
  // run the function again.

// This also means the following computed property will never update, 
// because Date.now() is not a reactive dependency:
computed: {
  now: function () {
    return Date.now()
  }
}
// Why do we need caching? Imagine we have an expensive computed property A, which requires looping through a huge Array and doing a lot of computations. Then we may have other computed properties that in turn depend on A. Without caching, we would be executing A’s getter many more times than necessary! In cases where you do not want caching, use a method instead.
});
var app19 = new Vue({
  el: '#app-19',
  data: {
    firstName: 'Dereje',
    lastName: 'Kitaw',
    fullName: 'Dereje Kitaw'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
});
var app20 = new Vue({
  el: '#app-20',
  data: {
    firstName: 'Dereje',
    lastName: 'Kitaw',
  },
  computed: {
    fullName: function () {
      return this.firstName + ' - ' + this.lastName
    }
  }
});
var app21 = new Vue({
  el: '#app-21',
  data: {
    firstName: 'Dereje',
    lastName: 'Kitaw',
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' _ ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
});
var app22 = new Vue({
  el: '#app-22',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
});