import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "components/OutlinedInput";
import { colors } from "themes/variables";
import LightBlueButton from "components/LighBlueButton";
import OutlinedDarkBlueButton from "components/OutlinedDarkBlueButton";
import rightArrow from "assets/icon/right-arrow.svg";
import leftArrow from "assets/icon/left-arrow.svg";
import useAddContractForm from "../hooks/useAddContractForm";
import { formikError } from "utils/utils";

type AddContractFormProps = {
  className?: string;
  addFormOpen: boolean;
  closeAddForm: VoidFunction;
};
function AddContractForm({
  addFormOpen,
  closeAddForm,
  ...props
}: AddContractFormProps) {
  const formik = useAddContractForm(closeAddForm);
  const onClose = () => {
    closeAddForm();
    formik.resetForm();
  }
  return (
    <form {...props} onSubmit={formik.handleSubmit}>
      <Typography>Add Contract</Typography>
      <OutlinedInput
        fullWidth
        label="Contract Number"
        error={formikError("contractNumber", formik)}
        helperText={
          formikError("contractNumber", formik) && formik.errors.contractNumber
        }
        {...formik.getFieldProps("contractNumber")}
      />
      <OutlinedInput
        fullWidth
        label="Customer Number"
        error={formikError("customerNumber", formik)}
        helperText={
          formikError("customerNumber", formik) && formik.errors.customerNumber
        }
        {...formik.getFieldProps("customerNumber")}
      />
      <OutlinedInput
        fullWidth
        label="Email"
        error={formikError("email", formik)}
        helperText={formikError("email", formik) && formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      {/* <OutlinedInput
        fullWidth
        label="Contract Type"
        error={formikError("contractType", formik)}
        helperText={
          formikError("contractType", formik) && formik.errors.contractType
        }
        {...formik.getFieldProps("contractType")}
      /> */}
      <FormControl error={formikError("contractType", formik)} className="select-input" >
        <FormLabel>Contract Type</FormLabel>
        <Select {...formik.getFieldProps("contractType")} >
            <MenuItem value="cdd" >CDD</MenuItem>
            <MenuItem value="cdi" >CDI</MenuItem>
        </Select>
        {formikError("contractType", formik) && (<FormHelperText>{formik.errors.contractType}</FormHelperText>)}
      </FormControl>
      <OutlinedInput
        fullWidth
        label="Phone Number"
        error={formikError("phoneNumber", formik)}
        helperText={
          formikError("phoneNumber", formik) && formik.errors.phoneNumber
        }
        {...formik.getFieldProps("phoneNumber")}
      />
      <div className="empty"></div>
      <div className="actions">
        <img src={leftArrow} alt="icon" />
        <img src={rightArrow} alt="icon" />
        <div className="empty"></div>
        <OutlinedDarkBlueButton type="button" onClick={onClose}>
          Annulla
        </OutlinedDarkBlueButton>
        <LightBlueButton type="submit" disabled={formik.isSubmitting}>
          Salva
        </LightBlueButton>
      </div>
    </form>
  );
}

const formWidth = 381;
const StyledAddContractForm = styled(AddContractForm)((props) => ({
  background: "white",
  height: "100%",
  width: formWidth,
  border: "1px solid "+colors.divder,
  position: "absolute",
  top: 0,
  right: props.addFormOpen ? 0 : -formWidth,
  padding: 24,
  display: "flex",
  flexDirection: "column",
  transition: "right .5s",
  "& .MuiTypography-root": {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "36px",
    color: colors.title,
    textAlign: "center",
    marginBottom: 24,
  },
  "& .MuiFormControl-root": {
    marginBottom: 24,
  },
  "& .select-input": {
    "& .MuiFormLabel-root": {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "18px",
        color: colors.subtitle3,
    },
    "& .MuiSelect-select": {
        padding: "13px 16px 11px",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "18px",
        color: colors.subtitle3,
    }
  },
  "& .empty": {
    flexGrow: 1,
  },
  "& .actions": {
    display: "flex",
    alignItems: "center",
    gap: 16,
    "& .empty": {
      flexGrow: 1,
    },
  },
}));
export default StyledAddContractForm;
