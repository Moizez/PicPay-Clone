import React from 'react';
import Father from 'react-native-vector-icons/Feather'
import FaMaterialCommunityIconsher from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../assets/images/avatar.png'

const Activities = () => {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@jannyfreitas</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Moisés Henrique</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 25,00</Value>
                        <Divider />
                        <Father name='lock' color='#FFF' size={14} />
                        <Date>há 2 meses</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <FaMaterialCommunityIconsher name='comment-outline' color='#FFF' size={14} />
                        </Option>
                        <OptionLabel>0</OptionLabel>

                        <Option>
                            <FaMaterialCommunityIconsher name='heart-outline' color='#FFF' size={14} />
                        </Option>
                        <OptionLabel>0</OptionLabel>
                    </Actions>


                </CardFooter>
            </Card>
        </Container>
    );
}

export default Activities