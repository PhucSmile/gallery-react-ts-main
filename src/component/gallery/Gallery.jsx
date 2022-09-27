import React, { useState } from 'react';
import './Gallery.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import data from '../../assets/data/data';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { toggleActions } from '../../store/reducer';
import { useDispatch } from 'react-redux';

const Gallery = () => {
  const [previewImg, setPreviewImg] = useState(data.img01);

  const dispatch = useDispatch();

  const HandleShowtoggle = () => {
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
                <img src={previewImg} alt="" onClick={HandleShowtoggle} />
              </div>

              <Carousel responsive={responsive}>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img01)} onClick={HandleShowtoggle}>
                  <img src={data.img01} alt="gallery-img" />
                </div>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img02)} onClick={HandleShowtoggle}>
                  <img src={data.img02} alt="gallery-img" />
                </div>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img03)} onClick={HandleShowtoggle}>
                  <img src={data.img03} alt="gallery-img" />
                </div>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img04)} onClick={HandleShowtoggle}>
                  <img src={data.img04} alt="gallery-img" />
                </div>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img05)} onClick={HandleShowtoggle}>
                  <img src={data.img05} alt="gallery-img" />
                </div>
                <div className="img__item" onMouseEnter={() => setPreviewImg(data.img06)} onClick={HandleShowtoggle}>
                  <img src={data.img05} alt="gallery-img" />
                </div>
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
