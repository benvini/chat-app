import light from './light';
import dark from './dark';

export type Palette = {
  textColor: string;
  backgroundColor: string;
};

export type Theme = {
  palette: Palette;
};

export const loadTheme = (colorSchema: String): Theme => ({
  palette: colorSchema === 'light' ? light : dark,
});
