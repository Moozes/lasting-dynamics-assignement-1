import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "api/authentication";

export default function useFormValidation(
  setSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Invalid email format"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, helpers) => {
      const loginValid = await login(values.email, values.password);
      setSuccessOpen(loginValid)
      setErrorOpen(!loginValid)
      if(loginValid) {
        setTimeout(() => navigate("/dashboard"), 2000)
      } 
      helpers.resetForm();
    },
  });
  return formik;
}
