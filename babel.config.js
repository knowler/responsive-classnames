module.exports = ({env}) => {
  return env('test')
    ? {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      }
    : {};
};
