import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DarkBlueButton from "components/DarkBlueButton";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { Grid } from "@mui/material";
import { formikError } from "utils/utils";
import useFormValidation from "../hooks/useFormValidation";
import { useState } from "react";
import ErrorSnackbar from "./ErrorSnackbar";
import SuccessSnackbar from "./SuccessSnackbar";
import OutlinedInput from "components/OutlinedInput";
import { colors } from "themes/variables";
import LoadingSpinner from "components/LoadingSpinner";
function Form(props: DivProps) {
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const formik = useFormValidation(setSuccessOpen, setErrorOpen);

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Login</Typography>
      <Typography className="secondary">
        Thanks to come back on Coraly
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <OutlinedInput
          className="email-input"
          label="Email"
          fullWidth
          error={formikError("email", formik)}
          helperText={formikError("email", formik) && formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        <OutlinedInput
          className="password-input"
          label="Password"
          type="password"
          fullWidth
          error={formikError("password", formik)}
          helperText={formikError("password", formik) && formik.errors.password}
          {...formik.getFieldProps("password")}
        />
        <Grid
          container
          className="checkbox-grid"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <FormControlLabel
              className="checkbox"
              control={<Checkbox {...formik.getFieldProps("remember")} />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link className="link" to="/reset-password">
              Forgot password
            </Link>
          </Grid>
        </Grid>
        <DarkBlueButton
          type="submit"
          className="login-button"
          fullWidth
          disabled={formik.isSubmitting}
        >
          Login
          <LoadingSpinner
            color={colors.darkBlue}
            className="loading-spinner"
            open={formik.isSubmitting}
          />
        </DarkBlueButton>
      </form>
      <Typography className="signup">
        Don't you have an account?{" "}
        <Link to="/signup" className="link">
          Sign up now
        </Link>
      </Typography>
      <SuccessSnackbar
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
      <ErrorSnackbar open={errorOpen} onClose={() => setErrorOpen(false)} />
    </div>
  );
}

const StyledForm = styled(Form)({
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
  "& .email-input": {
    marginBottom: "24px",
  },
  "& .password-input": {
    marginBottom: "19px",
  },
  "& .checkbox-grid": {
    marginBottom: "34px",
    "& .MuiFormControlLabel-root .MuiTypography-root": {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: 400,
    }
  },
  "& .login-button": {
    marginBottom: "32px",
    "& .loading-spinner": {
      marginLeft: "10px",
    },
  },
  "& .link": {
    color: colors.lightBlue,
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 400,
  },
  "& .signup": {
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 400,
    color: colors.subtitle2,
  },
});

export default StyledForm;
