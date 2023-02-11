import styled from "@emotion/styled"
import { DivProps } from "types/types";
import avatar from "assets/icon/avatar.svg"
import bell from "assets/icon/bell.svg"
import a from "assets/icon/a.svg"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { colors } from "themes/variables";

function TopNavigation(props: DivProps) {
    return (
        <div {...props} >
            <Typography className="breadcrumbs" >Process</Typography>
            <img src={bell} alt="bell icon" />
            <img src={a} alt="icon" />
            <img src={avatar} alt="avatar icon" />
        </div>
    )
}

const StyledTopNavigation = styled(TopNavigation)({
    display: "flex",
    alignItems: "center",
    padding: "12px 24px",
    borderBottom: `2px solid ${colors.divder}`,
    "& .breadcrumbs": {
        flexGrow: 1,
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "36px",
        color: colors.subtitle2
    },
    "& img:nth-of-type(1)": {
        marginRight: "28px"
    },
    "& img:nth-of-type(2)": {
        marginRight: "24px"
    },
})

export default StyledTopNavigation;