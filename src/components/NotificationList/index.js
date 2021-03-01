import React from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'

import { Container, Card, DescriptionCard, DateCard } from './styles'

const NotificationList = ({ data }) => {

    let date = moment(data.date).locale('pt-br').format('ll [às] LT')

    return (
        <Container>
            <Card>
                <DescriptionCard>{data.description}{data.icon1}{data.icon2}{data.icon3}</DescriptionCard>
                <DateCard>{date}</DateCard>
                
            </Card>
        </Container>
    );
}

export default NotificationList