import styled from "@emotion/styled"
import { Typography } from "@mui/material";
import { ReactElement } from "react";


type Props = {
    text: string;
    icon: ReactElement;
    className?: "string";
}
function Component({text, icon, ...props}: Props) {
    return (
        <div {...props} >
            <Typography className="text" >{text}</Typography>
            {icon}
        </div>
    )
}

const Chip = styled(Component, {
    shouldForwardProp: prop => prop !== "color"
})<{color: string}>(props => ({
    background: props.color,
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: 8,
    cursor: "pointer",
    gap: 8.5,
    "& .text": {
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "18px",
        color: "white",
    },
    "& svg path": {
        fill: "white",
    }
}))
export default Chip;