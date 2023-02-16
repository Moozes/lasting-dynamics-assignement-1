import styled from "@emotion/styled";
import { ButtonProps } from "@mui/material/Button";
import StandardButton from "components/StandardButton";
import { colors } from "themes/variables";

type Props = ButtonProps & {
    active?: boolean
}
function component({ startIcon, active = false, ...props }: Props) {

  return <StandardButton {...props} startIcon={startIcon} />;
}

const ListItem = styled(component)(props => ({
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "24px",
  color: props.active ? colors.red : colors.buttonText,
  borderRadius: "0",
  borderLeft: props.active ? `2px solid ${colors.red}` : "1px solid #C1C0C7",
  padding: "12px 16px",
  justifyContent: "flex-start",
  "&:hover, &.active": {
      borderLeft: "2px solid "+colors.red,
      color: colors.red,
    "& svg path": {
      fill: colors.red
    },
  },
  "& svg": {
    width: 13.33,
    height: 13.33,
    "& path": {
        fill: props.active ? colors.red : "#83828E"
    }
  },
}));
export default ListItem;
