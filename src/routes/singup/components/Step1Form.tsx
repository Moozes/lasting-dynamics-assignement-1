import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { formikError } from "utils/utils";
import OutlinedInput from "components/OutlinedInput";
import LightBlueButton from "components/LighBlueButton";
import { colors } from "themes/variables";

const FirstCheckboxLabel = (
  <>
    Agree with
    <span className="link"> Terms and Conditions, Privacy Policy </span>
    and
    <span className="link"> Cookie Policy </span>
  </>
);

function Step1Form(props: DivProps) {
  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Create your workspace</Typography>
      <Typography className="secondary">
        Coraly is the tool to manage your work processes form the same place
      </Typography>

      <form>
        <OutlinedInput
          className="workspace-input"
          variant="outlined"
          label="Workspace Name"
          size="small"
          fullWidth
          //   error={formikError("email", formik)}
          //   helperText={formikError("email", formik) && formik.errors.email}
          //   {...formik.getFieldProps("email")}
        />
        <OutlinedInput
          className="email-input"
          variant="outlined"
          label="Email"
          size="small"
          fullWidth
          //   error={formikError("email", formik)}
          //   helperText={formikError("email", formik) && formik.errors.email}
          //   {...formik.getFieldProps("email")}
        />

        <FormControlLabel
          className="first-checkbox"
          control={
            <Checkbox
            // {...formik.getFieldProps("remember")}
            />
          }
          label={FirstCheckboxLabel}
        />
        <FormControlLabel
          className="second-checkbox"
          control={
            <Checkbox
            // {...formik.getFieldProps("remember")}
            />
          }
          label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
        />
        <LightBlueButton
          type="submit"
          className="create-account-button"
          fullWidth
          //   disabled={formik.isSubmitting}
        >
          Create now the account
        </LightBlueButton>
      </form>
      <Typography className="signin">
        Do you have an account?{" "}
        <Link to="/" className="link">
          Sign in
        </Link>
      </Typography>
    </div>
  );
}

const StyledStep1Form = styled(Step1Form)({
  padding: "107px 100px 40px 100px",
  "& .logo": {
    marginBottom: "107.44px",
  },
  "& .title": {
    marginBottom: "8px",
    fontSize: "24px",
    fontWeight: 700,
  },
  "& .secondary": {
    marginBottom: "50px",
    fontSize: "14px",
    fontWeight: 400,
    color: colors.subtitle1,
  },
  "& .workspace-input": {
    marginBottom: "24px",
  },
  "& .email-input": {
    marginBottom: "16px",
  },
  "& .first-checkbox": {
    marginBottom: "16px",
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "21px",
      color: colors.subtitle2,
    },
  },
  "& .second-checkbox": {
    marginBottom: "32px",
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
      color: colors.subtitle2,
    },
  },
  "& .link": {
    color: colors.lightBlue,
    textDecoration: "none",
  },
  "& .create-account-button": {
    marginBottom: "32px",
  },
  "& .signin": {
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 400,
    color: colors.subtitle2,
  },
});

export default StyledStep1Form;
