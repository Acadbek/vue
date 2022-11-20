new Vue({
  el: "#vue-app",
  data: {
    name: "Asad",
    job: "Dev",
    website: "https://nosirjonov.uz",
    tag: "<p>Asadbek</p>",
  },
  methods: {
    greet: function (str) {
      return `${str} ${this.name}`;
    },
  },
});
