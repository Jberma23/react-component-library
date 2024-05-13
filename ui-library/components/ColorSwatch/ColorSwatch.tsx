import { colorClasses } from "@ui-library/design-tokens/color-palette";
export type ColorSwatchProps = {
  children: React.ReactNode;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ children }) => {
  return  ( <div className="flex flex-wrap gap-m">
  <div className="flex flex-wrap flex-row gap-xs">
    {colorClasses.map((suffix) => (
      <div key={suffix} className="flex flex-col gap-xs">
        <div className={`bg-${suffix} text-${suffix}`}>{suffix}</div>
      </div>
    ))}
  </div>
</div>);
}
