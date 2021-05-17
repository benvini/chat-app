import styled from 'styled-components';
import COLOR from '../../styles/Color';

type Props = {
    style?: object;
};

const Container = styled.div`
    align-items: center;
`

const StyledInput = styled.input`
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  border: none;
  background: ${COLOR.SECONDARY};
  border-radius: 5px;
  &:hover {
    background: ${COLOR.WARNING};
  }
`;

const Input = ({style}: Props) => {
    return (
        <Container>
            <StyledInput style={{...style}}/>
        </Container>
    );
};

export default Input;
