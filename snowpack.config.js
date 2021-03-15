module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  plugins: [
    [
      "snowpack-plugin-terser",
      {
        /**
         * @see Plugin Options below
         */
        terserOptions: {
          compress: {
            arguments: true,
            passes: 2,
            unsafe_arrows: true,
          },
        },
      },
    ],
  ],
};
