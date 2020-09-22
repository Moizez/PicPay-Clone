import styled from 'styled-components/native'

export const Container = styled.View`
    margin: 10px;
    padding: 16px;
    background: #1e222b;
    flex: 1;
    border-radius: 5px;
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 5px; 
    margin-bottom: 5px; 
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image``;

export const OptionText = styled.View`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top:10px;
    font-size: 16px;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 13px;
`;
