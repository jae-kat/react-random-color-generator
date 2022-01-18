import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

// css-in-js to style the page

const Fragment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Div = styled.div`
  padding: 100px;
  font-size: 3em;
  border-radius: 30px;
  border: 3px solid black;
  margin-top: 5%;
  transition-duration: 1s;
`;
const Button = styled.button`
  border-radius: 20px;
  font-size: 2em;
  border: 3px solid black;
  margin: 2%;
`;
const Container = styled.div`
  border: 3px solid black;
  border-radius: 20px;
  padding: 10px;
`;

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <Fragment>
      <Div // this is the colored div
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        Generated Color: {backgroundColor}
      </Div>
      <Button // the Generate button
        onClick={() =>
          setBackgroundColor(() =>
            randomColor({ hue: hue, luminosity: luminosity }),
          )
        }
      >
        Generate
      </Button>
      {/* ask for user input */}
      <Container>
        <label>
          Hue:{' '}
          <input onChange={(e) => setHue(e.currentTarget.value)} value={hue} />
        </label>
        <br />
        <label>
          Luminosity:{' '}
          <select
            onChange={(e) => setLuminosity(e.currentTarget.value)}
            value={luminosity}
          >
            <option value="null">---</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </Container>
    </Fragment>
  );
}
