let app;
fetch('data.json').then(e=>e.json()).then(data=>{
    app = new Vue({
        el: '#app',
        data
      })
})