import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { formikError } from "utils/utils";
import OutlinedInput from "components/OutlinedInput";
import PinkButton from "components/PinkButton";
import { colors } from "themes/variables";
import { Link } from "react-router-dom";

function Step1Form(props: DivProps) {
  //   const formik = useFormValidation2();

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Do you forgot your password?</Typography>
      <Typography className="secondary">
        Insert your email and we will send you a link in your email box to reset
        your password.
      </Typography>

      <form
      //   onSubmit={formik.handleSubmit}
      >
        <OutlinedInput
          className="email-input"
          label="Email"
          fullWidth
          //   error={formikError("name", formik)}
          //   helperText={formikError("name", formik) && formik.errors.name}
          //   {...formik.getFieldProps("name")}
        />

        <PinkButton
          type="submit"
          className="reset-password-button"
          fullWidth
          //  disabled={formik.isSubmitting}
        >
          Reset Password
        </PinkButton>
        <Typography className="signin">
          Go back to{" "}
          <Link to="/" className="link">
            Login
          </Link>
        </Typography>
      </form>
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
    color: colors.title,
  },
  "& .secondary": {
    marginBottom: "50px",
    fontSize: "14px",
    fontWeight: 400,
    color: colors.subtitle1,
  },
  "& .email-input": {
    marginBottom: "32px",
  },
  "& .reset-password-button": {
    marginBottom: "32px",
  },
  "& .signin": {
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 400,
    color: colors.subtitle2,
    "& .link": {
      color: colors.lightBlue,
      textDecoration: "none",
    },
  },
});

export default StyledStep1Form;
