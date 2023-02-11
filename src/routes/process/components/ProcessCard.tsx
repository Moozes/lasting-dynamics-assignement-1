import styled from "@emotion/styled";
import { DivProps } from "types/types";
import board from "assets/icon/board.svg";
import cart from "assets/icon/cart.svg";
import menu from "assets/icon/menu.svg";
import closedLock from "assets/icon/closed-lock.svg";
import openedLock from "assets/icon/opened-lock.svg";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

type ProcessCardProps = DivProps & {
  controls?: boolean;
  isPrivate?: boolean;
  text: string;
  icon?: "board" | "cart";
  bgColor: string;
  id: string;
};
function ProcessCard({
  icon = "board",
  controls = false,
  isPrivate = false,
  text,
  bgColor,
  id,
  ...divProps
}: ProcessCardProps) {
  const imgSrc1 = isPrivate ? closedLock : openedLock;
  const imgAlt1 = isPrivate ? "closed lock icon" : "opened lock icon";
  const tooltipTitle = isPrivate
    ? "This is a private process"
    : "This is a public process";

  const imgSrc2 = icon === "board" ? board : cart;
  const imgAlt2 = icon === "board" ? "board icon" : "cart icon";

  return (
    <Link to={"/dashboard/process/" + id} style={{ textDecoration: "none" }}>
      <div {...divProps}>
        {controls && (
          <div className="controls">
            <Tooltip title={tooltipTitle} arrow placement="top">
              <img src={imgSrc1} alt={imgAlt1} />
            </Tooltip>
            <img src={menu} alt="menu icon" />
          </div>
        )}
        <img src={imgSrc2} alt={imgAlt2} className="icon" />
        <Typography className="text"> {text} </Typography>
      </div>
    </Link>
  );
}

const StyledProcessCard = styled(ProcessCard)((props) => ({
  padding: props.controls ? "13.33px 14.67px" : "34.67px",
  cursor: "pointer",
  background: props.bgColor,
  width: 150,
  height: 150,
  borderRadius: 8,
  textAlign: "center",
  "& a": {
    textDecoration: "none",
    display: "bock",
  },
  "& .controls": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    "& img": {
      cursor: "pointer",
    },
  },
  "& .icon": {
    marginBottom: 10.67,
  },
  "& .text": {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
    color: "white",
    textDecoration: "none",
  },
}));

export default StyledProcessCard;
