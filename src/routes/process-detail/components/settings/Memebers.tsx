import styled from "@emotion/styled";
import { DivProps } from "types/types";
import PinkButton from "components/PinkButton";
import OutlinedInput from "components/OutlinedInput";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import { ReactComponent as PlusCircleIcon } from "assets/icon/plus-circle.svg";
import { ReactComponent as PermissionIcon } from "assets/icon/permission.svg";
import { ReactComponent as DownArrowIcon } from "assets/icon/down-arrow.svg";
import { ReactComponent as TrashIcon } from "assets/icon/trash.svg";
import { colors } from "themes/variables";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Chip from "./Chip";
import { MEMBERS } from "./data";
import Checkbox from "./Checkbox";

function Component(props: DivProps) {
  return (
    <div {...props}>
      <div className="header">
        <OutlinedInput
          className="search-input"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          placeholder="Cerca utente"
        />
        <Typography className="title">Membri</Typography>
        <PinkButton className="invite-button" startIcon={<PlusCircleIcon />}>
          Invita
        </PinkButton>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Checkbox/></TableCell>
              <TableCell>Utente</TableCell>
              <TableCell>Email</TableCell>
              <TableCell className="last-column" >Permessi <PermissionIcon/></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MEMBERS.map(elm => (
            <TableRow key={elm.id} >
                <TableCell><Checkbox/></TableCell>
                <TableCell> {elm.name} </TableCell>
                <TableCell> {elm.email} </TableCell>
                <TableCell>
                    <Chip text={elm.permission} icon={<DownArrowIcon/>} color={elm.permissionColor}/>
                </TableCell>
                <TableCell className="action-cell" ><TrashIcon/></TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const Members = styled(Component)({
  "& .header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    marginBottom: 24,
    "& .search-input input": {
      padding: "12px 16px",
    },
    "& .title": {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "24px",
      color: colors.title,
    },
    "& .invite-button": {
      padding: "7px 12px",
    },
    ".table-cell-head": {
      color: "red",
      padding: "30px",
    },
  },
  "& .MuiTableCell-head": {
    color: colors.subtitle2,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "18px",
    borderBottom: "1px solid #EAEAEC",
    background: "#F6F8FA",
    padding: "11.5px 6px"
  },
  "& .last-column": {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  "& .action-cell": {
    textAlign: "right"
  },
  "& .MuiTableBody-root": {
    "& .MuiTableCell-root": {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "18px",
        color: colors.subtitle1,
        padding: "11.5px 6px"
    }
  }
});
export default Members;
