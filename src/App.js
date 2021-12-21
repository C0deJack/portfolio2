import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { Header } from './components/container/Header';
import { Home } from './components/container/Home';
import Projects from './components/container/Projects';
import Contact from './components/container/Contact';
import NotFound from './components/container/NotFound';
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
                        <Route exact path='/' element={<Home />} />
                        <Route exact path={'/projects'} element={<Projects />} />
                        <Route exact path={'/contact'} element={<Contact />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                    <StyledFooter />
                </Router>
            </div>
        </ThemeProvider>
    );
}
