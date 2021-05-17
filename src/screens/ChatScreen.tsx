import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Screen, Typography} from '../shared/components';
import MainButton from '../shared/components/MainButton';

const Title = styled.h1``

const ChatScreen: FunctionComponent = () => {
    return (
        <Screen>
            <Title>Chat Screen</Title>
            <MainButton title="Chat" onClick={() => {}}/>
        </Screen>
    )
}

export default ChatScreen;
