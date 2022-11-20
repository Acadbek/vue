new Vue({
  el: "#vue-app",
  data: {
    active: false,
    active2: false,
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
