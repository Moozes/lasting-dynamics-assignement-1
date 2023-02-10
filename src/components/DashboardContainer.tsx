import styled from "@emotion/styled";
import PermanentDrawer from "./PemanentDrawer";
import { colors } from "themes/variables";
import { useState } from "react";

const fullDrawerWidth = "200px";
const shrinkedDrawerWidth = "80px";

const styledOptions = {
    shouldForwardProp: (prop: string) => prop !== "open"
}

type OpenProp = {
    open: boolean;
}

const Main = styled("main", styledOptions)<OpenProp>(props => ({
    marginLeft: props.open ? fullDrawerWidth : shrinkedDrawerWidth,
    transition: "margin .5s"
}))

const StyledPermanentDrawer = styled(PermanentDrawer, styledOptions)<OpenProp>(props => ({
    "& .MuiPaper-root": {
        width: props.open ? fullDrawerWidth : shrinkedDrawerWidth,
        transition: "width .5s",
        background: colors.darkBlue
    }
}))



export default function DashboardContainer() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledPermanentDrawer open={open}>
                
            </StyledPermanentDrawer>
            <Main open={open}>

            </Main>
        </>
    )
}