import styled from "@emotion/styled"
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { ReactComponent as CloseIcon } from "assets/icon/x.svg"
import IconButton from "@mui/material/IconButton";
import { colors } from "themes/variables"
import Grid from "@mui/material/Grid";
import SideMenu from "./SideMenu";
import DialogContent from "@mui/material/DialogContent";

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
            <DialogContent>
                <Grid container gap="32px" className="grid-container" >
                    <Grid item className="left" >
                        <SideMenu/>
                    </Grid>
                    <Grid item flexGrow="1" className="right" >right</Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

const Settings = styled(component)({
    padding: "16px 16px 16px 96px",
    "& .MuiPaper-root": {
        margin: 0,
        borderRadius: 15,
        paddingBottom: "24px"
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
    "& .MuiDialogContent-root": {
        padding: "0 32px 0 24px",
    },
    "& .grid-container": {
        height: "100%",
        "& .left": {
            borderRight: "2px solid #EAEAEC",
            paddingRight: 40,
        },
        "& .right": {},
    }
})
export default Settings;