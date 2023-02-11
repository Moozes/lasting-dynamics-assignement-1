import { DivProps, TProcessIcon } from "types/types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { colors } from "themes/variables";
import CreateNewProcess from "./components/CreateNewProcess";
import ProcessCard from "./components/ProcessCard";
import useProcesses from "./hooks/useProcesses";
import Skeleton from '@mui/material/Skeleton';

function Process(props: DivProps) {
  const { processes, loading: loadingProcesses } = useProcesses();

  return (
    <div {...props}>
      <Typography className="title">Welcome, Fabrizio Nillo</Typography>
      <Typography className="secondary">
        Work with your team mates, take track of your process
        <br />
        and close all tasks
      </Typography>
      <Grid container gap="24px">
        <Grid item>
          <CreateNewProcess />
        </Grid>
        {processes.map((elm) => (
          <Grid item key={elm.id} >
            <ProcessCard
              icon={elm.icon as TProcessIcon}
              controls={elm.controls}
              isPrivate={elm.isPrivate}
              text={elm.text}
              bgColor={elm.bgColor}
              id={elm.id}
            />
          </Grid>
        ))}
        {Array.from({length: loadingProcesses ? 15 : 0}).map((elm, idx) => (
          <Skeleton key={idx} variant="rectangular" width="150px" height="150px"/>
        ))}
      </Grid>
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
    color: colors.subtitle3,
    marginBottom: 24,
  },
});

export default StyledProcess;
