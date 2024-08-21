import { useSelector } from "react-redux";
import AddModal from "./AddModal";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { useDispatch } from "react-redux";
import { addOutline, closeOutline } from "ionicons/icons";
import { toggleWidget } from "../actions/dataActions";

const Category = ({ categoryId }) => {
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
    <div className="px-3 py-2">
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
          {category.widgets.map(
            (widget) =>
              widget.widgetChecked && (
                <div
                  className="p-4 h-56 flex flex-row justify-between rounded-2xl outline outline-1 outline-neutral-200 bg-[#ffffff] drop-shadow-sm relative group hover:scale-[1.015] "
                  key={widget.id}
                >
                  <div className="flex flex-col gap-3">
                    <p className="text-base font-semibold text-neutral-800">
                      {widget.widgetName}
                    </p>
                    <p className="text-sm font-medium text-neutral-800">
                      {widget.widgetText}
                    </p>
                  </div>
                  <div className="self-start">
                    <button
                      className="opacity-0 group-hover:opacity-100 border-none "
                      onClick={() => handleToggleWidget(widget.id)}
                    >
                      <IonIcon
                        icon={closeOutline}
                        className=" text-neutral-600 text-xl cursor-pointer hover:scale-[1.05]"
                      />
                    </button>
                  </div>
                </div>
              )
          )}
        </>
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
