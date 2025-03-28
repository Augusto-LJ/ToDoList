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
      newTodo: {},
    };
  },
  methods: {
    clearAll: function () {
      this.todos = [];
    },
    addToDo: function () {
      if (this.newTodo.description) {
        this.todos.push(this.newTodo);
        this.newTodo = {};
      }
    },
  },
};

Vue.createApp(ToDoList).mount("#app");
