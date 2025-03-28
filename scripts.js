var todos = [
  {
    description: "Learn HTML, CSS and Javascript",
    done: true,
  },
  {
    description: "Learn Vue.js",
    done: false,
  },
  {
    description: "Read 10 pages of my book",
    done: true,
  },
];

const ToDoList = {
  data() {
    return {
      todos: window.todos,
    };
  },
  methods: {
    clearAll: function () {
      this.todos = [];
    },
  },
};

Vue.createApp(ToDoList).mount("#app");
