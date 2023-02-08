import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

type StyledContainedButtonProps = {
    bgColor: string;
}
const StyledContainedButton = styled(ContainedButton, {
    shouldForwardProp: prop => prop !== "bgColor"
})<StyledContainedButtonProps>(props => ({
    background: props.bgColor,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "18px",
    padding: "11px 12px",
    borderRadius: "8px",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
        boxShadow: "none",
        background: props.bgColor,
    }
}));

function ContainedButton(props: ButtonProps) {
  return <Button {...props} variant="contained" />

}

export default StyledContainedButton;
