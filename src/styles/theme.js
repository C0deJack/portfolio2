// ====== All brand colors and brand specific styling should live here ====== //

import lightBg from '../assets/backgrounds/light-bg.png';
import darkBg from '../assets/backgrounds/flowers.jpg';

export const lightTheme = {
  all: {
    borderRadius: '0.5rem',
    color: {
      colorWhite: '#fff',
      colorBlack: '#000',
      success: '#0f0',
      danger: '#f00',
    }
  },
  color: {
    primary: '#f15025',
    secondary: '#E21266',
    warning: '#FCDA00',
    info: '#00CCC6',
    background: '#f2f2f2',
    foreground: '#282828',
    grey: '#535353',
    muted: '#eee',
  }, 
  backgroundImage: lightBg
};


export const darkTheme = {
  // Make properties the same on both to force both themes to be consistent
  all: { ...lightTheme.all },
  color: {
    primary: '#f15025',
    secondary: '#E21266',
    warning: '#FCDA00',
    info: '#00CCC6',
    background: '#191b27',
    foreground: '#fff',
    grey: '#a9afc3;',
    muted: '#eee',
  },
 backgroundImage: darkBg
};
