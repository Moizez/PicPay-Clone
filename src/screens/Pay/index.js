import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Wrapper, Container, Header, TabOption, TabTitle, Line, TabButton, TitleService } from './styles'

import Services from '../../components/Services'

const Pay = () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e' />
                </Header>

                <TabOption>
                    <TabButton>
                        <TabTitle>Principais</TabTitle>
                    </TabButton>

                    <TabButton>
                        <TabTitle>Locais</TabTitle>
                    </TabButton>

                    <TabButton>
                        <TabTitle>Store</TabTitle>
                    </TabButton>
                </TabOption>
                <Line></Line>

                <TitleService>Serviços</TitleService>
                <Services />

            </Container>

        </Wrapper>
    );
}

export default Pay