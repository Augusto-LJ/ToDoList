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
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  created() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
};

Vue.createApp(ToDoList).mount("#app");
