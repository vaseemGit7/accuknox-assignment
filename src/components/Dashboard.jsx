import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.dataReducer);
  return (
    <>
      {data.categories.map((category) => (
        <div
          className="flex flex-row border-2 border-red-500"
          key={category.id}
        >
          <p>{category.name}</p>
          <p>{category.widgets}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
