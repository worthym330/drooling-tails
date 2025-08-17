// PostCSS configuration for CRA + Tailwind.
// Using array syntax to ensure plugins are loaded as functions (avoids rare mis-parsing scenarios).
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
