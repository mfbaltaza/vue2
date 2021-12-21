new Vue({
  el: "#vue-app",
  data: {
    available: true,
    name: "Juan",
    age: 19,
    job: "Ninja",
    website: "https://www.basedcode.com",
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    success: false,
    error: false,
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name;
    },
    logName(e) {
      console.log();
      this.name = e;
    },
    logAge(e) {
      this.age = e;
    },
    showAlert() {
      alert("Hello Man");
    },
    updateXY(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    addToA() {
      console.log("Add to A");
      if (!this.age) return 'Please type your age'
      return this.a + parseInt(this.age);
    },
    addToB() {
      console.log("Add to B");
      if (!this.age) return 'Please type your age'
      return this.b + parseInt(this.age);
    },
    compClasses() {
      return {
        available: this.available,
      };
    },
  },
});
