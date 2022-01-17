import randomColor from 'randomcolor';
import { useState } from 'react';

export default function AskForInput() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  return (
    <div>
      <label htmlFor="hue">Please enter a color hue: </label>
      <br />
      <input
        type="text"
        id="hue"
        onChange={(event) => setHue(event.target.value)}
      />
      <br />
      <label htmlFor="luminosity">Please enter the desired luminosity: </label>
      <input
        type="text"
        id="luminosity"
        onChange={(event) => setLuminosity(event.target.value)}
      />
      <br />
      <button>Set hue and luminosity</button>
      <div
        style={{
          backgroundColor: randomColor({ hue: hue, luminosity: luminosity }),
        }}
      ></div>
    </div>
  );
}
