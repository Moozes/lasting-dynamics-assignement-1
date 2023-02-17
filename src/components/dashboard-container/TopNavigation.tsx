import styled from "@emotion/styled"
import { DivProps } from "types/types";
import avatar from "assets/icon/avatar.svg"
import bell from "assets/icon/bell.svg"
import a from "assets/icon/a.svg"
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { colors } from "themes/variables";
import { useParams } from "react-router-dom";

function TopNavigation(props: DivProps) {
    const {processId} = useParams()
    return (
        <div {...props} >
            <Breadcrumbs className="breadcrumbs" separator=">" >
                <Typography className={`text ${!processId && "last"}`}>Process</Typography>
                {processId && (
                    <Typography className="text last">{processId}</Typography>
                )}
            </Breadcrumbs>
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
        "& .text:not(.last)": {
            colors: colors.subtitle4,
        },
        "& .text.last": {
            color: colors.subtitle2
        },
        "& .text": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "36px",
        },
        "& .MuiBreadcrumbs-separator": {
            color: colors.subtitle4
        }
    },
    "& img": {
        cursor: "pointer",
    },
    "& img:nth-of-type(1)": {
        marginRight: "28px"
    },
    "& img:nth-of-type(2)": {
        marginRight: "24px"
    },
})

export default StyledTopNavigation;