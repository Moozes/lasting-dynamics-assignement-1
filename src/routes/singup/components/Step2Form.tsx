import Logo from "components/Logo";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { DivProps } from "types/types";
import { formikError } from "utils/utils";
import OutlinedInput from "components/OutlinedInput";
import LightBlueButton from "components/LighBlueButton";
import { colors } from "themes/variables";
import useFormValidation from "../hooks/useFormValidation";
import Grid from "@mui/material/Grid";

function Step2Form(props: DivProps) {
  const formik = useFormValidation();

  return (
    <div {...props}>
      <Logo className="logo" />
      <Typography className="title">Complete your profile</Typography>
      <Typography className="secondary">
        Insert all your info to proceed with your workspace
      </Typography>

      <form
      //   onSubmit={formik.handleSubmit}
      >
        <Grid container gap="24px" className="inputs-grid">
          <Grid item width="0" flexGrow="1">
            <OutlinedInput
              //   className="workspace-input"
              label="Name"
              fullWidth
              //   error={formikError("workspaceName", formik)}
              //   helperText={
              //     formikError("workspaceName", formik) && formik.errors.workspaceName
              //   }
              //   {...formik.getFieldProps("workspaceName")}
            />
          </Grid>
          <Grid item width="0" flexGrow="1">
            <OutlinedInput
              //   className="workspace-input"
              label="Surname"
              fullWidth
              //   error={formikError("workspaceName", formik)}
              //   helperText={
              //     formikError("workspaceName", formik) && formik.errors.workspaceName
              //   }
              //   {...formik.getFieldProps("workspaceName")}
            />
          </Grid>
        </Grid>
        <OutlinedInput
          className="password-input"
          label="Password"
          fullWidth
          //   error={formikError("email", formik)}
          //   helperText={formikError("email", formik) && formik.errors.email}
          //   {...formik.getFieldProps("email")}
        />
        <OutlinedInput
          className="repeat-password-input"
          label="Repeat Password"
          fullWidth
          //   error={formikError("email", formik)}
          //   helperText={formikError("email", formik) && formik.errors.email}
          //   {...formik.getFieldProps("email")}
        />

        <LightBlueButton
          type="submit"
          //   className="create-account-button"
          fullWidth
          //   disabled={formik.isSubmitting}
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
  //   "& .first-checkbox": {
  //     marginBottom: "16px",
  //     "& .MuiFormControlLabel-label": {
  //       fontSize: "14px",
  //       fontWeight: 600,
  //       lineHeight: "21px",
  //       color: colors.subtitle2,
  //       "& .validation-error": {
  //         color: colors.red,
  //       },
  //     },
  //   },
  //   "& .second-checkbox": {
  //     marginBottom: "32px",
  //     "& .MuiFormControlLabel-label": {
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       lineHeight: "18px",
  //       color: colors.subtitle2,
  //     },
  //   },
  //   "& .link": {
  //     color: colors.lightBlue,
  //     textDecoration: "none",
  //   },
  //   "& .create-account-button": {
  //     marginBottom: "32px",
  //   },
  //   "& .signin": {
  //     fontSize: "14px",
  //     lineHeight: "18px",
  //     fontWeight: 400,
  //     color: colors.subtitle2,
  //   },
});

export default StyledStep2Form;
