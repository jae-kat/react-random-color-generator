import { useState } from 'react';

export default function AskForInput() {
  const [hue, setHue] = useState('');

  return (
    <div>
      <label htmlFor="hue">Please enter a color hue: </label>
      <br />
      <input type="text" id="hue" value={hue} />
      <br />
      <button onClick={() => setHue(hue)} onClick={() => randomized(hue, 0.4)}>
        Generate a color based on my hue!
      </button>
    </div>
  );
}
