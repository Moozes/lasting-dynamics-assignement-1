export function formikError(inputName: string, formik: any) {
    return formik.touched[inputName] && formik.errors[inputName] as boolean
}