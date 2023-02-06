import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DarkBlueButton from "components/DarkBlueButton";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formikError } from "utils/utils"

function LoginForm(props: DivProps) {
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
        remember: false
    },
    validationSchema: Yup.object({
        email: Yup.string().required("Required").email("Invalid email format"),
        password: Yup.string().required("Required"),
    }),
    onSubmit: (values, helpers) => {
      alert(JSON.stringify(values, null, 2));
      helpers.resetForm()
    },
  });

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title" fontSize="24px" fontWeight="700">
        Login
      </Typography>
      <Typography
        className="secondary"
        fontSize="14px"
        fontWeight="400"
        color="#6F6D7B"
      >
        Thanks to come back on Coraly
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
            className="email-input"
            variant="outlined"
            label="Email"
            size="small"
            fullWidth
            error={formikError("email", formik)}
            helperText={formikError("email", formik) && formik.errors.email}
            {...formik.getFieldProps('email')}
            />
        <TextField
          className="password-input"
          variant="outlined"
          label="Password"
          type="password"
          size="small"
          fullWidth
          error={formikError("password", formik)}
          helperText={formikError("password", formik) && formik.errors.password}
          {...formik.getFieldProps('password')}
        />
        <Grid
          container
          className="checkbox-grid"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <FormControlLabel
              control={<Checkbox {...formik.getFieldProps('remember')} />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link className="link" to="/reset-password">
              Forgot password
            </Link>
          </Grid>
        </Grid>
        <DarkBlueButton type="submit" className="login-button" size="small" fullWidth>
          Login
        </DarkBlueButton>
      </form>
      <Typography>
        Don't you have an account?
        <Link to="/signup" className="link">
          Sign up now
        </Link>
      </Typography>
    </div>
  );
}

const StyledLoginForm = styled(LoginForm)({
  padding: "107px 100px 0 100px",
  ".logo": {
    marginBottom: "107.44px",
  },
  ".title": {
    marginBottom: "8px",
  },
  ".secondary": {
    marginBottom: "50px",
  },
  ".email-input": {
    marginBottom: "24px",
  },
  ".password-input": {
    marginBottom: "19px",
  },
  ".checkbox-grid": {
    marginBottom: "34px",
  },
  ".login-button": {
    marginBottom: "32px",
  },
  ".link": {
    color: "#2CCFBC",
    textDecoration: "none",
  },
});

export default StyledLoginForm;
