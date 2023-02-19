import styled from "@emotion/styled";
import MuiRadio, {RadioProps} from "@mui/material/Radio";

import { ReactComponent as Checked } from "assets/icon/checked-radio.svg"; 
import { ReactComponent as Unchecked } from "assets/icon/unchecked-radio.svg"; 

function Component(props: RadioProps) {
    return (
        <MuiRadio
            {...props}
            icon={<Unchecked/>}
            checkedIcon={<Checked/>}
        />
    )
}

const Radio = styled(Component)({
    // padding: 0,
})

export default Radio;