import logo from "assets/icon/logo.svg";
import Avatar, { AvatarProps } from "@mui/material/Avatar"

const styles = {height: "50px", width: "50px"}

export default function Logo(props: AvatarProps) {
    return <Avatar {...props} sx={styles} alt="logo" src={logo}  />
}