import styled from "@emotion/styled"
import ControlsBar from "./components/ControlsBar";
import ControlsBar2 from "./components/ControlsBar2";
import DataTable from "./components/DataTable";

function ProcessDetail() {
  return (
  <div>
    <ControlsBar/>
    <ControlsBar2/>
    <DataTable/>
  </div>
  )
}


const StyledProcessDetail = styled(ProcessDetail)({

})

export default StyledProcessDetail;