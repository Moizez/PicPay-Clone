import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Switch } from 'react-native'

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel,
} from './styles';

import creditCard from '../../assets/images/credit-card.png'

const Wallet = () => {

    const [isVisible, setIsVisible] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false)

    const handleToggleVisible = () => setIsVisible((prevState) => !prevState)
    const handleToggleSwitch = () => setIsEnabled((prevState) => !prevState)

    return (
        <Wrapper>
            <Header colors={isEnabled ? ['#00fc6c', '#00ac4a'] : ['#d3d3d3', '#868686']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '550,00' : '-----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisible}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color='#FFF' />
                        </EyeButton>

                    </BalanceContainer>

                    <Info>Seu saldo está rendendo 100% do CDI</Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name='cash-usd-outline' size={25} color='#FFF' />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <MaterialCommunityIcons name='bank-outline' size={25} color='#FFF' />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>

                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch
                    value={isEnabled}
                    thumbColor={isEnabled ? "#00fc6c" : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: "#b7e4c7" }}
                    onValueChange={handleToggleSwitch}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                            <CardInfo>Cadastre seu cartão de crédito para realizar pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
                        </CardDetails>
                        <Img source={creditCard} resizeMode='contain' />
                    </CardBody>
                    <AddButton>
                        <MaterialCommunityIcons name='plus-circle-outline' size={30} color='#0db060' />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name='ticket-percent-outline' size={25} color='#0db060' />
                        <UseTicketLabel>Usar código promocional</UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>

            </PaymentMethods>

        </Wrapper>
    );
}

export default Wallet