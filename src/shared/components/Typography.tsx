import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {
    style?: object,
    children: React.ReactNode
}

const Container = styled.div``
const StyledText = styled.label`
    font-size: 20px;
    color: black;
`

const Typography: FunctionComponent<Props> = ({ style, children }: Props) => {
    return (
        <Container>
            <StyledText style={{...style}}>
                {children}
            </StyledText>
        </Container>
    )
}

export default Typography;
