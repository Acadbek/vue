new Vue({
  el: "#vue-app",
  data: {
    active: false,
    active2: false,
    age: 37,
  },
  computed: {
    compClasses: function () {
      return {
        active: this.active,
        active2: this.active2,
      };
    },
  },
});
