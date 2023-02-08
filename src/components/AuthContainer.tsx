import Grid from "@mui/material/Grid"


type AuthContainerProps = {
    leftPanelWidth: string;
    backgroundImageSource: string;
    children: JSX.Element
}
export default function AuthContainer(props: AuthContainerProps) {
    return (
        <Grid container >
            <Grid item width={props.leftPanelWidth} height="100vh" overflow="auto">
               {props.children}
            </Grid>
            <Grid item 
            flexGrow="1" 
            width="0px" 
            sx={{
                background: `url(${props.backgroundImageSource}) center center no-repeat`,
                backgroundSize: "cover",
                backgroundColor: "white",
            }}
            /> 
        </Grid>
    )
}