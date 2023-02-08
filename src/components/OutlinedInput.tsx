import styled from "@emotion/styled"
import TextFiled, {TextFieldProps} from "@mui/material/TextField"



const StyledOutlinedInput = styled(OutlinedInput)({
    "& .MuiInputBase-root": {
        borderRadius: "8px",
    },
    "& input": {
        padding: "13px 16px 11px",
    }
})

function OutlinedInput(props: TextFieldProps) {
    return (
        <TextFiled
            {...props}
            variant="outlined"
        />
    )
}

export default StyledOutlinedInput;