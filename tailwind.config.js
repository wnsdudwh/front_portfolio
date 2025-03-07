const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // 다크 모드 설정
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content()  // flowbite의 콘텐츠 경로 추가
  ],
  theme: {
    extend: {
      animation: {
        'cursor': 'cursor 1s step-end infinite'
      },
      keyframes: {
        cursor: {
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        }
      },
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        }
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        body: [
          'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
          'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue',
          'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ],
        sans: [
          'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
          'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue',
          'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ]
      }
    }
  },
  plugins: [
    flowbite.plugin(),  // flowbite 플러그인 추가
    // 필요하면 다른 플러그인도 추가하세요
  ],
};
