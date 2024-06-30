import { createStore } from "vuex";
function getDatabaseUsers() {
  const database = localStorage.getItem("addUser");
  return database ? JSON.parse(database) : [];
}
function getDatabaseUser() {
  const data = localStorage.getItem("theUser");
  return data ? JSON.parse(data) : {};
}
export default createStore({
  state: {
    dataUser: getDatabaseUsers(),
    addUser: getDatabaseUser(),
    text: "",
    upTodo: {},
    todos: getDatabaseUser(),
    mode: "create",
    disaplyFilter: false,
    disaplySearch: false,
    textSearch: "",
  },
  mutations: {
    createUser(state, user) {
      const isUser = state.dataUser.find((el) => el.email === user.email);
      if (!isUser) {
        if (
          user.name !== "" &&
          user.email !== "" &&
          user.password !== "" &&
          user.image !== ""
        ) {
          state.dataUser.push({
            ...user,
            todos: [],
          });
          window.location.href = "/login";
          localStorage.setItem("addUser", JSON.stringify(state.dataUser));
        } else {
          alert("لا تترك حقل فارغ");
        }
      } else {
        alert("هذا المستخدم موجود بالفعل");
      }
    },
    loginUser(state, user) {
      const login = state.dataUser.find(
        (e) => e.name === user.name && e.password === user.password
      );
      if (login) {
        state.addUser = login;
        window.location.href = "/";
        localStorage.setItem("theUser", JSON.stringify(login));
      } else {
        state.addUser = {};
        localStorage.setItem("theUser", JSON.stringify(state.addUser));
        alert("اسم المستخدم أو كلمة المرور غير صحيحة");
      }
    },
    addTodo(state, todo) {
      const user = state.addUser.name;
      if (user) {
        if (todo !== "") {
          if (state.mode === "create") {
            let newTodo = state.addUser.todos.find((el) => el.todo === todo);
            if (!newTodo) {
              state.addUser.todos.unshift({ todo, done: false });
              localStorage.setItem("theUser", JSON.stringify(state.addUser));
              let dataBase = state.dataUser.find(
                (e) => e.email === state.addUser.email
              );
              if (dataBase) {
                dataBase.todos = state.addUser.todos;
              }
              localStorage.setItem("addUser", JSON.stringify(state.dataUser));
            } else {
              alert("المهمة موجودة مسبقاً");
            }
          } else {
            let updatetodo = state.addUser.todos.find(
              (e) => e.todo === state.upTodo.todo
            );
            if (updatetodo) {
              updatetodo.todo = state.text;
            }
            localStorage.setItem("theUser", JSON.stringify(state.addUser));
            let dataBase = state.dataUser.find(
              (e) => e.email === state.addUser.email
            );
            if (dataBase) {
              dataBase.todos = state.addUser.todos;
            }
            localStorage.setItem("addUser", JSON.stringify(state.dataUser));
          }
          state.text = "";
        } else {
          alert("هذا الحقل مطلوب");
        }
      } else {
        alert("سجل دخول أولاً");
        window.location.href = "/login";
      }
    },
    deleteTodo(state, a) {
      for (let i = 0; i < state.addUser.todos.length; i++) {
        if (a === i) {
          state.addUser.todos.splice(i, 1);
          localStorage.setItem("theUser", JSON.stringify(state.addUser));
        }
      }
      let dataBase = state.dataUser.find(
        (e) => e.email === state.addUser.email
      );
      if (dataBase) {
        dataBase.todos = state.addUser.todos;
      }
      localStorage.setItem("addUser", JSON.stringify(state.dataUser));
    },
    deleteAllTodo(state) {
      state.addUser.todos.splice(0);
      localStorage.setItem("theUser", JSON.stringify(state.addUser));
      let dataBase = state.dataUser.find(
        (e) => e.email === state.addUser.email
      );
      if (dataBase) {
        dataBase.todos = state.addUser.todos;
      }
      localStorage.setItem("addUser", JSON.stringify(state.dataUser));
    },
    updateTodo(state, a) {
      let up = state.addUser.todos.find((e, i) => i === a);
      state.text = up.todo;
      state.upTodo = up;
      state.mode = "update";
    },
    logoutUser() {
      localStorage.setItem("theUser", JSON.stringify(""));
      window.location.href = "/";
    },
    condition(state, a) {
      let up = state.addUser.todos.find((e, i) => i === a);
      up.done = !up.done;
      localStorage.setItem("theUser", JSON.stringify(state.addUser));
      let dataBase = state.dataUser.find(
        (e) => e.email === state.addUser.email
      );
      if (dataBase) {
        dataBase.todos = state.addUser.todos;
      }
      localStorage.setItem("addUser", JSON.stringify(state.dataUser));
    },
    async complete(state) {
      let filtered = await state.todos.todos.filter((e) => e.done === true);
      state.addUser.todos = filtered;
    },
    async notComplete(state) {
      let filtered = await state.todos.todos.filter((e) => e.done === false);
      state.addUser.todos = filtered;
    },
    filterSearch(state, text) {
      let filtered = state.todos.todos.filter((e) =>
        e.todo.toLowerCase().includes(text.toLowerCase())
      );
      state.addUser.todos = filtered;
    },
  },
  actions: {
    checkDataUser({ commit }, user) {
      commit("loginUser", user);
    },
    saveDataUser({ commit }, user) {
      commit("createUser", user);
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    deletedTodo({ commit }, a) {
      commit("deleteTodo", a);
    },
    deletedAllTodo({ commit }) {
      commit("deleteAllTodo");
    },
    updatedTodo({ commit }, a) {
      commit("updateTodo", a);
    },
    logout({ commit }) {
      commit("logoutUser");
    },
    theCondition({ commit }, done) {
      commit("condition", done);
    },
    theCompleted({ commit }) {
      commit("complete");
    },
    theNotCompleted({ commit }) {
      commit("notComplete");
    },
    filteredData({ commit }, text) {
      commit("filterSearch", text);
    },
  },
  modules: {},
});
