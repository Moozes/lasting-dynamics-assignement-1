import { ReactComponent as grid} from "assets/icon/grid.svg"
import { ReactComponent as users} from "assets/icon/users.svg"
import { ReactComponent as documentIcon} from "assets/icon/document.svg"
import { ReactComponent as dataStorage} from "assets/icon/data-storage.svg"
import { ReactComponent as rightArrows} from "assets/icon/right-arrows.svg"
import { ReactComponent as robot} from "assets/icon/robot.svg"
import { ReactComponent as siteMap} from "assets/icon/site-map.svg"
import { ReactComponent as help} from "assets/icon/help.svg"
import { v4 as uuidv4 } from 'uuid';
import { ReactSVGComponent } from "types/types"


function generateObjectWithId(Icon: ReactSVGComponent, text: string) {
    return { id: uuidv4(), Icon, text }
}

export const sideNavigationMenuArray = [
    generateObjectWithId(grid, "Processes"),
    generateObjectWithId(users, "Users"),
    generateObjectWithId(documentIcon, "Documents"),
    generateObjectWithId(dataStorage, "Storage"),
    generateObjectWithId(rightArrows, "Arrows"),
    generateObjectWithId(robot, "Automation"),
    generateObjectWithId(siteMap, "Map"),
    generateObjectWithId(help, "Help"),
]
