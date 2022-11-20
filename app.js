new Vue({
  el: "#vue-app",
  data: {
    a: 0,
    b: 0,
    age: 20,
  },
  methods: {},
  computed: {
    addToA: function () {
      console.log("A");
      return this.age + this.a;
    },
    addToB: function () {
      console.log("B");
      return this.age + this.b;
    },
  },
});
