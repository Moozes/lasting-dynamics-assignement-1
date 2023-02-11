import { useFormik } from "formik";
import * as Yup from "yup"
export default function useCreateProcessForm() {
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
            alert(JSON.stringify(values))
        } 
    })
    return formik
}