
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from 'components/common/ScrollToTop';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Home from 'pages/Home';
import Servicos from 'pages/Servicos';
import Planos from 'pages/Planos';
import Sobre from 'pages/Sobre';
import Blog from 'pages/Blog';
import Contato from 'pages/Contato';
import Privacidade from 'pages/Privacidade';
import Termos from 'pages/Termos';

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/servicos" element={<Servicos/>}/>
          <Route path="/planos" element={<Planos/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/privacidade" element={<Privacidade/>}/>
          <Route path="/termos" element={<Termos/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;