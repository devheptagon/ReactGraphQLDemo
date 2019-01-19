import React from 'react'
import { Colors } from "./colors";

export const ThemeContext = React.createContext()

const SharedItems = {
    borderColor: Colors.lightGray
}

export const LightTheme = {
    descriptor: 'LightTheme',
    ...SharedItems,
    mainBackgroundColor: Colors.whiteSmoke,
    buttonTextColor: Colors.whiteSmoke,
    containerBackgroundColor: Colors.pearl,
    headerRowBackground: Colors.sandStorm,
    rowBackground: Colors.whiteSmoke,
    rowHoverBackground: Colors.mellowYellow,
    rowHoverColor: Colors.raisinBlack,
    rowBorderColor: Colors.neonCarrot
}

export const DarkTheme = {
    descriptor: 'DarkTheme',
    ...SharedItems,
    mainBackgroundColor: Colors.raisinBlack,
    buttonTextColor: Colors.whiteSmoke,
    containerBackgroundColor: Colors.artichoke,
    headerRowBackground: Colors.neonCarrot,
    rowBackground: Colors.pearl,
    rowHoverBackground: Colors.mellowYellow,
    rowHoverColor: Colors.raisinBlack,
    rowBorderColor: Colors.whiteSmoke
}

export const ThemeList = {
    LightTheme,
    DarkTheme
}