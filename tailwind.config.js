import {nextui} from '@nextui-org/react';
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'


    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                black: '#000000',
                blue: {
                    
                },
                // .. rest of the colors
            },
        }
    },
    darkMode: 'class',
    plugins: [
        nextui({
            prefix: 'nextui', // prefix for themes variables
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: 'light', // default theme from the themes object
            defaultExtendTheme: 'light', // default theme to extend on custom themes
            layout: {
                spacingUnit: 4, // in px
                disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
                dividerWeight: '1px', // h-divider the default height applied to the divider component
                fontSize: {
                    tiny: '0.75rem', // text-tiny
                    small: '0.875rem', // text-small
                    medium: '1rem', // text-medium
                    large: '1.125rem', // text-large
                },
                lineHeight: {
                    tiny: '1rem', // text-tiny
                    small: '1.25rem', // text-small
                    medium: '1.5rem', // text-medium
                    large: '1.75rem', // text-large
                },
                radius: {
                    small: '2px', // rounded-small
                    medium: '4px', // rounded-medium
                    large: '6px', // rounded-large
          
                },
                borderWidth: {
                    small: '1px', // border-small
                    medium: '1px', // border-medium
                    large: '2px', // border-large
                },
            },
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {}, // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {}, // dark theme colors
                },
                // ... custom themes
            },
        }),
    ],
};

