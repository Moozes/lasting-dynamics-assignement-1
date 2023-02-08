import styled from "@emotion/styled";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ErrorSnackbar(props: SnackbarProps) {
  return (
    <Snackbar
      {...props}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert severity="error" onClose={props.onClose as any}>
        Credenziali non valide
      </Alert>
    </Snackbar>
  );
}
