
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #E26241;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;
    position: absolute;
    bottom: 50px;
`;