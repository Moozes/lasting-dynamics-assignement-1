import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fakeAPI } from "utils/utils";

export default function useFormValidation1() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      workspaceName: "",
      email: "",
      termsAndConditions: false,
    },
    validationSchema: Yup.object({
      workspaceName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email format"),
      termsAndConditions: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
    }),
    onSubmit: async (values, helpers) => {
        // TODO: add a delay effect + spinner
      await fakeAPI(2000)
      navigate("email-sent")
      helpers.resetForm();
    },
  });
  return formik;
}
