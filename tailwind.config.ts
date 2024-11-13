import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Calibre", ...defaultTheme.fontFamily.sans]
  		},
  		gridTemplateColumns: {
  			'auto-1fr': 'auto 1fr',
  			'1fr-auto': '1fr auto',
  			'auto-fit-skills': 'repeat(auto-fit, minmax(100px, 1fr))'
  		},
  		colors: {
  			neutral: {
  				'50': '#FFFFFF',
  				'100': '#FDFEFF',
  				'500': '#2C2C2C',
  				'600': '#1B1F23',
  				'700': '#1E1E1E',
  				'800': '#1A1A1A',
  				'900': '#121415'
  			},
  			blue: {
  				'50': 'hsla(199, 58%, 66%, 0.1)',
  				'100': '#B8D9FB',
  				'200': '#77BBDB',
  				'400': '#44A2D2',
  				'500': '#0096FF',
  				'600': '#102351'
  			},
  			navy: {
  				'500': '#112240',
  				'700': '#0B193C',
  				'800': '#020C1B'
  			},
  			slate: {
  				'50': '#CCD6FC',
  				'100': '#8892B0',
  				'300': '#688EA1',
  				'500': '#3B6D86'
  			},
  			green: {
  				'100': '#64FFDA',
  				'200': '#57CBFF'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
