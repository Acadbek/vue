new Vue({
  el: "#vue-app",
  data: {
    age: 21,
    x: 0,
    y: 0,
  },
  methods: {
    add: function () {
      this.age++;
    },
    subtract: function () {
      this.age--;
    },
    updateXY: function (event) {
      console.log(event);
      (this.x = event.offsetX), (this.y = event.offsetY);
    },
  },
});
