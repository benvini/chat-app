import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Screen, Typography} from '../shared/components';
import Input from '../shared/components/Input';
import MainButton from '../shared/components/MainButton';

const LoginScreen: FunctionComponent = () => {
    return (
        <Screen>
            <Typography>Login Screen</Typography>
            <Input/>
            <MainButton title="Login" onClick={() => {}}/>
        </Screen>
    )
}

export default LoginScreen;