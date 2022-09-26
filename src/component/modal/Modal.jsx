import React, { useState } from 'react';
import data from '../../assets/data/data';
import './Modal.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { toggleActions } from '../../store/reducer';
import { useDispatch } from 'react-redux';

const Modal = () => {
    const [previewImg, setPreviewImg] = useState(data.img01);
    const dispatch = useDispatch();

    const HandleHideToggle = () => {
        dispatch(toggleActions.toggle());
    };

    const trumcateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <>
            <div className="modal__overlay" onClick={HandleHideToggle}></div>
            <div className="modal__content">
                <Container fluid>
                    <Row>
                        <Col lg={8}>
                            <div className="content__img">
                                <span className="content__arrow left" onClick={() => setPreviewImg(data.img02)}>
                                    <i className="ri-arrow-left-s-line"></i>
                                </span>
                                <img src={previewImg} alt="" />
                                <span className="content__arrow right" onClick={() => setPreviewImg(data.img03)}>
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
                                        <Col lg={4}>
                                            <div className="img__item">
                                                <img
                                                    src={data.img01}
                                                    alt="gallery-img"
                                                    onClick={() => setPreviewImg(data.img01)}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="img__item">
                                                <img
                                                    src={data.img02}
                                                    alt="gallery-img"
                                                    onClick={() => setPreviewImg(data.img02)}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="img__item">
                                                <img
                                                    src={data.img03}
                                                    alt="gallery-img"
                                                    onClick={() => setPreviewImg(data.img03)}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="img__item">
                                                <img
                                                    src={data.img04}
                                                    alt="gallery-img"
                                                    onClick={() => setPreviewImg(data.img04)}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="img__item">
                                                <img
                                                    src={data.img05}
                                                    alt="gallery-img"
                                                    onClick={() => setPreviewImg(data.img05)}
                                                />
                                            </div>
                                        </Col>
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
