import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";
import { colors } from "themes/variables";

function StandardButton(props: ButtonProps) {
    return <Button {...props} variant="text" />
}

const StyledStandardButton = styled(StandardButton)({
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "18px",
    color: colors.buttonText,
    textTransform: "none",
    padding: "5.67px 9.67px",
})

export default StyledStandardButton;