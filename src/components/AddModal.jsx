import { useRef, useEffect, useState } from "react";
import WidgetForm from "./forms/WidgetForm";
import { IonIcon } from "@ionic/react";
import { closeOutline, trashOutline } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { removeWidget, toggleWidget } from "../actions/dataActions";

const AddModal = ({
  data,
  dialogToggle,
  currentCategoryId,
  handleDialogToggle,
  handleCurrentCategoryId,
}) => {
  const [toggleForm, setToggleForm] = useState(false);
  const dialogModal = useRef(null);
  const dispatch = useDispatch();

  const currentCategory = data.categories.find(
    (category) => category.id === currentCategoryId
  );

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(currentCategoryId, widgetId));
  };

  const handleToggleWidget = (widgetId) => {
    dispatch(toggleWidget(currentCategoryId, widgetId));
  };

  useEffect(() => {
    if (dialogToggle) {
      dialogModal?.current?.showModal();
    } else {
      dialogModal?.current?.close();
    }
  }, [dialogToggle]);
  return (
    <>
      {dialogToggle && (
        <dialog
          className="relative ml-auto top-1/2 transform -translate-x-0 -translate-y-1/2  h-full  w-2/5 border-none rounded-l-lg shadow-lg"
          ref={dialogModal}
        >
          <div className="p-3 flex justify-between bg-blue-900 text-neutral-50">
            <p>Add Widget</p>
            <button onClick={handleDialogToggle} className="flex items-center">
              <IonIcon icon={closeOutline} className="text-xl font-medium" />
            </button>
          </div>
          <p className="p-2 text-neutral-800 text-base">
            Personalize your dashboard by adding the following widget
          </p>
          <div className="flex gap-1 px-1">
            {data.categories.map((category) => (
              <button
                className={`px-3 py-1  rounded-b-sm ${
                  category.id === currentCategory.id
                    ? "border-b-4 border-b-blue-900"
                    : ""
                }`}
                key={category.id}
                onClick={() => {
                  handleCurrentCategoryId(category.id);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="mt-2 p-3">
            {toggleForm ? (
              <WidgetForm
                categoryId={currentCategoryId}
                handleToggleForm={handleToggleForm}
              />
            ) : (
              <>
                {currentCategory.widgets.map((widget) => (
                  <div
                    className="flex justify-between p-2 outline-1 outline outline-neutral-400 rounded mb-2"
                    key={widget.id}
                  >
                    <label className="flex items-center gap-2 text-base font-normal cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded-sm accent-neutral-800"
                        value={widget.widgetId}
                        checked={widget.widgetChecked}
                        onChange={() => handleToggleWidget(widget.id)}
                      />
                      <p>{widget.widgetName}</p>
                    </label>
                    <button onClick={() => handleRemoveWidget(widget.id)}>
                      <IonIcon
                        icon={trashOutline}
                        className=" text-red-600 text-xl cursor-pointer hover:scale-[1.05]"
                      />
                    </button>
                  </div>
                ))}
                <button
                  className="w-full p-2 outline outline-1 outline-neutral-400 font-medium rounded mb-2"
                  onClick={handleToggleForm}
                >
                  + Add
                </button>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddModal;
