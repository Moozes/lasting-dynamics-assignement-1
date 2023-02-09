import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { formikError } from "utils/utils";
import OutlinedInput from "components/OutlinedInput";
import PinkButton from "components/PinkButton";
import { colors } from "themes/variables";
// import useFormValidation1 from "../hooks/useFormValidation1";

function Step2Form(props: DivProps) {
  // const formik = useFormValidation1();

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Insert new password</Typography>
      <Typography className="secondary">
        Enter your new password to access the platform
      </Typography>

      <form
      // onSubmit={formik.handleSubmit}
      >
        <OutlinedInput
            className="password1-input"
            label="New password"
            type="password"
          fullWidth
          // error={formikError("email", formik)}
          // helperText={formikError("email", formik) && formik.errors.email}
          // {...formik.getFieldProps("email")}
        />
        <OutlinedInput
            className="password2-input"
            label="Confirm new password"
            type="password"
          fullWidth
          // error={formikError("email", formik)}
          // helperText={formikError("email", formik) && formik.errors.email}
          // {...formik.getFieldProps("email")}
        />

        <PinkButton
          type="submit"
          className="confirm-password-button"
          fullWidth
          //    disabled={formik.isSubmitting}
        >
          Confirm new password
        </PinkButton>
      </form>
    </div>
  );
}

const StyledStep2Form = styled(Step2Form)({
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
    marginBottom: "40px",
    fontSize: "14px",
    fontWeight: 400,
    color: colors.subtitle1,
  },
  "& .password1-input, & .password2-input": {
    marginBottom: "32px",
  },
  "& .confirm-password-button": {
    marginBottom: "32px",
  },
});

export default StyledStep2Form;
