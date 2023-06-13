import {colors, Colors} from 'theme/colors';
import {Shadows, shadows} from 'theme/shadows';

export const theme = {
  colors: colors,
  shadows: shadows,
};

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    shadows: Shadows;
  }
}
