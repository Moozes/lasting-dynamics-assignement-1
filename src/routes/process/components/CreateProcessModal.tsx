import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import LightBlueButton from "components/LighBlueButton";
import OutlinedDarkBlueButton from "components/OutlinedDarkBlueButton";
import { colors } from "themes/variables";
import x from "assets/icon/x.svg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "components/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ColorCircle from "components/ColorCircle";
import useCreateProcessForm from "../hooks/useCreateProcessForm";
import { formikError } from "utils/utils";
import LoadingSpinner from "components/LoadingSpinner";

type CreateNewProcessProps = {
  className?: string;
  open: boolean;
  onClose: VoidFunction;
};
function CreateProcessModal({ open, onClose, ...rest }: CreateNewProcessProps) {
    const formik = useCreateProcessForm(onClose)
  return (
    <Dialog open={open} onClose={onClose} {...rest}>
      <div className="header">
        <Typography className="title">Create a new process</Typography>
        <IconButton onClick={onClose}>
          <img src={x} alt="x icon" />
        </IconButton>
      </div>
      <form onSubmit={formik.handleSubmit} >
        <OutlinedInput
          className="process-name-input"
          label="Process name"
          fullWidth
          error={formikError("processName", formik)}
          helperText={formikError("processName", formik) && formik.errors.processName}
          {...formik.getFieldProps("processName")}
        />
        <OutlinedInput
          className="color-input"
          label="Color"
          fullWidth
          error={formikError("color", formik)}
          helperText={formikError("color", formik) && formik.errors.color}
          {...formik.getFieldProps("color")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorCircle color={formik.values.color}/>
              </InputAdornment>
            ),
          }}
        />
        <div className="actions">
          <OutlinedDarkBlueButton onClick={onClose} type="button">
            Annulla
          </OutlinedDarkBlueButton>
          <LightBlueButton type="submit" disabled={formik.isSubmitting} >
            Crea
            <LoadingSpinner
            color={colors.lightBlue}
            className="loading-spinner"
            open={formik.isSubmitting}
          />
            </LightBlueButton>
        </div>
      </form>
    </Dialog>
  );
}

const StyledCreateProcessModal = styled(CreateProcessModal)({
  "& .MuiPaper-root": {
    width: 603,
    borderRadius: "15px",
    padding: 24,
    "& .header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 24,
      "& .title": {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: "36px",
        color: colors.title,
      },
      "& img": {
        cursor: "pointer",
      },
    },
    "& form": {
      "& .process-name-input": {
        marginBottom: 24,
      },
      "& .color-input": {
        marginBottom: 24,
      },
    },
    "& .actions": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 16,
      "& .loading-spinner": {
        marginLeft: "10px",
      }
    },
  },
});

export default StyledCreateProcessModal;
