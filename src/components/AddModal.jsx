import { useRef, useEffect, useState } from "react";
import WidgetForm from "./forms/WidgetForm";

const AddModal = ({
  data,
  dialogToggle,
  currentCategory,
  handleDialogToggle,
  handleCurrentCategory,
}) => {
  const [toggleForm, setToggleForm] = useState(false);
  const dialogModal = useRef(null);

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
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
          className="fixed top-0 right-0 h-full w-1/3 border-none p-3 rounded-l-lg shadow-lg"
          ref={dialogModal}
        >
          <div className="p-3 flex justify-between bg-blue-900 text-neutral-50">
            <p>Add Widget</p>
            <button onClick={handleDialogToggle}>Close</button>
          </div>
          <p className="px-1 py-2">
            Personalize your dashboard by adding the following widget
          </p>
          <div className="flex gap-1">
            {data.categories.map((category) => (
              <button
                className={`px-3 py-1 ${
                  category.id === currentCategory.id
                    ? "border-b-4 border-b-blue-900"
                    : ""
                }`}
                key={category.id}
                onClick={() => {
                  handleCurrentCategory(category);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="mt-2">
            {toggleForm ? (
              <WidgetForm
                categoryId={currentCategory.id}
                handleToggleForm={handleToggleForm}
              />
            ) : (
              <>
                {currentCategory.widgets.map((widget) => (
                  <div
                    className="p-2 outline-1 outline outline-neutral-400 rounded mb-2"
                    key={widget.id}
                  >
                    <label className="flex items-center gap-2 text-base font-normal cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded-sm accent-neutral-800"
                        value={widget.widgetId}
                      />
                      <p>{widget.widgetName}</p>
                    </label>
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
