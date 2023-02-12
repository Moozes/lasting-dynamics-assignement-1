import styled from "@emotion/styled"
import { DivProps } from "types/types";

import downArrow from "assets/icon/down-arrow.svg";
import start from "assets/icon/start.svg";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import horizontalMenu from "assets/icon/horizontal-menu.svg";
import { Typography } from "@mui/material";
import { colors } from "themes/variables";


function ControlsBar2(props: DivProps) {
    return (
        <div {...props} >
            <img src={downArrow} alt="icon" />
            <img src={start} alt="icon" />
            <Typography className="text" >New Contract</Typography>
            <Typography className="button" >8 Schede</Typography>
            <Typography className="one" >1</Typography>
            <Typography className="two" >2</Typography>
            <ControlPointIcon className="plus-circle" />
            <img src={horizontalMenu} alt="icon" />
        </div>
    )
}

const StyledControlsBar2 = styled(ControlsBar2)({
    padding: "17.25px 13.63px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#F6F8FA",
    "& .text": {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "18px",
        color: colors.subtitle2,
    },
    "& .button": {
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "16px",
        color: colors.darkBlue,
        padding: "2.75px 4px",
        cursor: "pointer",
        background: "#D6D5D9",
        borderRadius: "4px",
    },
    "& .one": {
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "16px",
        color: "#FF4339",
        padding: "2.75px 7px",
        cursor: "pointer",
        background: "#FFE8DA",
        borderRadius: "4px",
    },
    "& .two": {
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "16px",
        color: "#EF980B",
        padding: "2.75px 7px",
        cursor: "pointer",
        background: "#FEF4DE",
        borderRadius: "4px",
    },
    "& .plus-circle": {
        fill: "#F93E6C"
    }
})
export default StyledControlsBar2;