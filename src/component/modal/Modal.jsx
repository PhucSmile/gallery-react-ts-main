import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { images } from '../../data';
import { toggleActions } from '../../store/reducer';
import './Modal.scss';

// Gom các hàm có thể tái sử dụng này về 1 file utils
const findPosition = (images, current) => images.findIndex((imgUrl) => imgUrl === current);

const Modal = () => {
  const [previewImg, setPreviewImg] = useState(images[0]);
  const dispatch = useDispatch();

  // Tên hàm bắt đầu bằng chữ thường
  const handleHideToggle = () => dispatch(toggleActions.toggle());

  const handlePrev = () => {
    const index = findPosition(images, previewImg);
    setPreviewImg(images[index > 0 ? index - 1 : images.length - 1]);
  };

  const handleNext = () => {
    const index = findPosition(images, previewImg);
    setPreviewImg(images[index < images.length - 1 ? index + 1 : 0]);
  };

  // hàm đơn giản thì viết gọn lại,  Gom các hàm có thể tái sử dụng này về 1 file utils
  const trumcateString = (str, num) => (str?.length > num ? str.slice(0, num) + '...' : str);

  return (
    <>
      <div className="modal__overlay" onClick={handleHideToggle}></div>
      <div className="modal__content">
        <Container fluid>
          <Row>
            <Col lg={8}>
              <div className="content__img">
                <span className="content__arrow left" onClick={handlePrev}>
                  <i className="ri-arrow-left-s-line"></i>
                </span>
                <img src={previewImg} alt="" />
                <span className="content__arrow right" onClick={handleNext}>
                  <i className="ri-arrow-right-s-line"></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <div className="content__list">
                <h5>
                  {trumcateString(
                    `Tai nghe CAT không dây bluetooth STN28 màu sắc cute,âm thanh ấm bass mạnh Tai Nghe Mèo Dễ Thương Học Online STN28 `,
                    64,
                  )}
                </h5>
                <div className="content__list-imgs">
                  <Row>
                    {/* Dùng map */}
                    {images.map((urlImg, index) => {
                      return (
                        <Col lg={4} key={index}>
                          <div className="img__item">
                            <img src={urlImg} alt="gallery-img" onClick={() => setPreviewImg(urlImg)} />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Modal;
