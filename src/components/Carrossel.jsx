import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

const Carrossel = (props) => {
  let itensCarrossel = props.itensCarrossel;
  return (
    <Carousel>
      {itensCarrossel.map(({ legenda, imgSrc, titulo, descricao }, i) => {
        return (
          <Carousel.Item>
            <Image className="carousel-img" text={legenda} src={imgSrc} />
            <Carousel.Caption>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Carrossel;
