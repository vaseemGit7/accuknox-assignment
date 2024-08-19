const initialState = {
  categories: [
    {
      id: "1",
      name: "Category 1",
      widgets: ["testOne"],
    },
    {
      id: "2",
      name: "Category 2",
      widgets: ["testTwo"],
    },
  ],
};

const dataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default dataReducer;
