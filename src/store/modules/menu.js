export default {
  actions: {
  },
  state: {
    menu: [{
      id: 1,
      label: 'Пункт меню 1',
      name: 'Home',
      visible: true,
      sort: 1,
    }, {
      id: 2,
      label: 'Пункт меню 2',
      name: 'Home',
      visible: true,
      sort: 2,
    }, {
      id: 3,
      label: 'Пункт меню 3',
      name: 'Home',
      visible: true,
      sort: 3,
    }, {
      id: 4,
      label: 'Пункт меню 4',
      name: 'Home',
      visible: true,
      sort: 4,
    }],
  },
  mutations: {
    CREATE_ITEM_MENU({ menu }, newItem) {
      menu.push(newItem);
    },
    UPDATE_ITEM_MENU({ menu }, upItem) {
      let item = menu.find(({ id }) => id === upItem.id);
      if (item) item = upItem;
    },
    DATELE_ITEM_MENU({ menu }, itemID) {
      menu.splice(itemID, 1);
    },
  },
  getters: {
    getMenu(state) { return state.menu; },
  },
};
