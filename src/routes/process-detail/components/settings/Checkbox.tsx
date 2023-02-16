import styled from "@emotion/styled";
import MuiCheckbox, {CheckboxProps} from "@mui/material/Checkbox";

import { ReactComponent as Checked } from "assets/icon/checked.svg"; 
import { ReactComponent as Unchecked } from "assets/icon/unchecked.svg"; 

function Component(props: CheckboxProps) {
    return (
        <MuiCheckbox
            {...props}
            icon={<Unchecked/>}
            checkedIcon={<Checked/>}
        />
    )
}

const Checkbox = styled(Component)({
    padding: 0,
})

export default Checkbox;