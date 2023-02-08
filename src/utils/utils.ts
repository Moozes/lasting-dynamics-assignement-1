export function formikError(inputName: string, formik: any) {
    return Boolean(formik.touched[inputName] && formik.errors[inputName]) as boolean
}