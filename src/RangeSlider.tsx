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
  <div>
    <label htmlFor={name}>{name}</label>
    {min}
    <div>
      <input
        type="range"
        id={name}
        name={name}
        min={min.toString()}
        max={max.toString()}
        value={value}
        onChange={(e) => setValue(Math.round(parseInt(e.target.value)))}
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
        step={step?.toString() || '1'}
      />
    </div>
    {max}
  </div>
);
