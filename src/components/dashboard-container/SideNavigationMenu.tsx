import styled from "@emotion/styled";
import { DivProps } from "types/types";
import burger from "assets/icon/burger.svg";
import ld from "assets/icon/ld.svg";
import Logo from "../Logo";
import { sideNavigationMenuArray } from "./sideNavigationMenuArray";
import { NavLink } from "react-router-dom";
import logoutIcon from "assets/icon/logout.svg"
import { useAuthenticationContext } from "hooks/useAuthenticationContext";
import { colors } from "themes/variables";

type SideNavigationMenuProps = DivProps & {
  toggleOpen: VoidFunction;
};

function SideNavigationMenu({ toggleOpen, ...props }: SideNavigationMenuProps) {
    const { logout } = useAuthenticationContext()

    const onLogout = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Do you really want to logout?") === true)
            logout()
    }

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
          <NavLink
            to={elm.text === "Processes" ? "/dashboard/process" : elm.text.toLowerCase()}
            key={elm.id}
            className={props => `item ${props.isActive && "active"}`}
            
          >
            {/* <img src={elm.iconSrc} alt={elm.text} /> */}
            <elm.Icon/>
            <div className="text"> {elm.text} </div>
          </NavLink>
        ))}
        <div className="item" title="logout"  onClick={onLogout} >
            <img src={logoutIcon} alt="logout" />
            <div className="text"> Logout </div>
          </div>
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
      paddingRight: props.open ? "30px" : "0",
    },
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
      padding: props.open ? "0 10px"  : "0",
      "& svg path": {
        fill: "#EAEAEC",
      },
      "&:hover": {
        background: "#FFFFFF0D",
        "& svg path": {
          fill: colors.pink,
        }
      },
      "&.active": {
        background: "#FFFFFF0D",
        "& svg path": {
          fill: colors.pink,
        }
      },
      "& .text": {
        color: "white",
        display: props.open ? "inline" : "none",
        textDecoration: "none"
      },
    },
  },
  "& .logo": {
    width: "30px",
    height: "26px",
  },
}));

export default StyledSideNavigationMenu;
