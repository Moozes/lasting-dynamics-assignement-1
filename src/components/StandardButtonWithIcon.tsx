import StandardButton from "./StandardButton";
import { ButtonProps } from "@mui/material";
import styled from "@emotion/styled";

type StandardButtonWithIconProps = ButtonProps & {
    iconSrc: string
}
function StandardButtonWithIcon({iconSrc, ...props}: StandardButtonWithIconProps) {
    return <StandardButton {...props} startIcon={<img src={iconSrc} alt="icon" />} />
}

const StyledStandardButtonWithIcon = styled(StandardButtonWithIcon)({

})

export default StyledStandardButtonWithIcon;