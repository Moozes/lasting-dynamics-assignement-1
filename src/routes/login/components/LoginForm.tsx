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

function LoginForm(props: DivProps) {
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
      <form>
        <TextField
          className="email-input"
          variant="outlined"
          label="Email"
          size="small"
          fullWidth
        />
        <TextField
          className="password-input"
          variant="outlined"
          label="Password"
          type="password"
          size="small"
          fullWidth
        />
        <Grid container className="checkbox-grid" justifyContent="space-between" alignItems="center">
          <Grid item>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link className="link" to="/reset-password">Forgot password</Link>
          </Grid>
        </Grid>
        <DarkBlueButton className="login-button" size="small" fullWidth>
          Login
        </DarkBlueButton>
      </form>
      <Typography>
        Don't you have an account?
        <Link to="/signup" className="link" >Sign up now</Link>
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
    textDecoration: "none"
  }
});

export default StyledLoginForm;
