import styled from "@emotion/styled"
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

type Props = {
    open: boolean;
    onClose: VoidFunction,
    className?: string;
}


function Component(props: Props) {
    return (
        <Dialog {...props} fullScreen >
            <div className="header">hello</div>
            <DialogContent></DialogContent>
        </Dialog>
    )
}

const ContractCard = styled(Component)({
    "& .MuiDialog-container": {
        padding: "16px 16px 16px 96px"
    },
    "& .MuiPaper-root": {
    }
})
export default ContractCard;