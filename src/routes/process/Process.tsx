import { DivProps } from "types/types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

function Process(props: DivProps) {
  return (
    <div {...props}>
      <Typography>Welcome, Fabrizio Nillo</Typography>
      <Typography>
        Work with your team mates, take track of your process
        <br />
        and close all tasks
      </Typography>
      <Grid container>grid</Grid>
    </div>
  );
}


const StyledProcess = styled(Process)({

})

export default StyledProcess;