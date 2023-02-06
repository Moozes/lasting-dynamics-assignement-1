import styled from "@emotion/styled";
import Button, { ButtonProps }from "@mui/material/Button";
import { Theme } from "@mui/material";


const StyledDarkBlueButton = styled(DarkBlueButton)({
    background: "#04385A",
    "&:hover": {
        background: "#04385A",
    } 
})

function DarkBlueButton(props: ButtonProps) {
    return <Button {...props} variant="contained" />
}

export default StyledDarkBlueButton;