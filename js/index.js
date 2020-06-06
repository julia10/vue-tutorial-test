var app = new Vue({
    el: '#root',
    data: {
      message: 'Hello Vue!',
      title: 'You loaded this element on ' + new Date().toLocaleString(),
      count: 3
    }
  })

  var app2 = new Vue({
      el:'#div2',
      data: {
          email:''
      }
  })

  //Finished on 11.35