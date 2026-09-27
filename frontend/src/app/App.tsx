import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EstimatePage from '../pages/EstimatePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import ServicesPage from '../pages/ServicesPage';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { PageContainer } from '@/components/layout/PageContainer';

function App() {

  return (
    <>
      <SiteHeader />
      <PageContainer>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/estimate' element={<EstimatePage />} />
          <Route path='/about' element={<EstimatePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/error' element={<NotFoundPage />} />
        </Routes>
      </PageContainer>
      <SiteFooter />
    </>
  )
}

export default App;
