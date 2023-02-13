import { useFormik } from "formik";
import { fakeAPI } from "utils/utils";
import * as Yup from "yup"

export default function useAddContractForm(closeAddForm: VoidFunction) {
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
            helpers.resetForm()
            closeAddForm()
        }
    })

    return formik
}