import { ADD_WIDGET } from "../reducers/dataReducer";

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});
