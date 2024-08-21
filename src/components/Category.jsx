import { useSelector } from "react-redux";
import AddModal from "./AddModal";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { useDispatch } from "react-redux";
import { addOutline } from "ionicons/icons";
import { toggleWidget } from "../actions/dataActions";
import Widget from "./Widget";

const Category = ({ categoryId, queryWidgets }) => {
  const data = useSelector((state) => state.dataReducer);
  const [dialogToggle, setDialogToggle] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const dispatch = useDispatch();

  const category = data.categories.find(
    (category) => category.id === categoryId
  );

  const handleCurrentCategoryId = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  const handleDialogToggle = () => {
    setDialogToggle((prevState) => !prevState);
  };

  const handleToggleWidget = (widgetId) => {
    dispatch(toggleWidget(categoryId, widgetId));
  };

  return (
    <div className="px-3 py-1">
      <p className="text-lg font-semibold text-neutral-900">{category.name}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(550px, 1fr))",
          gap: "15px",
        }}
        className="p-1 overflow-x-scroll"
      >
        <>
          <Widget
            widgets={queryWidgets ? queryWidgets : category.widgets}
            handleToggleWidget={handleToggleWidget}
          />
        </>
        {!queryWidgets && (
          <div className="p-2 flex min-h-56 justify-center outline outline-1 outline-neutral-200 items-center rounded-2xl bg-[#ffffff] drop-shadow-sm">
            <button
              className="flex gap-2 items-center outline outline-1 outline-neutral-400 text-neutral-500 font-medium rounded py-1 px-3 hover:bg-neutral-100"
              onClick={() => {
                handleCurrentCategoryId(category.id);
                handleDialogToggle();
              }}
            >
              <IonIcon icon={addOutline} className="text-lg" />
              Add Widget
            </button>
          </div>
        )}
      </div>
      <AddModal
        data={data}
        dialogToggle={dialogToggle}
        currentCategoryId={currentCategoryId}
        handleDialogToggle={handleDialogToggle}
        handleCurrentCategoryId={handleCurrentCategoryId}
      />
    </div>
  );
};

export default Category;
