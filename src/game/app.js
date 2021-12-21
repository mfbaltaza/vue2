new Vue({
  el: "#app",
  data: {
    health: 100,
    ended: false
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ' | e.key === 'Enter') {
        this.health -= 10
        if (this.health === 0 ) {
          this.ended = true;
        }
      }
    })
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health === 0 ) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {},
})