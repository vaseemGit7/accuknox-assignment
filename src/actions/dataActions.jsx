import { ADD_WIDGET } from "../reducers/dataReducer";
import { REMOVE_WIDGET } from "../reducers/dataReducer";
import { TOGGLE_WIDGET } from "../reducers/dataReducer";

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, widgetId },
});

export const toggleWidget = (categoryId, widgetId) => ({
  type: TOGGLE_WIDGET,
  payload: { categoryId, widgetId },
});
