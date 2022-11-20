new Vue({
  el: "#vue-app",
  data: {
    value: 0,
  },
  methods: {
    update: function (t) {
      console.log("entered", t.target.value);
      t.target.value = "";
    },
  },
});
