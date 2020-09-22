import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    background-color: #000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    justify-content: center;
`;

export const TabOption = styled.View`
    height: 60px;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const TabTitle = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const TabButton = styled.TouchableWithoutFeedback`

`;

export const Line = styled.View`
height: 3px;
width: 38%;
background-color: #0db060;
`;

export const TitleService = styled.Text`
    margin-top: 10px;
    padding: 0 16px;
    font-size: 18px;
    color: #FFF;
`;



