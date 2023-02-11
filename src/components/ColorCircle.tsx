import styled from "@emotion/styled";
import { DivProps } from "types/types";

function ColorCircle(props: DivProps) {
    return <div {...props} />
}

const StyledColorCircle = styled(ColorCircle)<{color?: string}>(props => ({
    height: 24,
    width: 24,
    borderRadius: "50%",
    background: props.color ? props.color : "black"
}))

export default StyledColorCircle;