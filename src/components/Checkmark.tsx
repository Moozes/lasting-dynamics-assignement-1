import chekmark from "assets/icon/check-mark.svg";
import Avatar, { AvatarProps } from "@mui/material/Avatar"

const styles = {height: "135px", width: "135px"}

export default function Logo(props: AvatarProps) {
    return <Avatar {...props} sx={styles} alt="logo" src={chekmark}  />
}