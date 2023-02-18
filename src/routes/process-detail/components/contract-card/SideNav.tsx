import styled from "@emotion/styled"
import { DivProps } from "types/types";
import ListItem from "./ListItem";
import { ReactComponent as ListIcon } from "assets/icon/list.svg"
import { ReactComponent as ShoppingBagIcon } from "assets/icon/shopping-bag.svg"
import { ReactComponent as LineSpcingIcon } from "assets/icon/lineSpacing.svg"
import { ReactComponent as CommentIcon } from "assets/icon/comment.svg"
import { ReactComponent as AttachIcon } from "assets/icon/attach.svg"
import { ReactComponent as LinkIcon } from "assets/icon/link.svg"
import { useState } from "react";

function Component(props: DivProps) {
    const [active, setActive] = useState(2)
    return (
        <div {...props} >
            <ListItem disabled>
            </ListItem>
            <ListItem active={active === 1} onClick={() => setActive(1)} >
                <ShoppingBagIcon/>
            </ListItem>
            <ListItem active={active === 2} onClick={() => setActive(2)} >
                <LineSpcingIcon/>
            </ListItem>
            <ListItem active={active === 3} onClick={() => setActive(3)} >
                <CommentIcon/>
            </ListItem>
            <ListItem active={active === 4} onClick={() => setActive(4)} >
                <AttachIcon/>
            </ListItem>
            <ListItem active={active === 5} onClick={() => setActive(5)} >
                <LinkIcon/>
            </ListItem>
            <ListItem active={active === 6} onClick={() => setActive(6)} >
                <ListIcon/>
            </ListItem>
        </div>
    )
}

const SideNav = styled(Component)({
    display: "flex",
    flexDirection: "column",
})
export default SideNav;