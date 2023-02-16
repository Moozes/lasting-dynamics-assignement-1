import styled from "@emotion/styled"
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { ReactComponent as CloseIcon } from "assets/icon/x.svg"
import IconButton from "@mui/material/IconButton";
import { colors } from "themes/variables"
import Grid from "@mui/material/Grid";

type SettingsProps = {
    className?: string;
    open: boolean;
    onClose: VoidFunction;
}

function component({ open, onClose, ...rest }: SettingsProps) {
    return (
        <Dialog open={open} onClose={onClose} {...rest} fullScreen PaperProps={{elevation: 0}}>
            <div className="header">
                <Typography className="title" >Impostazioni</Typography>
                <IconButton className="close-icon-button">
                    <CloseIcon  />
                </IconButton>
            </div>
            <Grid container gap="32px" className="grid-container" >
                <Grid item className="left" >list</Grid>
                <Grid item flexGrow="1" className="right" >right</Grid>
            </Grid>
        </Dialog>
    )
}

const Settings = styled(component)({
    padding: "16px 16px 16px 96px",
    "& .MuiPaper-root": {
        margin: 0,
        borderRadius: 15,
    },
    "& .header": {
        padding: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& .title": {
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "36px",
            color: colors.title
        },
        "& .close-icon-button:hover svg path": {
            fill: colors.red,
        }
    },
    "& .grid-container": {
        padding: "0 32px 0 24px",
        "& .left": {
            borderRight: "2px solid #EAEAEC",
            height: "760px",
            paddingRight: 40,
        },
        "& .right": {},
    }
})
export default Settings;