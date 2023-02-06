import { createBrowserRouter } from "react-router-dom";
import Login from "routes/login/Login";
import Signup from "routes/singup/Signup"
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
                element: "step1",
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
    }
])

export default router;