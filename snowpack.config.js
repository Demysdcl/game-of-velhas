module.exports = {
  mount: {
    src: "/dist",
    public: "/src",
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
