import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { formikError } from "utils/utils";
import OutlinedInput from "components/OutlinedInput";
import LightBlueButton from "components/LighBlueButton";
import { colors } from "themes/variables";
import useFormValidation2 from "../hooks/useFormValidation2";
import Grid from "@mui/material/Grid";

function Step2Form(props: DivProps) {
  const formik = useFormValidation2();

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Complete your profile</Typography>
      <Typography className="secondary">
        Insert all your info to proceed with your workspace
      </Typography>

      <form
        onSubmit={formik.handleSubmit}
      >
        <Grid container gap="24px" className="inputs-grid">
          <Grid item width="0" flexGrow="1">
            <OutlinedInput
              label="Name"
              fullWidth
                error={formikError("name", formik)}
                helperText={
                  formikError("name", formik) && formik.errors.name
                }
                {...formik.getFieldProps("name")}
            />
          </Grid>
          <Grid item width="0" flexGrow="1">
            <OutlinedInput
              label="Surname"
              fullWidth
                error={formikError("surname", formik)}
                helperText={
                  formikError("surname", formik) && formik.errors.surname
                }
                {...formik.getFieldProps("surname")}
            />
          </Grid>
        </Grid>
        <OutlinedInput
          className="password-input"
          label="Password"
          fullWidth
            error={formikError("password", formik)}
            helperText={formikError("password", formik) && formik.errors.password}
            {...formik.getFieldProps("password")}
        />
        <OutlinedInput
          className="repeat-password-input"
          label="Repeat Password"
          fullWidth
            error={formikError("repeatPassword", formik)}
            helperText={formikError("repeatPassword", formik) && formik.errors.repeatPassword}
            {...formik.getFieldProps("repeatPassword")}
        />

        <LightBlueButton
          type="submit"
          fullWidth
            disabled={formik.isSubmitting}
        >
          Complete now
        </LightBlueButton>
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
    marginBottom: "50px",
    fontSize: "14px",
    fontWeight: 400,
    color: colors.subtitle1,
  },
  "& .inputs-grid": {
    marginBottom: "24px",
  },
  "& .password-input": {
    marginBottom: "16px",
    "& inpur": {
      padding: "12px 16px",
    },
  },
  "& .repeat-password-input": {
    marginBottom: "32px",
    "& inpur": {
      padding: "12px 16px",
    },
  },
});

export default StyledStep2Form;
