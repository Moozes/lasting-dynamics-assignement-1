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
import IconButton from "@mui/material/IconButton";
import { color } from "@mui/system";

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
        <IconButton className="close-btn" onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent></DialogContent>
    </Dialog>
  );
}

const ContractCard = styled(Component)({
  "& .MuiDialog-container": {
    padding: "16px 16px 16px 96px",
  },
  "& .MuiPaper-root": {
    padding: 24,
  },
  "& .header": {
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
        padding: "0 0 0 13.99px",
        borderRadius: 0,
        borderLeft: "1px solid #EAEAEC",
        "&:hover": {
            borderLeft: "1px solid "+colors.pink,
            "& svg path": {
                fill: colors.pink
            }
        }
    }
  },
});
export default ContractCard;
