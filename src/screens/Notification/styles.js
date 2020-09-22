import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    background-color: #000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 18px;
    text-align: center;
`;

export const Configuration = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 14px;
`;

export const FlatList = styled.FlatList`
    color: #fff;
    text-align: center;
    font-size: 14px;
`;