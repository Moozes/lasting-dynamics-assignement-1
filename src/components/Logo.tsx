import logo from "assets/icon/logo.svg";
import Avatar, { AvatarProps } from "@mui/material/Avatar"


export default function Logo(props: AvatarProps) {
    return <Avatar {...props} alt="logo"  src={logo}  />
}