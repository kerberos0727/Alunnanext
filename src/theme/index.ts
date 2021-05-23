import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import type { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';
import type { Shadows as MuiShadows } from '@material-ui/core/styles/shadows';
import type {
  Palette as MuiPalette,
  TypeBackground as MuiTypeBackground
} from '@material-ui/core/styles/createPalette';
import { THEMES } from 'constants/theme.constant';
import { softShadows, strongShadows } from './shadows';
import typography from './typography';

interface TypeBackground extends MuiTypeBackground {
  dark: string;
}

interface Palette extends MuiPalette {
  background: TypeBackground;
}

export interface Theme extends MuiTheme {
  name: string;
  palette: Palette;
}

type Direction = 'ltr' | 'rtl';

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme?: string;
}

interface ThemeOptions {
  name?: string;
  direction?: Direction;
  typography?: Record<string, any>;
  overrides?: Record<string, any>;
  palette?: Record<string, any>;
  shadows?: MuiShadows;
}

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
};

const themesOptions: ThemeOptions[] = [
  {
    name: THEMES.LIGHT,
    typography: {
      fontFamily: [
        'Inter',
      ].join(','),
    },
    overrides: {
      MuiInputBase: {
        input: {
          // padding: '29px 12px 12px!important',
          '&::placeholder': {
            opacity: 1,
            color: '#A6A9C2',
            fontSize: 16,
            marginLeft: 24,
          },
          background: '#EFF0F7',
          borderRadius: 16,
          '&:focus': {
            background: 'white',
            border: '2px solid #4B4FE4',
            borderRadius: '16px'
          }
        }
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#4B4FE4',
      },
      secondary: {
        main: '#5850EC'
      },
      text: {
        // primary: colors.blueGrey[900],
        primary: '#0A1F44',
        secondary: '#A6A9C2',
      },
    },
    shadows: softShadows,
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34'
      },
      primary: {
        main: '#8a85ff'
      },
      secondary: {
        main: '#8a85ff'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
      }
    },
    shadows: strongShadows
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#2a2d3d',
        dark: '#222431',
        paper: '#2a2d3d'
      },
      primary: {
        main: '#a67dff'
      },
      secondary: {
        main: '#a67dff'
      },
      text: {
        primary: '#f6f5f8',
        secondary: '#9699a4'
      }
    },
    shadows: strongShadows
  }
];

export const createTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
}
