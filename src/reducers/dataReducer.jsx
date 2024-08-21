export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";
export const TOGGLE_WIDGET = "TOGGLE_WIDGET";

const initialState = {
  categories: [
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "11",
          widgetName: "Cloud Accounts",
          widgetText: "Text message of Cloud Accounts",
          widgetChecked: true,
        },
        {
          id: "12",
          widgetName: "Cloud Account Risk Assessment",
          widgetText: "Text message of Cloud Account Risk Assessment",
          widgetChecked: true,
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "21",
          widgetName: "Top 5 Namespace Specific Alerts",
          widgetText: "Text message of Top 5 Namespace Specifc Alerts",
          widgetChecked: true,
        },
        {
          id: "22",
          widgetName: "Workload Alerts",
          widgetText: "Text message of Workload Alerts",
          widgetChecked: true,
        },
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
    case TOGGLE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.map((widget) =>
                  widget.id === action.payload.widgetId
                    ? { ...widget, widgetChecked: !widget.widgetChecked }
                    : widget
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
