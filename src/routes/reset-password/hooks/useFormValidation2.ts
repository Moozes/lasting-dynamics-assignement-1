import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function useFormValidation2() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
        password: Yup.string().required("Required"),
        repeatPassword: Yup.string().required("Required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: async (values, helpers) => {
        // TODO: add a delay effect + spinner
      navigate("/")
      helpers.resetForm();
    },
  });
  return formik;
}