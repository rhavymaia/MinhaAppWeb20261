import { Col, Container, Row } from 'react-bootstrap';
import Carrossel from './Carrossel';
import './Main.css';

const Main = () => {
  let itens = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Criança estudando feliz na escola.',
      titulo: 'Estudo no IFPB desde cedo!',
      descricao: 'Aluno estudano no IFPB e adorando aulas de Algoritmos.',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Crianças sendo mais felizes na escola.',
      titulo: 'Faça atividades físicas na Escola',
      descricao: 'Turma com boa saúde.',
    },
  ];

  return (
    <main>
      <Container>
        <Carrossel itensCarrossel={itens}></Carrossel>

        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
