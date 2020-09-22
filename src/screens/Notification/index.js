import React from 'react';
import { Wrapper, Container, Header, Title, Configuration, FlatList } from './styles'
import Emoji from 'react-native-emoji'

import NotificationList from '../../components/NotificationList'

const ice = <Emoji name="icecream" style={{ fontSize: 18 }} />
const cake = <Emoji name="cake" style={{ fontSize: 18 }} />
const beer = <Emoji name="beer" style={{ fontSize: 18 }} />

const items = [
    {
        key: String(Math.random()),
        description: '@jannyfreitas colocou R$ 200,00 no seu PicPay.',
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: 'Hoje é o aniversário do seu amigo @ivanjr (Ivan Júnior). Que tal enviar um presente?',
        icon1: ice,
        icon2: beer,
        icon3: cake,
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: 'Hoje é o aniversário do seu amigo @vina.paiva (Vinícius Paiva). Que tal enviar um presente?',
        icon1: ice,
        icon2: beer,
        icon3: cake,
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: '@joãopedro colocou R$ 100,00 no seu PicPay.',
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: '@leicia colocou R$ 500,00 no seu PicPay.',
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: 'Atualize seus dados cadastrais. Confirme algumas informações.',
        date: new Date()
    },
    {
        key: String(Math.random()),
        description: 'Hoje é o aniversário do seu amigo @jeferson (Jeferson Queiroz). Que tal enviar um presente?',
        icon1: ice,
        icon2: beer,
        icon3: cake,
        date: new Date()
    }
]

const Notification = () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Title>Notificações</Title>
                    <Configuration>Configurar</Configuration>
                </Header>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => <NotificationList data={item} />}
                />
            </Container>
        </Wrapper>
    );
}

export default Notification