import styled from "@emotion/styled";
import { DivProps } from "types/types";
import StandardButtonWithIcon from "components/StandardButtonWithIcon";
import PinkButton from "components/PinkButton";
import Divider from "@mui/material/Divider";
import { colors } from "themes/variables";

import layout1 from "assets/icon/layout1.svg";
import listFormat from "assets/icon/list-format.svg";
import layout2 from "assets/icon/layout2.svg";
import filters from "assets/icon/filters.svg";
import objectGroup from "assets/icon/object-group.svg";
import verticalArrows from "assets/icon/vertical-arrows.svg";
import colorPalette from "assets/icon/color-palette.svg";
import verticalResize from "assets/icon/vertical-resize.svg";
import shoppingBag from "assets/icon/shopping-bag.svg";
import search from "assets/icon/search.svg";
import importFile from "assets/icon/import-file.svg";
import exportFile from "assets/icon/export-file.svg";
import settings from "assets/icon/settings.svg";
import plusCircle from "assets/icon/plus-circle.svg";

type ControlsBarProps = DivProps & {
  openAddForm: VoidFunction;
  openSettings: VoidFunction
};
function ControlsBar({ openAddForm, openSettings, ...props }: ControlsBarProps) {
  return (
    <div {...props}>
      <StandardButtonWithIcon iconSrc={layout1}>Views</StandardButtonWithIcon>
      <Divider orientation="vertical" flexItem variant="middle" />
      <StandardButtonWithIcon iconSrc={listFormat}>
        Tables
      </StandardButtonWithIcon>
      <Divider orientation="vertical" flexItem variant="middle" />
      <StandardButtonWithIcon iconSrc={layout2} className="columns">
        Columns
      </StandardButtonWithIcon>
      <StandardButtonWithIcon iconSrc={filters}>Filters</StandardButtonWithIcon>
      <StandardButtonWithIcon iconSrc={objectGroup} className="group">
        Grouped in :&nbsp;
        <span>Phases</span>
      </StandardButtonWithIcon>
      <StandardButtonWithIcon iconSrc={verticalArrows}>
        Orders
      </StandardButtonWithIcon>
      <StandardButtonWithIcon iconSrc={colorPalette}>
        Colors
      </StandardButtonWithIcon>
      <StandardButtonWithIcon iconSrc={verticalResize} className="height">
        Height
      </StandardButtonWithIcon>
      <div className="empty"></div>
      <img className="clickable" src={shoppingBag} alt="icon" />
      <img className="clickable" src={search} alt="icon" />
      <img className="clickable" src={importFile} alt="icon" />
      <img className="clickable" src={exportFile} alt="icon" />
      <img className="clickable" src={settings} alt="icon" onClick={openSettings} />
      <PinkButton
        className="add-button"
        startIcon={<img src={plusCircle} alt="icon" />}
        onClick={openAddForm}
      >
        Add
      </PinkButton>
    </div>
  );
}

const StyledControlsBar = styled(ControlsBar)({
  padding: "12px 24px 20px",
  display: "flex",
  alignItems: "center",
  gap: 16,
  border: "2px solid #EAEAEC",
  "& .columns": {
    background: "#47FF9133",
  },
  "& .group": {
    background: "#6C47FF33",
    span: {
      color: colors.subtitle2,
    },
  },
  "& .empty": {
    flexGrow: 1,
  },
  "& .clickable": {
    cursor: "pointer",
  },
  "& .add-button": {
    padding: "7px 12px",
  },
});
export default StyledControlsBar;
