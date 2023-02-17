import Drawer from "@mui/material/Drawer";


type PermanentDrawerProps = {
    className?: string;
    children: React.ReactNode
}
export default function PermanentDrawer(props: PermanentDrawerProps) {
    return (
        <Drawer
            {...props}
            variant="permanent"
        />
    )
}