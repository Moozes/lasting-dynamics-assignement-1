import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";
import { colors } from "themes/variables";


const StyledOutlinedDarkBlueButton = styled(OutlinedDarkBlueButton)(props => ({
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "18px",
    padding: "11px 12px",
    border: "1px solid"+colors.darkBlue,
    borderRadius: "8px",
    textTransform: "none",
    boxShadow: "none",
    color: colors.darkBlue,
    background: "transparent",
    "&:hover": {
        background: "transparent",
        boxShadow: "none",
        border: "1px solid"+colors.darkBlue,
    }
}));

function OutlinedDarkBlueButton(props: ButtonProps) {
  return <Button {...props} variant="outlined" />

}

export default StyledOutlinedDarkBlueButton;
