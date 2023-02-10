import styled from "@emotion/styled";
import PermanentDrawer from "./PemanentDrawer";
import { colors } from "themes/variables";
import { useState } from "react";
import SideNavigationMenu from "./SideNavigationMenu";
import { Outlet } from "react-router-dom";

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
        background: colors.darkBlue,
        overflowX: "hidden"
    }
}))



export default function DashboardContainer() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledPermanentDrawer open={open}>
                <SideNavigationMenu open={open}  toggleOpen={() => setOpen(prev => !prev)} />
            </StyledPermanentDrawer>
            <Main open={open}>
                <Outlet/>
            </Main>
        </>
    )
}