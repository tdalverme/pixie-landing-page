module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Rubik", "system-ui"],
      serif: ["Rubik", "system-ui"],
      body: ["Karla", "system-ui"],
    },
  },
  plugins: [require("tailwindcss-radix")({ variantPrefix: "rdx" })],
};

