import styled from "@emotion/styled";
import { DivProps } from "types/types";
import burger from "assets/icon/burger.svg";
import ld from "assets/icon/ld.svg";
import Logo from "./Logo";
import { sideNavigationMenuArray } from "data/sideNavigationMenuArray";

type SideNavigationMenuProps = DivProps & {
  toggleOpen: VoidFunction;
};

function SideNavigationMenu({ toggleOpen, ...props }: SideNavigationMenuProps) {
  return (
    <div {...props}>
      <div className="toggle" onClick={toggleOpen}>
        <div className="icon">
          <img src={burger} alt="burger icon" />
        </div>
      </div>

      <div className="list">
        <div className="ld">
          <img src={ld} alt="lasting dynamics avatar" />
          <span className="text">Lasting Dynamics</span>
        </div>
        {sideNavigationMenuArray.map((elm) => (
          <div key={elm.id} className="item">
            <img src={elm.iconSrc} alt={elm.text} />
            <div className="text"> {elm.text} </div>
          </div>
        ))}
      </div>
      <Logo className="logo" />
    </div>
  );
}

const StyledSideNavigationMenu = styled(SideNavigationMenu, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>((props) => ({
  whiteSpace: "nowrap",
  padding: "30px 0 19px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "14px",
  minHeight: "100vh",
  "& .toggle": {
    marginBottom: "30px",
    cursor: "pointer",
    alignSelf: props.open ? "flex-end" : "center",
    "& .icon": {
        paddingRight: props.open ? "30px": "0"
    }
  },

  "& .list": {
    ...(!props.open && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }),
    flexGrow: "1",
    "& .ld": {
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      "& .text": {
        color: "white",
        display: props.open ? "inline" : "none",
      },
    },
    "& .item": {
      display: "flex",
      alignItems: "center",
      justifyContent: props.open ? "flex-start" : "center",
      cursor: "pointer",
      gap: "12px",
      height: "48px",
      minWidth: "48px",
      borderRadius: "8px",
      "&:hover": {
        background: "#FFFFFF0D",
      },
      "& .text": {
        color: "white",
        display: props.open ? "inline" : "none",
      },
    },
  },
  "& .logo": {
    width: "30px",
    height: "26px"
  }
}));

export default StyledSideNavigationMenu;
