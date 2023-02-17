import styled from "@emotion/styled"
import { DivProps } from "types/types";

function Component(props: DivProps) {
    return (
        <div {...props} >
            <div className="empty"></div>
            <div className="item logo">item</div>
            <div className="empty"></div>
            <div className="item">item</div>
            <div className="item">item</div>
            <div className="empty"></div>
            <div className="empty"></div>
        </div>
    )
}

const Test = styled(Component)({
    display: "flex",
    height: "calc(100vh - 66px)",
    flexDirection: "column",
    "& .item": {
        border: "1px solid red"
    },
    "& .empty": {
        flexGrow: 1,
    }
})
export default Test;