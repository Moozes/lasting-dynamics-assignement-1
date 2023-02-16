import { colors } from "themes/variables";
import { v4 as uuidv4 } from 'uuid';

export const MEMBERS = [
    {
        id: uuidv4(),
        name: "Michele Cimmino",
        email: "michele.cimmino@lastingdynamics.com",
        permission: "Admin",
        permissionColor: colors.pink
    },
    {
        id: uuidv4(),
        name: "Marino Panariello",
        email: "marino.panariello@lastingdynamics.com",
        permission: "Utente",
        permissionColor: colors.darkBlue
    },
    {
        id: uuidv4(),
        name: "Vincenzo Lavorante",
        email: "vincenzo.lavorante@lastingdynamics.com",
        permission: "Venditore",
        permissionColor: colors.lightBlue
    },
    {
        id: uuidv4(),
        name: "Antonio Langella",
        email: "antonio.langella@lastingdynamics.com",
        permission: "Solo Lettura",
        permissionColor: colors.subtitle1
    },
    {
        id: uuidv4(),
        name: "Alessandro Durni",
        email: "a.durni@lastingdynamics.com",
        permission: "Venditore",
        permissionColor: colors.lightBlue
    },
    {
        id: uuidv4(),
        name: "Andrea",
        email: "andrea@coraly.com",
        permission: "Venditore",
        permissionColor: colors.lightBlue
    },
    {
        id: uuidv4(),
        name: "Francesco",
        email: "francesco@coraly.com",
        permission: "Utente",
        permissionColor: colors.darkBlue
    },
]