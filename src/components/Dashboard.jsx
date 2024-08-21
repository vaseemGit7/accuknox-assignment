import { IonIcon } from "@ionic/react";
import {
  ellipsisVertical,
  sync,
  addOutline,
  chevronForwardOutline,
  searchOutline,
  chevronDown,
  notificationsOutline,
  personCircle,
} from "ionicons/icons";
import Category from "./Category";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between px-4 py-2 bg-neutral-50">
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-500 font-normal">Home</p>
          <IonIcon
            className="text-sm text-neutral-500"
            icon={chevronForwardOutline}
          />
          <p className="text-sm font-semibold text-blue-900">Dashboard v2</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative w-64 flex justify-between">
            <input
              // ref={searchRef}
              className="py-1 px-2 rounded-md text-sm text-neutral-600 bg-neutral-100 outline outline-1 outline-neutral-200 hover:outline-neutral-300 focus:outline-neutral-300"
              type="text"
              placeholder="Search anything..."
              // onKeyDown={handleSeachQuery}
            ></input>
            <IonIcon
              icon={searchOutline}
              className="absolute right-8 top-1 text-lg text-neutral-400"
            ></IonIcon>
          </div>
          <IonIcon icon={chevronDown} className="text-lg text-neutral-400" />
          <IonIcon
            icon={notificationsOutline}
            className="text-lg text-neutral-400"
          />
          <IonIcon icon={personCircle} className="text-xl text-neutral-400" />
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between mb-4">
          <p className="text-xl font-semibold">CNAPP Dashboard</p>
          <div className="flex gap-3">
            <button className="flex gap-2 text-sm font-normal items-center outline outline-2 outline-neutral-300 text-neutral-600 rounded py-1 px-3 bg-neutral-50 hover:bg-neutral-100">
              Add Widget
              <IonIcon
                icon={addOutline}
                className="text-base text-neutral-700"
              />
            </button>
            <div className="flex items-center px-2 py-1 bg-neutral-50 outline outline-2 outline-neutral-300 rounded">
              <IonIcon icon={sync} className="text-sm text-neutral-700" />
            </div>
            <div className="flex items-center px-2 py-1 bg-neutral-50 outline outline-2 outline-neutral-300 rounded">
              <IonIcon
                icon={ellipsisVertical}
                className="text-sm text-neutral-700"
              />
            </div>
            <div className="px-3 py-1 text-sm font-medium bg-neutral-50 outline outline-2 outline-neutral-300 text-neutral-600 rounded">
              <p>Last 2 days</p>
            </div>
          </div>
        </div>
        <Category categoryId="1"></Category>
        <Category categoryId="2"></Category>
      </div>
    </>
  );
};

export default Dashboard;
