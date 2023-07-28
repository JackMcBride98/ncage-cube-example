import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { NCage } from 'ncage-cube';
import { RangeSlider } from './RangeSlider';

function App() {
  const [count, setCount] = useState(0);
  const [initialCubeNumber, setInitialCubeNumber] = useState(1);
  const [cubeDelta, setCubeDelta] = useState(0);
  const [initialCubeScale, setInitialCubeScale] = useState(1);
  const [cubeScaleDelta, setCubeScaleDelta] = useState(1);
  const [appearPercentage, setAppearPercentage] = useState(1);
  const [percentageDelta, setPercentageDelta] = useState(1);
  const [startOpacity, setStartOpacity] = useState(0.5);
  const [opacityDelta, setOpacityDelta] = useState(0.01);
  const [startIntervalMs, setStartIntervalMs] = useState(1);
  const [intervalDeltaMs, setIntervalDeltaMs] = useState(1);
  const [alwaysVisible, setAlwaysVisible] = useState(true);

  console.log('render', cubeDelta);

  return (
    <>
      <div>
        <RangeSlider
          name="initialCubeNumber"
          min={1}
          max={20}
          value={initialCubeNumber}
          setValue={setInitialCubeNumber}
        />
        <RangeSlider
          name="cubeDelta"
          min={0}
          max={10}
          value={cubeDelta}
          setValue={setCubeDelta}
        />
        <RangeSlider
          name="initialCubeScale"
          min={0.01}
          max={5}
          step={0.01}
          value={initialCubeScale}
          setValue={setInitialCubeScale}
        />
        <RangeSlider
          name="cubeScaleDelta"
          min={1}
          max={10}
          value={cubeScaleDelta}
          setValue={setCubeScaleDelta}
        />
        <RangeSlider
          name="appearPercentage"
          min={1}
          max={100}
          value={appearPercentage}
          setValue={setAppearPercentage}
        />
        <RangeSlider
          name="percentageDelta"
          min={1}
          max={100}
          value={percentageDelta}
          setValue={setPercentageDelta}
        />
        <RangeSlider
          name="startOpacity"
          min={1}
          max={100}
          value={startOpacity}
          setValue={setStartOpacity}
        />
        <RangeSlider
          name="opacityDelta"
          min={1}
          max={100}
          value={opacityDelta}
          setValue={setOpacityDelta}
        />
        <RangeSlider
          name="startIntervalMs"
          min={1}
          max={1000}
          value={startIntervalMs}
          setValue={setStartIntervalMs}
        />
        <RangeSlider
          name="intervalDeltaMs"
          min={1}
          max={1000}
          value={intervalDeltaMs}
          setValue={setIntervalDeltaMs}
        />
        <div style={{ marginBottom: '3rem' }}>
          <label htmlFor="alwaysVisible">alwaysVisible</label>
          <input
            type="checkbox"
            id="alwaysVisible"
            name="alwaysVisible"
            checked={alwaysVisible}
            onChange={(e) => setAlwaysVisible(e.target.checked)}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          />
        </div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <NCage
        initialCubeNumber={initialCubeNumber}
        cubeDelta={cubeDelta}
        initialCubeScale={initialCubeScale}
        cubeScaleDelta={cubeScaleDelta}
        appearPercentage={appearPercentage}
        percentageDelta={percentageDelta}
        startOpacity={startOpacity}
        opacityDelta={opacityDelta}
        startIntervalMs={startIntervalMs}
        intervalDeltaMs={intervalDeltaMs}
        alwaysVisible={alwaysVisible}
        key={`${initialCubeNumber}-${cubeDelta}-${initialCubeScale}-${cubeScaleDelta}-${appearPercentage}-${percentageDelta}-${startOpacity}-${opacityDelta}-${startIntervalMs}-${intervalDeltaMs}-${alwaysVisible.toString()}`}
      />
    </>
  );
}

export default App;
