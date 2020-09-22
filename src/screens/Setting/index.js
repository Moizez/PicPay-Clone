import React from 'react';

import {
    Wrapper, Container, Header, Help, HelpButton, Img, User, NameUser, Perfil,
    Link, ContentUser, MyAccount, Info, Title, Label, Divider
} from './styles'

import avatar from '../../assets/images/avatar.png'

const items = [
    {
        key: String(Math.random()),
        title: 'Meu PicPay',
        label: '@moizez'
    },
    {
        key: String(Math.random()),
        title: 'Meu número',
        label: '(**) *****-5555'
    },
    {
        key: String(Math.random()),
        title: 'Meu e-mail',
        label: 'moizezhenrique@gmail.com'
    },
    {
        key: String(Math.random()),
        title: 'Dados pessoais',
        label: 'Nome, CPF, data de nascimento'
    },
    {
        key: String(Math.random()),
        title: 'Conta bancária',
    },
    {
        key: String(Math.random()),
        title: 'Taxas e limites',
    },
    {
        key: String(Math.random()),
        title: 'Meus endereços',
    },
    {
        key: String(Math.random()),
        title: 'Meus favoritos',
    },
    {
        key: String(Math.random()),
        title: 'Validar identidade',
    }
]

const Setting = () => {
    return (
        <Wrapper>
            <Container>
                <Help>
                    <HelpButton>Ajuda</HelpButton>
                </Help>

                <Header>
                    <ContentUser>
                        <Img source={avatar} resizeMode='contain' />
                        <User>@moizez</User>
                        <NameUser>Carlos Moisés B. Henrique</NameUser>
                        <Perfil>
                            <Link>{'Ver meu perfil >'}</Link>
                        </Perfil>
                    </ContentUser>
                    <MyAccount>Minha conta</MyAccount>
                </Header>
                
                {items.map((item) => (
                <Info key={item.key}>
                    <Title>{item.title}</Title>
                    <Label>{item.label}</Label>
                </Info>
            ))}
            </Container>
        </Wrapper>
    );
}

export default Setting