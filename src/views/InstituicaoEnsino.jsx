import { useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';

const InstituicaoEnsino = () => {
  let [instituicoesEnsino, setInstituicoesEnsino] = useState([
    { nome: 'IFPB - Campus Guarabira', codigo: '1000', qtMatricula: 600 },
  ]);

  let [nome, setNome] = useState('');

  const buscarHandleClick = (event) => {
    console.log('Buscando!');
  };

  const adicionarHandleClick = (event) => {
    console.log('Adicionando!');

    setInstituicoesEnsino([
      ...instituicoesEnsino,
      {
        nome: 'IFPB - Campus João Pessoa',
        codigo: '1000',
        qtMatricula: 600,
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInstituicoesEnsino([
      ...instituicoesEnsino,
      {
        nome: nome,
        codigo: '1000',
        qtMatricula: Math.floor(Math.random() * 1000) + 1,
      },
    ]);
  };

  return (
    <Container>
      <Row>
        <Col xs="7" lg="7">
          <Form.Control type="email" placeholder="name@example.com" />
        </Col>
        <Col>
          <Button onClick={buscarHandleClick}>Buscar</Button>
        </Col>
        <Col>
          <Button onClick={adicionarHandleClick}>Adicionar</Button>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            <th>Matrículas</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsino.map((insttituicaoEnsino, i) => {
            return (
              <tr key={i}>
                <td>{insttituicaoEnsino.nome}</td>
                <td>{insttituicaoEnsino.codigo}</td>
                <td>{insttituicaoEnsino.qtMatricula}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default InstituicaoEnsino;
