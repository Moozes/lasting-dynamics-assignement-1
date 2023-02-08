import { createBrowserRouter } from "react-router-dom";
import Login from "routes/login/Login";
import Signup from "routes/singup/Signup"
import Step1Form from "routes/singup/components/Step1Form";
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
                element: <Step1Form/>,
            },
            {
                path: "email-sent",
                element: "Email sent",
            },
            {
                path: "step2",
                element: "step2",
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