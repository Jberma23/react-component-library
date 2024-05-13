import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "~/tailwind.config"
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const fullConfig = resolveConfig(tailwindConfig)

export const theme = fullConfig.theme.colors;
export const flatPalette = flattenColorPalette(theme);

export const colorClasses = Object.keys(flatPalette);