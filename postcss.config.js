import postcssPresetEnv from 'postcss-preset-env';
import cssNano from 'cssnano';

export default {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
      browsers: 'last 2 versions',
      autoprefixer: {
        grid: true,
      },
    }),
    cssNano({
      preset: 'default',
    }),
  ],
};