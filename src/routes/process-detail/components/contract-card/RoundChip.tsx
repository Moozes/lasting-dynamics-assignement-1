import styled from "@emotion/styled"
import { font } from "utils/utils";


type Props = {
    bgColor?: string;
    color?: string;
}
const RoundChip = styled.span<Props>(({bgColor = "transparent", color = "black"}) => ({
    ...font(500, 10, 12.1, color),
    background: bgColor,
    borderRadius: "50%",
    padding: "6px 5.5px"
}))

export default RoundChip;