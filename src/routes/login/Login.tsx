import AuthContainer from "components/AuthContainer"
import loginBackground from "assets/background/login.svg"

export default function Login() {
    return (
        <AuthContainer leftPanelWidth="520px" backgroundImageSource={loginBackground}  >
            <input type="text" />
        </AuthContainer>
    )
}