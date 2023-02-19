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
import { ReactComponent as DocumentIcon } from "assets/icon/document.svg";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "./Radio";
import OutlinedInput from "components/OutlinedInput";

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
          <AccountIcon />
          <span>Select vendors</span>
          <DownArrowIcon />
        </div>
        <div className="empty"></div>
        <Divider orientation="vertical" flexItem />
        <div className="empty"></div>
        <div className="db">
          <DataStorageIcon />
          #database_object_1
        </div>
        <div className="db">
          <DataStorageIcon />
          #db-oject1
        </div>
      </div>
      <div className="form-name">Startform Name</div>
      <OutlinedInput className="input" fullWidth label="Email" />
      <OutlinedInput
        className="input"
        fullWidth
        label="Description test"
        multiline
        rows={2}
        helperText="This is a description"
      />
      <div className="form-name">Company data</div>
      <div className="form-grid">
        <div className="left-side">
            <DocumentIcon/>
            <div className="divider"></div>
        </div>
        <div className="right-side">
           <OutlinedInput  className="input" fullWidth label="Company Name" />
           <OutlinedInput  className="input" fullWidth label="Surname" />
           <RadioGroup>
            <FormControlLabel value="Company" control={<Radio/>} label="Company"/>
            <FormControlLabel value="Person" control={<Radio/>} label="Person"/>
           </RadioGroup>
        </div>
      </div>
      <div className="form-name">Gender</div>
      <RadioGroup>
            <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="Not declared" control={<Radio/>} label="Not declared"/>
        </RadioGroup>
    </div>
  );
}

const Form = styled(Component)({
  paddingRight: 16,
  paddingLeft: 24,
  overflowY: "scroll",
  overflowX: "hidden",
  height: "100%",
  "& .grid-1": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 15,
  },
  "& .grid-2": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
  },
  "& .grid-3": {
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: "1px solid #EAEAEC",
    paddingBottom: 14,
    marginBottom: 16,
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
    "& span": {
        whiteSpace: "nowrap",
    },
  },
  "& .db": {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#D6D5D9",
    padding: "2px 16px",
    borderRadius: 100,
    whiteSpace: "nowrap",
    "& svg ": {
      height: 16,
      width: 16,
      "& path": {
        fill: "#312E43",
      },
    },
  },
  "& .form-name": {
    ...font(600, 16, 24, colors.title),
    marginBottom: 16,
  },
  "& .input": {
    marginBottom: 16,
  },
  "& .form-grid": {
    display: "flex",
    gap: 20,
    marginBottom: 16,
    "& .left-side": {
        width: 16,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        "& svg path": {
            fill: "#9897A1"
        },
        "& .divider": {
            borderLeft: "2px solid #EAEAEC",
            flexGrow: 1
        }
    },
    "& .right-side": {
        flexGrow: 1,
        "& .input": {
            marginBottom: 24,
        }
    },
  }
});
export default Form;
