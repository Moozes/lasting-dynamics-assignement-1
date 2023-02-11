import { DivProps } from "types/types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { colors } from "themes/variables";

function Process(props: DivProps) {
  return (
    <div {...props}>
      <Typography className="title" >Welcome, Fabrizio Nillo</Typography>
      <Typography className="secondary">
        Work with your team mates, take track of your process
        <br />
        and close all tasks
      </Typography>
      <Grid container></Grid>
    </div>
  );
}


const StyledProcess = styled(Process)({
  padding: "50px 24px",
  "& .title": {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: "45px",
    color: colors.title,
    marginBottom: 24,
  },
  "& .secondary": {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "30px",
    color: colors.subtitle3
  },
})

export default StyledProcess;