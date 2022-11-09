import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import {dataLunchmenu} from './data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
    width: 300px;
    height: 300px;
    border: solid 1px black;
    margin: 30px;
`;

const ImageContainer = styled.div`
    margin-left:1.66%;

`;

const LunchImg = styled.img.attrs({alt :'#'})`
    width: 100px;
    height: 200px;
    margin: 15px;
`;



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <h2> Single Item</h2>
        <StyledSlider {...settings}
        >
            {dataLunchmenu.map((item) => (
                <div className = "card">
                    <div className ="card-top">
                        <ImageContainer>
                          <LunchImg src = {item.link} />
                        </ImageContainer>
                        <h1>{item.id}</h1>
                    </div>
                </div>
            ))}
        </StyledSlider>
      </Container>
    );
  }
}