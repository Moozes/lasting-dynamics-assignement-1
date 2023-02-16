import styled from "@emotion/styled";
import { DivProps } from "types/types";
import ControlsBar from "./components/ControlsBar";
import ControlsBar2 from "./components/ControlsBar2";
import DataTable from "./components/DataTable";
import AddContractForm from "./components/AddContractForm";
import { useState } from "react";
import useContracts from "./hooks/useContracts";
import { contractsContext } from "./context/contracts";
import Settings from "./components/settings/Settings";

function ProcessDetail(props: DivProps) {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const contracts = useContracts();
  return (
    <div {...props}>
      <ControlsBar openAddForm={() => setAddFormOpen(true)} openSettings={() => setSettingsOpen(true)}/>
      <div className="relative-container">
        {" "}
        <ControlsBar2 />
        <contractsContext.Provider value={contracts} >
          <DataTable />
          <AddContractForm
            addFormOpen={addFormOpen}
            closeAddForm={() => setAddFormOpen(false)}
          />
        </contractsContext.Provider>
      </div>
      <Settings open={settingsOpen} onClose={() => {setSettingsOpen(false)}} />
    </div>
  );
}

const StyledProcessDetail = styled(ProcessDetail)({
  "& .relative-container": {
    position: "relative",
    minHeight: "calc(100vh - 136.31px)",
    overflowX: "hidden",
  },
});

export default StyledProcessDetail;
