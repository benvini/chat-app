import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {Screen, Typography} from '../shared/components';
import MainButton from '../shared/components/MainButton';

const ChatScreen: FunctionComponent = () => {
    return (
        <Screen>
            <Typography>Chat Screen</Typography>
            <MainButton title="Chat" onClick={() => {}}/>
        </Screen>
    )
}

export default ChatScreen;
