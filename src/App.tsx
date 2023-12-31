import { useState } from 'react';
import './App.css';
import { NCage } from 'ncage-cube';
import { RangeSlider } from './RangeSlider';

function App() {
  const [initialCubeNumber, setInitialCubeNumber] = useState(1);
  const [cubeDelta, setCubeDelta] = useState(0);
  const [initialCubeScale, setInitialCubeScale] = useState(1);
  const [cubeScaleDelta, setCubeScaleDelta] = useState(1);
  const [appearPercentage, setAppearPercentage] = useState(1);
  const [percentageDelta, setPercentageDelta] = useState(1);
  const [startOpacity, setStartOpacity] = useState(0.5);
  const [opacityDelta, setOpacityDelta] = useState(0.01);
  const [startIntervalMs, setStartIntervalMs] = useState(200);
  const [intervalDeltaMs, setIntervalDeltaMs] = useState(100);
  const [alwaysVisible, setAlwaysVisible] = useState(true);

  return (
    <>
      <div>
        <b>Meet the NCage Cube!</b>
        <p style={{ display: 'flex' }}>
          The idea behind the cube, is to slip it into someones codebase without
          them seeing. Then as they are developing it gradually starts to appear
          more and more. Or just use it as art, it's up to you.
        </p>
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
          min={0.95}
          max={1.05}
          step={0.001}
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
          min={0}
          max={1}
          step={0.01}
          value={startOpacity}
          setValue={setStartOpacity}
        />
        <RangeSlider
          name="opacityDelta"
          min={0}
          max={1}
          step={0.001}
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
        <p>Changing the settings will restart the cube's lifecylce</p>
        <br />

        <div style={{ display: 'flex', justifyItems: 'center' }}>
          <code
            id="copyCode"
            style={{
              textAlign: 'left',
              display: 'flex',
              margin: 'auto',
              fontSize: '1rem',
            }}
          >
            &lt;NCage
            <br />
            &nbsp; initialCubeNumber=&#123;{initialCubeNumber}&#125;
            <br />
            &nbsp; cubeDelta=&#123;{cubeDelta}&#125;
            <br />
            &nbsp; initialCubeScale=&#123;{initialCubeScale}&#125;
            <br />
            &nbsp; cubeScaleDelta=&#123;{cubeScaleDelta}&#125;
            <br />
            &nbsp; appearPercentage=&#123;{appearPercentage}&#125;
            <br />
            &nbsp; percentageDelta=&#123;{percentageDelta}&#125;
            <br />
            &nbsp; startOpacity=&#123;{startOpacity}&#125;
            <br />
            &nbsp; opacityDelta=&#123;{opacityDelta}&#125;
            <br />
            &nbsp; startIntervalMs=&#123;{startIntervalMs}&#125;
            <br />
            &nbsp; intervalDeltaMs=&#123;{intervalDeltaMs}&#125;
            <br /> &nbsp; alwaysVisible=&#123;{alwaysVisible.toString()}&#125;
            <br /> /&gt;
          </code>
        </div>

        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => {
            const copyText = document.getElementById('copyCode');
            const value = copyText?.textContent || '';
            await navigator.clipboard.writeText(value);
          }}
          style={{ border: '1px solid black' }}
        >
          Copy to clipboard
        </button>
        <br />
        <a href="https://www.npmjs.com/package/ncage-cube">
          https://www.npmjs.com/package/ncage-cube
        </a>
      </div>
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
