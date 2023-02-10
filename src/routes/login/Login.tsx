import AuthContainer from "components/AuthContainer"
import loginBackground from "assets/background/login.svg"
import Form from "./components/Form"

export default function Login() {
    return (
        <AuthContainer leftPanelWidth="520px" backgroundImageSource={loginBackground}  >
            <Form/>
        </AuthContainer>
    )
}