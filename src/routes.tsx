import { createBrowserRouter } from "react-router-dom";
import Login from "routes/login/Login";
import ResetPasswordStep1Form from "routes/reset-password/components/Step1Form";
import ResetPasswordEmailSent from "routes/reset-password/components/EmailSent";
import ResetPasswordStep2Form from "routes/reset-password/components/Step2Form";
import Signup from "routes/singup/Signup"
import SignupStep1Form from "routes/singup/components/Step1Form";
import SignupEmailSent from "routes/singup/components/EmailSent";
import SignupStep2Form from "routes/singup/components/Step2Form";
import ResetPassword from "routes/reset-password/ResetPassword"
import NotFound from "routes/not-found/NotFound";
import RequiresAuthentication from "components/RequiresAuthentication";
import DashboardContainer from "components/DashboardContainer";
import { generateEmptyRoutes } from "data/sideNavigationMenuArray";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <NotFound/>
    },
    {
        path: "/signup",
        element: <Signup/>,
        children: [
            {
                index: true,
                element: <SignupStep1Form/>,
            },
            {
                path: "email-sent",
                element: <SignupEmailSent/>,
            },
            {
                path: "step2",
                element: <SignupStep2Form/>,
            },
        ]
    },
    {
        path: "/reset-password",
        element: <ResetPassword/>,
        children: [
            {
                index: true,
                element: <ResetPasswordStep1Form/>,
            },
            {
                path: "email-sent",
                element: <ResetPasswordEmailSent/>,
            },
            {
                path: "step2",
                element: <ResetPasswordStep2Form/>,
            },
        ]
    },
    {
        path: "/dashboard",
        element: (
            <RequiresAuthentication>
                <DashboardContainer/>
            </RequiresAuthentication>
        ),
        children: [
            ...generateEmptyRoutes()
        ]
    }
])

export default router;