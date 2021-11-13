import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { Header } from './components/container/Header';
import { Home } from './components/container/Home';
import PageOne from './components/container/Projects';
import PageTwo from './components/container/Contact';
import { StyledFooter } from './components/container/Footer';
import { GlobalStyles } from './styles/global';


export default function App() {
    
    return (
      <ThemeProvider>
          <GlobalStyles />
            <Header /> 
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path={'/one'} element={<PageOne/>} />
                    <Route path={'/two'} element={<PageTwo/>} />
                    <Route element={<Home/>} />
                </Routes>
                <StyledFooter />
            </Router>
        </ThemeProvider>
    );
}
