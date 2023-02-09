import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DarkBlueButton from "components/DarkBlueButton";
import { DivProps } from "types/types";
import img404 from "assets/icon/404.svg";
import { colors } from "themes/variables";
import { Link } from "react-router-dom";

function NotFound(props: DivProps) {
  return (
    <div {...props}>
      <div className="container">
        <img src={img404} alt="404" />
        <Typography className="title">Page not found</Typography>
        <Typography className="secondary">
          The page you are trying to reach is not available. It may have been
          deleted or its URL was misspelled.
        </Typography>
        <Link to="/">
          <DarkBlueButton>Go back</DarkBlueButton>
        </Link>
      </div>
    </div>
  );
}

const StyledNotFound = styled(NotFound)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  "& .container": {
    width: "607px",
    "& .title": {
      marginBottom: "16px",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
      color: colors.subtitle2,
    },
    "& .secondary": {
      marginBottom: "16px",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      color: colors.subtitle3,
    },
  },
});

export default StyledNotFound;
