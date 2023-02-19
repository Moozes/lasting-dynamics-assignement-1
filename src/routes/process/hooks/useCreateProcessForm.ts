import { useFormik } from "formik";
import { useContext } from "react";
import { fakeAPI } from "utils/utils";
import * as Yup from "yup";
import { processesContext } from "../context/processes";

export default function useCreateProcessForm(onClose: VoidFunction) {
  const { addProcess } = useContext(processesContext);
  const formik = useFormik({
    initialValues: {
      processName: "",
      color: "#000000",
    },
    validationSchema: Yup.object({
      processName: Yup.string().required("Required"),
      color: Yup.string().required("Required"),
    }),
    onSubmit: async (values, helpers) => {
      await fakeAPI(2000);
      addProcess(values.processName, values.color);
      helpers.resetForm()
      onClose();
    },
  });
  return formik;
}
