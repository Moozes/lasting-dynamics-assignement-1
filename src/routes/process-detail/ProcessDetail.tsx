import styled from "@emotion/styled";
import { DivProps } from "types/types";
import ControlsBar from "./components/ControlsBar";
import ControlsBar2 from "./components/ControlsBar2";
import DataTable from "./components/DataTable";
import AddContractForm from "./components/AddContractForm";
import { useState } from "react";

function ProcessDetail(props: DivProps) {
  const [addFormOpen, setAddFormOpen] = useState(false)
  return (
    <div {...props}>
      <ControlsBar openAddForm={() => setAddFormOpen(true)}/>
      <div className="relative-container"> {/*relative*/}
        <ControlsBar2 />
        <DataTable />
        <AddContractForm  addFormOpen={addFormOpen} closeAddForm={() => setAddFormOpen(false)} />{/*absolute*/}
      </div>
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
