new Vue({
  el: "#vue-app",
  data: {
    name: "Asad",
    job: "Dev",
  },
  methods: {
    greet: function (str) {
      return `${str} ${this.name}`;
    },
  },
});
