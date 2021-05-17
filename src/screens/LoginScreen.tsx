import React, {FunctionComponent, useCallback} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import {Screen, Typography} from '../shared/components';
import Input from '../shared/components/Input';
import MainButton from '../shared/components/MainButton';

const Title = styled.h1`
`

const LoginScreen: FunctionComponent = () => {
    const history = useHistory();
    const onLogin = useCallback(() => history.push('/chat'), [history]);

    return (
        <Screen>
            <Title>Login Screen</Title>
            <Input/>
            <MainButton title="Login" onClick={onLogin}/>
        </Screen>
    )
}

export default LoginScreen;
