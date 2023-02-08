import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
    onSubmit: (values, helpers) => {
      helpers.resetForm();
      setSuccessOpen(true)
      // setErrorOpen(true)
      setTimeout(() => navigate("/dashboard"), 2000)
    },
  });
  return formik;
}
