import AuthContainer from "components/AuthContainer"
import signupBackground from "assets/background/signup.svg"
import { Outlet } from "react-router-dom"

export default function Singup() {
    return (
        <AuthContainer leftPanelWidth="622px" backgroundImageSource={signupBackground}  >
            <Outlet/>
        </AuthContainer>
    )
}