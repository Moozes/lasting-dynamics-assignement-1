import styled from "@emotion/styled";
import TextFiled, { TextFieldProps } from "@mui/material/TextField";
import { colors } from "themes/variables";

const textStyles = {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "18px",
}

const StyledOutlinedInput = styled(OutlinedInput)({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
  },
  "& .MuiFormLabel-root": {
    color: colors.subtitle4,
    ...textStyles,
  },
  "& input": {
    padding: "13px 16px 11px",
    color: colors.subtitle3,
    ...textStyles,
  },
});

function OutlinedInput(props: TextFieldProps) {
  return <TextFiled {...props} variant="outlined" />;
}

export default StyledOutlinedInput;
