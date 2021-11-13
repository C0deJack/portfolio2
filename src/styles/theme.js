// ====== All brand colors and brand specific styling should live here ====== //

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
    primary: '#0E1C75', // dark blue
    secondary: '#E21266', // magenta
    warning: '#FCDA00', // yellow
    info: '#00CCC6', // teal
    background: '#eaeaea',
    foreground: '#282828',
    grey: '#bdbdbd',
    muted: '#eee',
  }
};


export const darkTheme = {
  // Make properties the same on both to force both themes to be consistent
  all: { ...lightTheme.all },
  color: {
    primary: '#0E1C75', // dark blue
    secondary: '#E21266', // magenta
    warning: '#FCDA00', // yellow
    info: '#00CCC6', // teal
    background: '#000',
    foreground: '#dadada',
    grey: '#6e6e6e',
    muted: '#eee',
  }
};
