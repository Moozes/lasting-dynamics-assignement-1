import { DivProps, TProcessIcon } from "types/types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { colors } from "themes/variables";
import CreateNewProcess from "./components/CreateNewProcess";
import ProcessCard from "./components/ProcessCard";
import useProcesses from "./hooks/useProcesses";
import Skeleton from '@mui/material/Skeleton';
import CreateProcessModal from "./components/CreateProcessModal";
import { useState } from "react";
import { processesContext } from "./context/processes";

function Process(props: DivProps) {
  const { processes, loading: loadingProcesses, addProcess } = useProcesses();
  const [open, setOpen] = useState(false)

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
          <CreateNewProcess onClick={() => setOpen(true)} />
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
          <Grid item key={idx}>
            <Skeleton variant="rectangular" width="150px" height="150px"/>
          </Grid>
        ))}
      </Grid>
      <processesContext.Provider value={{addProcess}} >
        <CreateProcessModal open={open} onClose={() => setOpen(false)}  />
      </processesContext.Provider>
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
