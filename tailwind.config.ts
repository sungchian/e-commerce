// import type { Config } from "tailwindcss";

// export default {
// 	darkMode: ["class"],
// 	content: [
// 		"./src/**/*.{vue,js,ts,jsx,tsx}",
// 		"./index.html"
// 	  ],
// 	prefix: "",
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		extend: {
// 			keyframes: {
// 				'accordion-down': {
// 					from: {
// 						height: '0'
// 					},
// 					to: {
// 						height: 'var(--radix-accordion-content-height)'
// 					}
// 				},
// 				'accordion-up': {
// 					from: {
// 						height: 'var(--radix-accordion-content-height)'
// 					},
// 					to: {
// 						height: '0'
// 					}
// 				},
// 				'fade-in': {
// 					'0%': {
// 						opacity: '0',
// 						transform: 'translateY(10px)'
// 					},
// 					'100%': {
// 						opacity: '1',
// 						transform: 'translateY(0)'
// 					}
// 				},
// 				'scale-in': {
// 					'0%': {
// 						transform: 'scale(0.95)',
// 						opacity: '0'
// 					},
// 					'100%': {
// 						transform: 'scale(1)',
// 						opacity: '1'
// 					}
// 				},
// 				'float': {
// 					'0%, 100%': {
// 						transform: 'translateY(0px)'
// 					},
// 					'50%': {
// 						transform: 'translateY(-10px)'
// 					}
// 				}
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out',
// 				'fade-in': 'fade-in 0.5s ease-out',
// 				'scale-in': 'scale-in 0.3s ease-out',
// 				'float': 'float 3s ease-in-out infinite'
// 			},
// 			fontFamily: {
// 				sans: ['Inter', 'system-ui', 'sans-serif'],
// 				heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
// 			}
// 		}
// 	},
// 	plugins: [require("tailwindcss-animate")],
// } satisfies Config;
// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"; // 確保您已安裝 tailwindcss-animate

export default {
    darkMode: ["class"],
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./index.html"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: { // <-- 新增的 colors 區塊
                border: "hsl(var(--border))", // <-- 必須有這行，用於生成 border-border
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
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
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-in': {
                    '0%': {
                        transform: 'scale(0.95)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'float': 'float 3s ease-in-out infinite'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
            },
            // 在這裡添加您自定義的陰影
            boxShadow: {
              'soft': '0 4px 10px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)',
              'hover': '0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)',
              'orange': '0 4px 6px -1px rgba(255, 165, 0, 0.1), 0 2px 4px -1px rgba(255, 165, 0, 0.06)',
              'orange-lg': '0 10px 15px -3px rgba(255, 165, 0, 0.1), 0 4px 6px -2px rgba(255, 165, 0, 0.05)',
            },
        }
    },
    plugins: [animate],
} satisfies Config;