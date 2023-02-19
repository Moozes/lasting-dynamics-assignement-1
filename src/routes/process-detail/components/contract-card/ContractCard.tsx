import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as EyeIcon } from "assets/icon/eye.svg";
import { ReactComponent as FileIcon } from "assets/icon/file.svg";
import { ReactComponent as FocusIcon } from "assets/icon/focus.svg";
import { ReactComponent as LinkIcon } from "assets/icon/link.svg";
import { ReactComponent as CopyIcon } from "assets/icon/copy.svg";
import { ReactComponent as TrashIcon } from "assets/icon/trash.svg";
import { ReactComponent as CloseIcon } from "assets/icon/x.svg";
import { font } from "utils/utils";
import { colors } from "themes/variables";
import Grid from "@mui/material/Grid";
import SideNav from "./SideNav";
import ListItem from "./ListItem";
import FieldsPhase from "./FieldsPhase";
import Form from "./Form";
import DialogActions from "@mui/material/DialogActions";
import LightBlueButton from "components/LighBlueButton";
import OutlinedDarkBlueButton from "components/OutlinedDarkBlueButton";

type Props = {
  open: boolean;
  onClose: VoidFunction;
  className?: string;
};

function Component(props: Props) {
  return (
    <Dialog {...props} fullScreen>
      <div className="header">
        <Typography className="title">Courtney@mail.com</Typography>
        <div className="empty"></div>
        <div className="eye-text">
          <EyeIcon />
          <Typography className="text">KO Motivation</Typography>
        </div>
        <div className="icons">
          <FileIcon />
          <FocusIcon />
          <LinkIcon />
          <CopyIcon />
          <TrashIcon />
        </div>
        <ListItem  className="close-btn" onClick={props.onClose}>
          <CloseIcon />
        </ListItem>
      </div>
      <DialogContent>
        <Grid container flexWrap="nowrap">
          <Grid item flexGrow="1"  flexBasis="0" className="left">
            <Form/>
          </Grid>
          <Grid item flexGrow="1"  flexBasis="0" className="right">
            <FieldsPhase/>
          </Grid>
          <Grid item className="side-nav">
            <SideNav/>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <div className="face-id">
        Fase ID:{" "}
        <span>61571535e7058c00143322b8</span>
        </div>
        <div className="empty"></div>
        <OutlinedDarkBlueButton onClick={props.onClose} >Annulla</OutlinedDarkBlueButton>
        <LightBlueButton>Salva</LightBlueButton>
      </DialogActions>
    </Dialog>
  );
}

const ContractCard = styled(Component)({
  "& .MuiDialog-container": {
    padding: "16px 16px 16px 96px",
  },
  "& .MuiPaper-root": {
    // padding: "24px 0px 24px 24px",
  },
  "& .MuiDialogContent-root": {
    padding: 0,
    overflow: "hidden",
  },
  "& .MuiDialogActions-root": {
    padding: "20px 24px 24px 24px",
    "& .face-id": {
      ...font(600, 16, 24, colors.title),
      "& span": {
        ...font(400, 14, 18, colors.title),
      },
    },
    "& .empty": {
      flexGrow: 1
    }
  },
  "& .header": {
    padding: "24px 0 18px 24px",
    display: "flex",
    alignItems: "center",
    gap: 26,
    "& .title": {
      ...font(700, 20, 36, colors.title),
    },
    "& .empty": {
      flexGrow: 1,
    },
    "& .eye-text": {
      display: "flex",
      alignItems: "center",
      gap: 9.66,
      "& .text": {
        ...font(600, 16, 24, colors.pink),
        textDecoration: "underline",
      },
    },
    "& .icons": {
      display: "flex",
      alignItems: "center",
      gap: 20,
    },
    "& .close-btn": {
        height: "auto"
    }
  },
  "& .left": {
    height: "calc(100vh - 196px)",
    overflowY: "auto",
  },
  "& .right": {
    padding: "0 16px 0 17px"
  },
  "& .side-nav": {},
});
export default ContractCard;
