import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Logo from "components/Logo";
import { DivProps } from "types/types";
import { colors } from "themes/variables";
import Checkmark from "components/Checkmark"

type EmailSentProps = DivProps & {
    title: string;
    secondary1: string;
    secondary2: string;
}

function EmailSent(props: EmailSentProps) {
    return (
        <div {...props} >
            <Logo className="logo" />
            <Typography className="title"> {props.title} </Typography>
            <Typography className="secondary">
              {props.secondary1}
              <br />
              {props.secondary2}
            </Typography>
            <Checkmark/>
        </div>
    )
}

const StyledEmailSent = styled(EmailSent)({
    padding: "107px 100px 40px 100px",
    "& .logo": {
      marginBottom: "107.44px",
    },
    "& .title": {
      marginBottom: "8px",
      fontSize: "24px",
      fontWeight: 700,
    },
    "& .secondary": {
      marginBottom: "56.4px",
      fontSize: "14px",
      fontWeight: 400,
      color: colors.subtitle1,
    },
})

export default StyledEmailSent;