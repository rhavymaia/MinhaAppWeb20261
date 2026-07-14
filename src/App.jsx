import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';

import Home from './views/Home';
import InstituicaoEnsino from './views/InstituicaoEnsino';
import MainLayout from './layouts/MainLayout';
import Aluno from './views/Aluno';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/instituicaoensino" element={<InstituicaoEnsino />} />
          <Route path="/aluno" element={<Aluno />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
