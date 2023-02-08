import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "api/authentication";

export default function useFormValidation() {
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
    //   const loginValid = await login(values.email, values.password);
    //   if(loginValid) {
    //     setTimeout(() => navigate("/dashboard"), 2000)
    //   } 
    alert(JSON.stringify(values))
      helpers.resetForm();
    },
  });
  return formik;
}
