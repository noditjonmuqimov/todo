const app = {
  data() {
    return {
      list: [],
      text: "",
      view: true,
      aa: true,

    };
  },
  methods: {
    edit() {
      this.aa = false;
      this.view = false;
      
    },
    save() {
      this.view = true;
      this.aa=true
    },

    addCard() {
      this.list.push({
        name: this.text,
      });
      this.text = "";
    },

    delCard(i) {
      this.list.forEach((card, index) => {
        if (i == index) {
          this.list.splice(i, 1);
        }
      });
    },
  },
};
Vue.createApp(app).mount("#app");
