import styled from "@emotion/styled";
import { colors } from "themes/variables";
import { DivProps } from "types/types";
import { font } from "utils/utils";
import RoundChip from "./RoundChip";
import Chip from "components/Chip";
import { ReactComponent as RightArrowsIcon } from "assets/icon/right-arrows.svg";
import { ReactComponent as DownArrowIcon } from "assets/icon/down-arrow.svg";
import { ReactComponent as DateIcon } from "assets/icon/date.svg";
import { ReactComponent as PlusCircleIcon } from "assets/icon/plus-circle.svg";
import { ReactComponent as AccountIcon } from "assets/icon/account.svg";
import { ReactComponent as DataStorageIcon } from "assets/icon/data-storage.svg";
import Divider from "@mui/material/Divider";


const LETTERS = ["PL", "CN", "FM", "LN", "ST"];

function Component(props: DivProps) {
  return (
    <div {...props}>
      <div className="grid-1">
        {LETTERS.map((elm) => (
          <RoundChip key={elm} bgColor={colors.darkBlue} color="white">
            {elm}
          </RoundChip>
        ))}
        <span className="_5">+5</span>
        <PlusCircleIcon className="pink" />
        <div className="empty"></div>
        <RightArrowsIcon className="pink" />
        <span className="chapter-one">Chapter One</span>
        <DownArrowIcon />
        <div className="empty"></div>
        <DateIcon />
        <span className="date">05/10/2021 - 17:50</span>
      </div>
      <div className="grid-2">
        <Chip color="#47BDFF" text="Label 1" className="chip" />
        <Chip color="#E547FF" text="Label 2" className="chip" />
        <Chip color="#FF9F47" text="Label 3" className="chip" />
        <PlusCircleIcon className="pink" />
      </div>
      <div className="grid-3">
            <div className="vendors">
                <AccountIcon/>
                <span>Select vendors</span>
                <DownArrowIcon/>
            </div>
            <div className="empty"></div>
            <Divider orientation="vertical" flexItem/>
            <div className="empty"></div>
            <div className="db">
                <DataStorageIcon/>
                #database_object_1
            </div>
            <div className="db">
                <DataStorageIcon/>
                #db-oject1
            </div>
      </div>
    </div>
  );
}

const Form = styled(Component)({
  paddingRight: 16,
  overflowY: "scroll",
  height: "100%",
  "& .grid-1": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 15
},
"& .grid-2": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 15
  },
"& .grid-3": {
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: "1px solid #EAEAEC",
    paddingBottom: 14
  },
  "& .empty": {
    flexGrow: 1,
  },
  "& ._5": {
    ...font(500, 12, 14.25, colors.darkBlue),
  },
  "& .chapter-one, & .date": {
    ...font(600, 14, 18, colors.subtitle1),
  },
  "& svg.pink path": {
    fill: colors.pink,
  },
  "& .chip": {
    borderRadius: 100,
    padding: "2px 16px",
  },
  "& .vendors": {
    display: "flex",
    alignItems: "center",
    gap: 6,    
    ...font(600, 14, 18, colors.subtitle1),
  },
  "& .db": {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#D6D5D9",
    padding: "2px 16px",
    borderRadius: 100,
    "& svg ": {
        height: 16,
        width: 16,
        "& path": {
            fill: "#312E43"
        }
    }
  }
});
export default Form;
