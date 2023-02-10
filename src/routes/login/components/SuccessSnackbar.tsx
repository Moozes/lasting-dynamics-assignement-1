import styled from "@emotion/styled";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SuccessSnackbar(props: SnackbarProps) {
  return (
    <Snackbar
      {...props}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert severity="success" onClose={props.onClose as any}>
      Utente autenticato con successo
      </Alert>
    </Snackbar>
  );
}
