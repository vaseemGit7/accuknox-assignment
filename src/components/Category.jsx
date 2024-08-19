import { useSelector } from "react-redux";

const Category = ({ categoryId }) => {
  const data = useSelector((state) => state.dataReducer);
  const category = data.categories.find(
    (category) => category.id === categoryId
  );

  return (
    <div className="px-3 py-2 border-2 border-neutral-500">
      <p className="text-base font-semibold text-neutral-900">
        {category.name}
      </p>
      <div className="flex gap-1 overflow-x-scroll">
        {category.widgets.map((widget) => (
          <div
            className="p-2 flex flex-col rounded-md border-2 border-neutral-800"
            key={widget.id}
          >
            <p>{widget.widgetName}</p>
            <p>{widget.widgetText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
