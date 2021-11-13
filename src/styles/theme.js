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
    primary: '#f15025',
    secondary: '#E21266',
    warning: '#FCDA00',
    info: '#00CCC6',
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
    primary: '#f15025',
    secondary: '#E21266',
    warning: '#FCDA00',
    info: '#00CCC6',
    background: '#191b27',
    foreground: '#fff',
    grey: '#6e6e6e',
    muted: '#eee',
  }
};
