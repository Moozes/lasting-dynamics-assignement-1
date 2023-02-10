// returns formik error as a boolean
export function formikError(inputName: string, formik: any) {
  return Boolean(formik.touched[inputName] && formik.errors[inputName]);
}

// fake an API delay
export function fakeAPI(timer: number) {
  return new Promise<string>((res, rej) =>
    setTimeout(() => res("resolved"), timer)
  );
}


export function getAuthenticationFromLocalStorage() {
  return Boolean(localStorage.getItem("isAuthenticated"))
}
