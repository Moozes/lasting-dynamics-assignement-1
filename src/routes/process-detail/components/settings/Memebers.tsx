import styled from "@emotion/styled";
import { DivProps } from "types/types";
import PinkButton from "components/PinkButton";
import OutlinedInput from "components/OutlinedInput";
import Typography from "@mui/material/Typography";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import { ReactComponent as PlusCircleIcon } from "assets/icon/plus-circle.svg";
import { colors } from "themes/variables";

function Component(props: DivProps) {
  return (
    <div {...props}>
      <div className="header">
        <OutlinedInput  className="search-input" InputProps={{
            startAdornment: <SearchIcon/>
        }} placeholder="Cerca utente"/>
        <Typography className="title" >Membri</Typography>
        <PinkButton className="invite-button" startIcon={<PlusCircleIcon/>} >Invita</PinkButton>
      </div>
    </div>
  );
}

const Members = styled(Component)({
  "& .header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .search-input input": {
      padding: "12px 16px",
    },
    "& .title": {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        color: colors.title
    },
    "& .invite-button": {
        padding: "7px 12px"
    }
  },
});
export default Members;
