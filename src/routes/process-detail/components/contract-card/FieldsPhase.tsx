import styled from "@emotion/styled"
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { colors } from "themes/variables";
import { DivProps } from "types/types";
import { font } from "utils/utils";
import { ReactComponent as RightArrowsIcon } from "assets/icon/right-arrows.svg";
import { ReactComponent as UpArrowIcon } from "assets/icon/up-arrow.svg";
import { ReactComponent as DownArrowIcon } from "assets/icon/down-arrow.svg";
import { ReactComponent as StartIcon } from "assets/icon/start.svg";
import Chip from "components/Chip";
import { useState } from "react";
import OutlinedInput from "components/OutlinedInput";


function Component(props: DivProps) {
    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const toggle1 = () => {
        setCollapse1(prev => !prev)
    }
    const toggle2 = () => {
        setCollapse2(prev => !prev)
    }

    return (
        <div {...props} >
            <Typography className="title" >Fields’ Phase</Typography>
            <div className="phase-container" onClick={toggle1} >
                <RightArrowsIcon className="pink" />
                <Typography className="phase-text" >Phase 2</Typography>
                <div className="empty"></div>
                <Chip color={colors.pink} text="Ready" className="chip"/>
                {collapse1 ? <UpArrowIcon className="arrow" /> : <DownArrowIcon className="arrow" />}
            </div>
            <Collapse in={collapse1} className="collapse" >

                <OutlinedInput className="input" label="Contract number" fullWidth />
                <OutlinedInput className="input" label="Contract number 2" fullWidth />

            </Collapse>
            <div className="phase-container" onClick={toggle2}>
                <RightArrowsIcon className="pink"/>
                <Typography className="phase-text" >New Contract</Typography>
                <div className="empty"></div>
                {collapse2 ? <UpArrowIcon className="arrow" /> : <DownArrowIcon className="arrow" />}
            </div>
            <Collapse in={collapse2} className="collapse">
                <OutlinedInput className="input" label="Start date" type="date" focused fullWidth />
            </Collapse>
            <div className="phase-container">
                <StartIcon className="pink"/>
                <Typography className="phase-text" >Start</Typography>
                <div className="empty"></div>
                <DownArrowIcon className="arrow" />
            </div>
        </div>
    )
}

const FieldsPhase = styled(Component)({
    "& .title": {
        ...font(700, 18, 27, colors.title),
        marginBottom: 24
    },
    "& .phase-container": {
        background: "#F6F8FA",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: 16,
        "& .empty": {
            flexGrow: 1
        },
        "& svg.arrow": {
            height: 10,
            width: 10
        },
        "& svg.pink path": {
            fill: colors.pink
        },
        "& .chip": {
            borderRadius: "100px",
        },
    },
    "& .phase-text": {
        ...font(700, 18, 27, colors.title)
    },
    "& .input": {
        marginBottom: 24,
    },
    "& .collapse": {
        paddingLeft: 16
    }
})
export default FieldsPhase;