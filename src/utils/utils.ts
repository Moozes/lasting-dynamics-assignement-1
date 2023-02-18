import { sideNavigationMenuArray } from "components/dashboard-container/sideNavigationMenuArray";

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

export function generateEmptyRoutes() {
  return sideNavigationMenuArray.map(elm => ({
      path: elm.text,
      element: elm.text
  }))
}

// returns an object with font styles css
export function font(weight: number, size: number, lineHeight: number, color: string) {
  return {
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight+"px",
    color
  }
}
