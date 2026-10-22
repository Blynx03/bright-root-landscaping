import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EstimatePage from '../pages/EstimatePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import ServicesPage from '../pages/ServicesPage';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ScrollTop from '@/components/ui/ScrollTop';

function App() {

  return (
    <>
      <SiteHeader />
        <ScrollTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact/inquiry' element={<EstimatePage formMode='contact' />} />
            <Route path='/estimate' element={<EstimatePage formMode='estimate' />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contact' element={<ContactPage />} /> 
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      <SiteFooter />
    </>
  )
}

export default App;
