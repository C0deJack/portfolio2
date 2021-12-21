import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { Header } from './components/container/Header';
import { Home } from './components/container/Home';
import Projects from './components/container/Projects';
import Contact from './components/container/Contact';
import { StyledFooter } from './components/container/Footer';
import { GlobalStyles } from './styles/global';

export default function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <div className='heroImage'>
                <Header />
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path={'/projects'} element={<Projects />} />
                        <Route path={'/contact'} element={<Contact />} />
                        <Route element={<Home />} />
                    </Routes>
                    <StyledFooter />
                </Router>
            </div>
        </ThemeProvider>
    );
}
