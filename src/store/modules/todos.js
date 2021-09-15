import {fetechTodos, addNewTodo, deleteTodo, filterTodos} from '../../services/TodoService';

const TODOS_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const state = {
    todos: []
};

const getters = {
    alltodos: (state) => state.todos,
};

const mutations = {
    setTodos: (state, todos) => state.todos = todos,

    addTodo: (state, todo) => {
      return  state.todos.unshift(todo);
    },

    deletedTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id))
};

const actions = {
    async fetechTodos({commit}) {
        const response = await fetechTodos(TODOS_BASE_URL);
        commit('setTodos', response.data);
    },

    async addNewTodo({commit},title) {
        const payload = {
            title: title,
            completed: false 
        };

        const response = await addNewTodo(TODOS_BASE_URL, payload);

        commit('addTodo', response.data);
    },

    async deleteTodo({commit},id) {
        await deleteTodo(`${TODOS_BASE_URL}/${id}`);
        commit('deletedTodo', id);
    },

    async filterTodos({commit},limit) {
        const response = await filterTodos(`${TODOS_BASE_URL}?_limit=${limit}`);
        commit('setTodos', response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};