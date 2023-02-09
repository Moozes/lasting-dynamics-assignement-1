import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

type LoadingSpinnerProps = {
    className?: string;
    open: boolean;
}

function LoadingSpinner(props: LoadingSpinnerProps) {
    if(!props.open) return null
    return <CircularProgress {...props} size="15px" />
}

type StyledLoadingSpinnerProps = {
    color: string;
}
const StyledLoadingSpinner = styled(LoadingSpinner, {
    shouldForwardProp: prop => prop !== "color"
})<StyledLoadingSpinnerProps>(props => ({
    "& svg circle": {
        stroke: props.color
    }
}))

export default StyledLoadingSpinner;