import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';
import img from '../../assets/images/13.png'

const Banner = () => {
    return (
        <Container>
            <Details>
                <Title>Divida suas contas com seus amigos</Title>
                <Description>Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças</Description>
            </Details>
            <Img source={img} />
        </Container>
    );
}

export default Banner