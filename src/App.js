import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  margin: 200px;
`;
const Div = styled.div`
  padding: 100px;
  font-size: 3em;
  border-radius: 30px;
`;
const Button = styled.button`
  border-radius: 20px;
  margin-top: 50px;
  font-size: 2em;
  border: 3px solid black;
`;

export default function App() {
  const [color, setColor] = useState('C99D0A');

  return (
    <Container>
      <Div
        style={{
          backgroundColor: '#' + color,
        }}
      >
        Generated Color: #{color}
      </Div>
      <Button
        onClick={() =>
          setColor(Math.floor(Math.random() * 16777215).toString(16))
        }
      >
        Generate
      </Button>
    </Container>
  );
}
