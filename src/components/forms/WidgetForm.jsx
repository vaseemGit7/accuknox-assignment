import { Formik } from "formik";
import { v4 as uuid } from "uuid";
import CustomInput from "./CustomInput";
import { useDispatch } from "react-redux";
import { addWidget } from "../../actions/dataActions";

const WidgetForm = ({ categoryId, handleToggleForm }) => {
  const dispatch = useDispatch();

  const getUniqueId = () => {
    const uniqueId = uuid();
    return uniqueId;
  };

  const handleSubmission = (values) => {
    const widget = { id: getUniqueId(), ...values };
    dispatch(addWidget(categoryId, widget));
    handleToggleForm();
  };

  return (
    <Formik
      initialValues={{ widgetName: "", widgetText: "" }}
      onSubmit={(values) => handleSubmission(values)}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  justify-start gap-2"
        >
          <CustomInput name="widgetName" type="text" label="Widget Name" />
          <CustomInput name="widgetText" type="text" label="Widget Text" />
          <button
            type="submit"
            className="py-2 px-3 self-center w-3/5 mt-3 text-center align-middle bg-neutral-800 text-base text-neutral-50 font-normal rounded hover:drop-shadow-lg"
          >
            Save
          </button>
          <button
            type="button"
            className="py-2 px-3 self-center w-3/5 mt-3 text-center align-middle bg-neutral-50 outline outline-1 outline-neutral-600 text-base text-neutral-800 font-normal rounded hover:drop-shadow-lg"
            onClick={handleToggleForm}
          >
            Cancel
          </button>
        </form>
      )}
    </Formik>
  );
};

export default WidgetForm;
