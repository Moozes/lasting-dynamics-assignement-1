import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fakeAPI } from "utils/utils";

export default function useFormValidation2() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      repeatPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values, helpers) => {
      // TODO: add a delay effect + spinner
      await fakeAPI(2000);
      navigate("/");
      helpers.resetForm();
    },
  });
  return formik;
}
