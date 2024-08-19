import { useRef, useEffect } from "react";

const AddModal = ({
  data,
  dialogToggle,
  currentCategory,
  handleDialogToggle,
  handleCurrentCategory,
}) => {
  const dialogModal = useRef(null);

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
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddModal;
