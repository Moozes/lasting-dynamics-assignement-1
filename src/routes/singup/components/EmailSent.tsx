import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Logo from "components/Logo";
import { DivProps } from "types/types";
import { colors } from "themes/variables";
import Checkmark from "components/Checkmark"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function EmailSent(props: DivProps) {
    const navigate = useNavigate()

    useEffect(() => {
      const timeout = setTimeout(() => navigate("../step2"), 4000)
      return () => clearTimeout(timeout)
    }, [])

    return (
        <div {...props} >
            <Logo className="logo" />
            <Typography className="title">Your workspace is ready</Typography>
            <Typography className="secondary">
              Check your email inbox.
              <br />
              We sent you a confirmation email.
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