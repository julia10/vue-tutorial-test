var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello Vue!',
    title: 'You loaded this element on ' + new Date().toLocaleString(),
    count: 3
  }
})

var app2 = new Vue({
  el: '#div2',
  data: {
    email: ''
  }
})
//
// Cats
//

Vue.component('cats-list', {
  props: ['list'],
  template: `
  <ul>
    <li v-for = 'cat in list'> {{cat.name}} </li>
  </ul>
  `
})

var app3 = new Vue({
  el: "#div3",
  data: {
    cats: [
      { name: 'marsik' },
      { name: 'sonya' },
      { name: 'musya' },
      { name: 'barsik' }
    ],
    newCat: '',
  },

  component: [
    'cat-list'
  ],

  methods: {
    addCat: function () {
      this.cats.push({ name: this.newCat });
      this.newCat = '';
    }
  },

  filters: {
    capitalize: function (value) {
      return value.toUpperCase();
    }
  },

  computed: {
    kittifiedName: {
      get: function () {
        if (this.newCat.length > 1) {
          return this.newCat + 'y';
        }
      }
    }
  }
})

// Components
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-title', {
  props: ['title'],
  template: "<h1 class='red'>{{title}}</h1>"
})


var app4 = new Vue({
  el: '#div4',
  data: {
    posts: [
      { id: 1, title: 'The sun is bright' },
      { id: 2, title: 'My mum is lovely' },
      { id: 3, title: 'I love my husband' }
    ]
  }
})