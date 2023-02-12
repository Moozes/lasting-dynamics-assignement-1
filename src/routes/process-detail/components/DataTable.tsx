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

function DataTable(props: TableContainerProps) {
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
          <TableRow>
            <TableCell>123</TableCell>
            <TableCell>345</TableCell>
            <TableCell>Email@</TableCell>
            <TableCell>Good</TableCell>
            <TableCell>334442234</TableCell>
          </TableRow>
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
