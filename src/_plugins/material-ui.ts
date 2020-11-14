import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        resume: Palette['primary']
        chat: Palette['primary']
    }

    interface PaletteOptions {
        resume: PaletteOptions['primary']
        chat: PaletteOptions['primary']
    }
}
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        primary: {
            light: '#e8e8e8',
            main: '#e3e3e3',
            dark: '#888888',
            contrastText: '#ff4a57',
        },
        secondary: {
            main: '#f6f6f8',
            contrastText: '#545454',
        },
        divider: '#9e9e9e',
        text: {
            primary: '#545454',
            secondary: '#ff4a57',
        },
        resume: {
            main: '#333333',
            dark: '#666666',
            contrastText: '#f5f5f5',
        },
        chat: {
            light: '#fdfdfd',
            main: '#e3e3e3',
            dark: '#ff4a57',
            contrastText: '#f5f5f5',
        },
    },
})
export default theme
