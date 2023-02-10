import  { ButtonProps }from "@mui/material/Button";
import ContainedButton from "./ContainedButton";
import { colors } from "themes/variables";


function DarkBlueButton(props: ButtonProps) {
    return <ContainedButton {...props} bgColor={colors.darkBlue} />
}

export default DarkBlueButton;