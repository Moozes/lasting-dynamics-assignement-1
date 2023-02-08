// returns formik error as a boolean
export function formikError(inputName: string, formik: any) {
    return Boolean(formik.touched[inputName] && formik.errors[inputName])
}