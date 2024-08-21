import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

const Widget = ({ widgets, handleToggleWidget }) => {
  return (
    <>
      {widgets.map(
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
  );
};

export default Widget;
