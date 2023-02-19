import styled from "@emotion/styled";
import { DivProps } from "types/types";
import plus from "assets/icon/plus.svg"
import Typography from "@mui/material/Typography";
import { colors } from "themes/variables";

function CreateNewProcess(props: DivProps) {
    return (
        <div {...props} >
            <img src={plus} alt="plus icon" />
            <Typography className="text" >Create a new process</Typography>
        </div>
    )
}

const StyledCreateNewProcess = styled(CreateNewProcess)({
    height: 150,
    width: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 13.33,
    border: `2px dashed ${colors.divder}`,
    borderRadius: 8,
    cursor: "pointer",
    "& .text": {
        textAlign: "center",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        color: colors.subtitle1
    }
})

export default StyledCreateNewProcess;