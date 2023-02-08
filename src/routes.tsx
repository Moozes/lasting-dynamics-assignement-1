import { createBrowserRouter } from "react-router-dom";
import Login from "routes/login/Login";
import Signup from "routes/singup/Signup"
import SignupStep1Form from "routes/singup/components/Step1Form";
import SignupEmailSent from "routes/singup/components/EmailSent";
import SignupStep2Form from "routes/singup/components/Step2Form";
import ResetPassword from "routes/reset-password/ResetPassword"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
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
                element: "reset password",
            },
            {
                path: "email-sent",
                element: "Email Sent",
            },
            {
                path: "set-new-password",
                element: "set new password",
            },
        ]
    },
    {
        path: "/dashboard",
        element: <h1>Dashboard</h1>
    }
])

export default router;