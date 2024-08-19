import { useSelector } from "react-redux";
import AddModal from "./AddModal";
import { useState } from "react";

const Category = ({ categoryId }) => {
  const data = useSelector((state) => state.dataReducer);
  const [dialogToggle, setDialogToggle] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const category = data.categories.find(
    (category) => category.id === categoryId
  );

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category);
  };

  const handleDialogToggle = () => {
    setDialogToggle((prevState) => !prevState);
  };

  console.log(currentCategory);

  return (
    <div className="px-3 py-2 border-2 border-neutral-500">
      <p className="text-base font-semibold text-neutral-900">
        {category.name}
      </p>
      <div className="flex gap-1 overflow-x-scroll">
        <>
          {category.widgets.map((widget) => (
            <div
              className="p-2 flex flex-col rounded-md border-2 border-neutral-800"
              key={widget.id}
            >
              <p>{widget.widgetName}</p>
              <p>{widget.widgetText}</p>
            </div>
          ))}
        </>
        <div className="p-2 flex items-center rounded-md border-2 border-neutral-800">
          <button
            className="border-2 border-neutral-800 rounded p-1"
            onClick={() => {
              handleCurrentCategory(category);
              handleDialogToggle();
            }}
          >
            + Add Widget
          </button>
        </div>
      </div>
      <AddModal
        data={data}
        dialogToggle={dialogToggle}
        currentCategory={currentCategory}
        handleDialogToggle={handleDialogToggle}
        handleCurrentCategory={handleCurrentCategory}
      />
    </div>
  );
};

export default Category;
