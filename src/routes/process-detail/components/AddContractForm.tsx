import styled from "@emotion/styled"
import { DivProps } from "types/types";


type AddContractFormProps = {
    className?: string;
    addFormOpen: boolean;
    closeAddForm: VoidFunction;
}
function AddContractForm(props: AddContractFormProps) {
    return (
        <form {...props} >
            hello
        </form>
    )
}

const formWidth = 381;
const StyledAddContractForm = styled(AddContractForm)(props => ({
    background: "white",
    height: "100%",
    width: formWidth,
    border: "1px solid red",
    position: "absolute",
    top: 0,
    right: props.addFormOpen ? 0 : -formWidth,
    transition: "right .5s"
}))
export default StyledAddContractForm;