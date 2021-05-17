import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from './Typography';
import COLOR from '../../styles/Color';

const Container = styled.div`
    margin: 8px;
`

const StyledButton = styled.button`
    font-weight: bold;
    background-color: ${COLOR.PRIMARY};
    padding: 10px;
    align-items: center;
    width: 120px;
    border-radius: 4px;
    cursor: pointer;
`
type Props = {
    onClick: () => void,
    disabled: boolean,
    title: string,
    style: object
};

const MainButton = ({onClick, disabled = false, title, style}: Props) => {
    const opacity = disabled ? 0.5 : 1;

    return (
        <Container style={{opacity}}>
            <StyledButton onClick={onClick} disabled={disabled} style={{...style}}>
                <Typography>{title}</Typography>
            </StyledButton>
        </Container>
    );
};

MainButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    style: PropTypes.object
};

MainButton.defaultProps = {
    onClick: () => {},
    disabled: false,
    title: '',
    style: {}
};

export default MainButton;
