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