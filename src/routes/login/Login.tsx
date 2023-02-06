import AuthContainer from "components/AuthContainer"
import loginBackground from "assets/background/login.svg"
import LoginForm from "./components/LoginForm"

export default function Login() {
    return (
        <AuthContainer leftPanelWidth="520px" backgroundImageSource={loginBackground}  >
            <LoginForm/>
        </AuthContainer>
    )
}