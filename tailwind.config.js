/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppings: ["Poppins", "sans-serif"]
            },
            colors: {
                c_Purple: "hsl(259, 100%, 65%)",
                c_Light_red: "hsl(0, 100%, 67%)",
                c_Off_white: "hsl(0, 0%, 94%)",
                c_Light_grey: "hsl(0, 0%, 86%)",
                c_Smokey_grey: "hsl(0, 1%, 44%)",
                c_Off_black: "hsl(0, 0%, 8%)",
            }
        },
    },
    plugins: [],
}

