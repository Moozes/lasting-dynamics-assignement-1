import AuthContainer from "components/AuthContainer"
import resetPasswordBackground from "assets/background/reset-password.svg"
import { Outlet } from "react-router-dom"

export default function ResetPassword() {
    return (
        <AuthContainer leftPanelWidth="520px" backgroundImageSource={resetPasswordBackground}  >
            <Outlet/>
        </AuthContainer>
    )
}