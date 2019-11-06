import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Palette from './palette';

const palette = Palette;

const typography = {
  fontFamily: ['Roboto', 'Pacifico', 'Raleway'].join(',')
};
const themeName = 'Nature';

let theme = createMuiTheme({ palette, typography, themeName });
theme = responsiveFontSizes(theme);

export default theme;
