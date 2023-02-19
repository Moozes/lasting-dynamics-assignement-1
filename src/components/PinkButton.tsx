import  { ButtonProps }from "@mui/material/Button";
import ContainedButton from "./ContainedButton";
import { colors } from "themes/variables";


function PinkButton(props: ButtonProps) {
    return <ContainedButton {...props} bgColor={colors.pink} />
}

export default PinkButton;