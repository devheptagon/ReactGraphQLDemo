import React from 'react'
import { ThemeList } from '../../theme/themes'
import { ThemeSelectorWrapper } from './shared.style'
import { ThemeContext } from '../../theme/themes'

class ThemeSelector extends React.Component {    
    themeChanged = (e, toggleTheme) => {
        const selectedThemeName = e.target.value
        const selectedTheme = ThemeList[selectedThemeName]
        toggleTheme(selectedTheme)
    }

    renderThemeSelectionRadioButton = (activeTheme, selectedTheme, toggleThemeCallback) => { 
        return <React.Fragment>
            <span>{selectedTheme.descriptor}</span> 
            <input id={`rb-${selectedTheme.descriptor}`} type='radio' name='theme-group' 
                onChange={(e) => this.themeChanged(e, toggleThemeCallback)} value={selectedTheme.descriptor} 
                checked={selectedTheme.descriptor === activeTheme.descriptor}
            />
        </React.Fragment>
    }

    render () {
        return (
            <ThemeContext.Consumer>
                { 
                    ({theme, toggleTheme}) => <ThemeSelectorWrapper>
                        { 
                            this.renderThemeSelectionRadioButton(theme, ThemeList.LightTheme, toggleTheme)
                        }                        
                        { 
                            this.renderThemeSelectionRadioButton(theme, ThemeList.DarkTheme, toggleTheme)               
                        }                        
                    </ThemeSelectorWrapper>
                }
            </ThemeContext.Consumer>        
        )
    }    
}

export default ThemeSelector