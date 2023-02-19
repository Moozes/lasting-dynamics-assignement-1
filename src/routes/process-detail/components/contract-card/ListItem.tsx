import styled from "@emotion/styled"
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { colors } from "themes/variables";

type Props = IconButtonProps & {
    active?: boolean
}
function Component( {active = false, ...props}: Props ) {
    return (
        <IconButton {...props} />
    )
}

const ListItem = styled(Component)(props => ({
    padding: "0",
    borderRadius: 0,
    borderLeft: props.active ? "2px solid "+colors.pink : "1px solid #C1C0C7",
    width: 51,
    height: 40,
    "&:hover": {
        borderLeft: "2px solid "+colors.pink,
        "& svg path": {
            fill: colors.pink
        }
    },
    "& svg": {
        height: 16,
        width: 16,
        "& path": {
            fill: props.active ? colors.pink : "#83828E",
        }
    }
}))
export default ListItem;