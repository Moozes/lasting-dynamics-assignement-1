import styled from "@emotion/styled";
import TableContainer, {
  TableContainerProps,
} from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import { colors } from "themes/variables";
import useContracts from "../hooks/useContracts";
import Skeleton from "@mui/material/Skeleton";

function DataTable(props: TableContainerProps) {
  const { contracts, loading: loadingContracts } = useContracts();

  return (
    <TableContainer component="div" {...props}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Contract Number</TableCell>
            <TableCell>Customer Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contract Type</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((elm) => (
            <TableRow key={elm.id}>
              <TableCell> {elm.contractNumber} </TableCell>
              <TableCell> {elm.customerNumber} </TableCell>
              <TableCell> {elm.email} </TableCell>
              <TableCell> {elm.contractType} </TableCell>
              <TableCell> {elm.phoneNumber} </TableCell>
            </TableRow>
          ))}
          {Array.from({length: loadingContracts ? 5 : 0}).map((elm, inx) => (
          <TableRow key={inx} >
            <TableCell>
              <Skeleton variant="rectangular" height={36} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rectangular" height={36} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rectangular" height={36} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rectangular" height={36} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rectangular" height={36} />
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const StyledDataTable = styled(DataTable)({
  "& .MuiTableContainer-root": {
    height: "",
  },
  "& .MuiTableCell-root": {
    border: "2px solid #EAEAEC",
    padding: "9px 6px",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "18px",
    color: colors.subtitle2,
  },
  "& .MuiTableCell-head": {
    fontWeight: 700,
  },
});
export default StyledDataTable;
