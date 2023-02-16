import styled from "@emotion/styled";
import { ReactComponent as SettingsIcon } from "assets/icon/settings.svg";
import { ReactComponent as UsersIcon } from "assets/icon/users.svg";
import { ReactComponent as RobotIcon } from "assets/icon/robot.svg";
import { ReactComponent as Grid2Icon } from "assets/icon/grid2.svg";
import { ReactComponent as FileIcon } from "assets/icon/file.svg";
import { ReactComponent as ExportIcon } from "assets/icon/export.svg";
import { ReactComponent as BoardIcon } from "assets/icon/board.svg";
import { ReactComponent as ConnectionIcon } from "assets/icon/connection.svg";
import { ReactComponent as LabelIcon } from "assets/icon/label.svg";
import { ReactComponent as EnterIcon } from "assets/icon/enter.svg";
import { ReactComponent as ListFormatIcon } from "assets/icon/list-format.svg";
import { DivProps } from "types/types";
import ListItem from "./ListItem";
import { useState } from "react";

function Component(props: DivProps) {
    const [active, setActive] = useState(8)
  return (
    <div {...props}>
      <ListItem active={active === 0}  onClick={() => setActive(0)} startIcon={<ListFormatIcon />}>Startform</ListItem>
      <ListItem active={active === 1}  onClick={() => setActive(1)} startIcon={<EnterIcon />}>Fasi</ListItem>
      <ListItem active={active === 2}  onClick={() => setActive(2)} startIcon={<Grid2Icon />}>Tabella</ListItem>
      <ListItem active={active === 3}  onClick={() => setActive(3)} startIcon={<BoardIcon />}>Card</ListItem>
      <ListItem active={active === 4}  onClick={() => setActive(4)} startIcon={<LabelIcon />}>Labels</ListItem>
      <ListItem active={active === 5}  onClick={() => setActive(5)} startIcon={<FileIcon />}>Campi condizionali</ListItem>
      <ListItem active={active === 6}  onClick={() => setActive(6)} startIcon={<RobotIcon />}>Automazioni</ListItem>
      <ListItem active={active === 7}  onClick={() => setActive(7)} startIcon={<ConnectionIcon />}>Connessioni</ListItem>
      <ListItem active={active === 8}  onClick={() => setActive(8)} startIcon={<UsersIcon />}>Membri</ListItem>
      <ListItem active={active === 9}  onClick={() => setActive(9)} startIcon={<ExportIcon />}>Esportazione</ListItem>
      <ListItem active={active === 10} onClick={() => setActive(10)}  startIcon={<SettingsIcon />}>Generali</ListItem>
    </div>
  );
}

const SideMenu = styled(Component)({
    display: "flex",
    flexDirection: "column"
});
export default SideMenu;
