const appModule = () => ({
  state: {
    activeMenu: false
  },
  mutations: {
      toggleMenu(state) {
        state.activeMenu = !state.activeMenu;
      }
  },
  actions: {
      toggleMenu(context) {
          context.commit('toggleMenu');
      }
  }
});

export default appModule;
