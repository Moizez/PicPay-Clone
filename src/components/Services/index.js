import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'

import { Container, Option, Img, Title, Description, OptionText } from './styles'

import img1 from '../../assets/images/10.png'
import img2 from '../../assets/images/11.png';
import img3 from '../../assets/images/06.png';
import img4 from '../../assets/images/12.png';
import img5 from '../../assets/images/01.png';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        title: 'Pagar pessoas',
        description: 'Pague todos os seus amigos que estão no PicPay.'
    },
    {
        key: String(Math.random()),
        img: img2,
        title: 'Pagar nas maquininhas',
        description: 'Pague em maquinas Cielo, GetNet e Rede escaneando o QR Code.'
    },
    {
        key: String(Math.random()),
        img: img3,
        title: 'Pagar conta',
        description: 'Pague sua cont de água, luz, boletos bancários e etc.'
    },
    {
        key: String(Math.random()),
        img: img4,
        title: 'Cobrar',
        description: 'Cobre um amigo'
    },
    {
        key: String(Math.random()),
        img: img5,
        title: 'Recarga de celular',
        description: 'Vivo, Tim, Claro, Oi, Brisanet, Correios e etc.'
    },
]

const Services = () => {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <OptionText>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                    </OptionText>
                    <Entypo name='dots-three-vertical' color='#DDD' size={20} />
                </Option>
            ))}

        </Container>
    );
}

export default Services