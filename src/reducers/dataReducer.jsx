export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";

const initialState = {
  categories: [
    {
      id: "1",
      name: "Category 1",
      widgets: [
        { id: "11", widgetName: "testOne", widgetText: "testOne is a test" },
        {
          id: "12",
          widgetName: "testThree",
          widgetText: "testThree is a test",
        },
      ],
    },
    {
      id: "2",
      name: "Category 2",
      widgets: [
        { id: "22", widgetName: "testTwo", widgetText: "testTwo is a test" },
      ],
    },
  ],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
};

export default dataReducer;
