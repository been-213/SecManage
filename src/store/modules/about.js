import { get } from '../../service/http';
// getters
const getters = {
  doneTodos: (state) => state.todos.filter((todo) => todo.done),
};

// actions
const actions = {
  getMockList({ commit }) {
    get('/mock/test').then((res) => {
      commit('saveState', { value: res.user, key: 'List' });
    });
  },
};

// mutations
const mutations = {
  // 保存数据
  saveState(state, { key, value }) {
    state[key] = value;
  },
};

// initial state
const state = () => ({
  count: 1,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
  ],
  List: [],
});
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
