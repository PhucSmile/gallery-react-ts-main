import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { images } from '../../data';
import { toggleActions } from '../../store/reducer';
import './Gallery.scss';

const Gallery = () => {
  const [previewImg, setPreviewImg] = useState(images[0]);

  const dispatch = useDispatch();

  // Tên hàm bắt đầu bằng chữ thường, Viết in sẽ hiểu thành tên class hoặc tên compnents (đây là convention chung)
  const handleShowtoggle = () => {
    dispatch(toggleActions.toggle());
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <div className="gallery">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="gallery__wrap">
              <div className="gallery__main-img text-center">
                <img src={previewImg} alt="" onClick={handleShowtoggle} />
              </div>

              <Carousel responsive={responsive}>
                {images.map((imgUrl, index) => {
                  return (
                    <div
                      key={`${imgUrl}${index}`}
                      className="img__item"
                      onMouseEnter={() => setPreviewImg(imgUrl)}
                      onClick={handleShowtoggle}
                    >
                      <img src={imgUrl} alt="gallery-img" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
          <Col lg={8}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
