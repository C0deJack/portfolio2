import { createContext, useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from '../../helpers/usePersistedState';
import { lightTheme, darkTheme } from '../../styles/theme';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const [theme, setTheme] = usePersistedState('theme', 'dark');
    const context = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={context}>
            <StyledThemeProvider
                theme={theme === 'dark' ? darkTheme : lightTheme}
                {...props}
            />
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext)
        throw new Error(
            'useTheme can&apos;t be used witout outside of a ThemeProvider'
        );

    const { theme, setTheme } = themeContext;

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return [theme, toggleTheme];
};
