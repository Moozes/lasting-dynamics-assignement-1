import { useFormik } from "formik";
import { useContext } from "react";
import { TContract } from "types/types";
import { fakeAPI } from "utils/utils";
import * as Yup from "yup";
import { contractsContext } from "../context/contracts";

export default function useAddContractForm(closeAddForm: VoidFunction) {
  const { addContract } = useContext(contractsContext);
  const formik = useFormik({
    initialValues: {
      contractNumber: "",
      customerNumber: "",
      email: "",
      contractType: "cdd",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      contractNumber: Yup.string().required("required"),
      customerNumber: Yup.string().required("required"),
      email: Yup.string().required("required").email("Invalid email format"),
      contractType: Yup.string().required("required"),
      phoneNumber: Yup.string().required("required"),
    }),
    onSubmit: async (values, helpers) => {
      await fakeAPI(2000);
      addContract(values as TContract);
      helpers.resetForm();
      closeAddForm();
    },
  });

  return formik;
}
