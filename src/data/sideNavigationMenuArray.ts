import ld from "assets/icon/ld.svg"
import grid from "assets/icon/grid.svg"
import users from "assets/icon/users.svg"
import documentIcon from "assets/icon/document.svg"
import dataStorage from "assets/icon/data-storage.svg"
import rightArrows from "assets/icon/right-arrows.svg"
import robot from "assets/icon/robot.svg"
import siteMap from "assets/icon/site-map.svg"
import help from "assets/icon/help.svg"
import logout from "assets/icon/logout.svg"

let id = 0;

function generateObjectWithId(iconSrc: string, text: string) {
    id += 1;
    return {
        id,
        iconSrc,
        text
    }
}

export const sideNavigationMenuArray = [
    // generateObjectWithId(ld, "Lasting Dynamics"),
    generateObjectWithId(grid, "Processes"),
    generateObjectWithId(users, "Users"),
    generateObjectWithId(documentIcon, "Documents"),
    generateObjectWithId(dataStorage, "Storage"),
    generateObjectWithId(rightArrows, "Arrows"),
    generateObjectWithId(robot, "Automation"),
    generateObjectWithId(siteMap, "Map"),
    generateObjectWithId(help, "Help"),
    generateObjectWithId(logout, "Logout"),
]