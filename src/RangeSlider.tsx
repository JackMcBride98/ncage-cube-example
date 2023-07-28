export type RangeSliderProps = {
  name: string;
  min: number;
  max: number;
  value: number;
  setValue: (value: number) => void;
  step?: number;
};

export const RangeSlider = ({
  name,
  min,
  max,
  value,
  setValue,
  step,
}: RangeSliderProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'end',
      margin: '0.5rem 0',
      padding: '0.25rem',
      border: '1px solid black',
      borderRadius: '0.25rem',
    }}
  >
    <label style={{ marginRight: '1rem' }} htmlFor={name}>
      {name}
    </label>{' '}
    {min}{' '}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {value}
      <input
        type="range"
        id={name}
        name={name}
        min={min.toString()}
        max={max.toString()}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: '0 1rem',
        }}
        step={step?.toString() || '1'}
      />
    </div>
    {max}
  </div>
);
