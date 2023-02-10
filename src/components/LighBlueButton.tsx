import  { ButtonProps }from "@mui/material/Button";
import ContainedButton from "./ContainedButton";
import { colors } from "themes/variables";


function LightBlueButton(props: ButtonProps) {
    return <ContainedButton {...props} bgColor={colors.lightBlue} />
}

export default LightBlueButton;