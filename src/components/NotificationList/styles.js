import styled from 'styled-components/native'

export const Container = styled.View`
    margin: 5px;
    padding: 16px;
    background: #1e222b;
    flex: 1;
    border-radius: 5px;
`;

export const Card = styled.TouchableOpacity`
    justify-content: center;
    height: 75px;
`;

export const DateCard = styled.Text`
    color: #fff;
    margin-top:10px;
    font-size: 13px;
`;

export const DescriptionCard = styled.Text`
    color: #fff;
    font-size: 15px;
`;

export const DescriptionBox = styled.View`
    flex-direction: row;
`;
