const defaultTheme = require('tailwindcss/defaultTheme');
const {
  colors,
  screens
} = defaultTheme;
const forms = require('@tailwindcss/custom-forms');
const typography = require('./tailwind-local-typography');

module.exports = {
  // purge: [
  //   './templates/**/*.html',
  //   './templates/**/*.html.twig',
  // ],
  purge: false,
  theme: {
    colors: {
      ...colors,
      gray: {
        '100': '#FBFCFD',
        '200': '#F5F8F9',
        '300': '#EFF3F6',
        '400': '#E3EAEF',
        '500': '#D7E1E8',
        '600': '#C2CBD1',
        '700': '#81878B',
        '800': '#616568',
        '900': '#414446',
      },
      red: {
        '100': '#FCECE9',
        '200': '#F8CFC7',
        '300': '#F4B2A5',
        '400': '#EB7962',
        '500': '#E33F1E',
        '600': '#CC391B',
        '700': '#882612',
        '800': '#661C0E',
        '900': '#441309',
      },
      yellow: {
        '100': '#FFFAEC',
        '200': '#FFF2CF',
        '300': '#FEEAB3',
        '400': '#FEDA79',
        '500': '#FDCA40',
        '600': '#E4B63A',
        '700': '#987926',
        '800': '#725B1D',
        '900': '#4C3D13',
      },
      green: {
        '100': '#ECF6E8',
        '200': '#CFE8C6',
        '300': '#B2DAA4',
        '400': '#79BE60',
        '500': '#3FA21C',
        '600': '#399219',
        '700': '#266111',
        '800': '#1C490D',
        '900': '#133108',
      },
      blue: {
        '100': '#EEF7FD',
        '200': '#D4EBFA',
        '300': '#BADFF7',
        '400': '#87C8F1',
        '500': '#006AA9', // dark drupal blue
        '600': '#4B9ED4',
        '700': '#326A8D',
        '800': '#254F6A',
        '900': '#193547',
      },
    },
    screens: {
      ...screens,
      '2xl': '1600px'
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Noto Sans", "sans-serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.none'),
        },
      },
    }),
    extend: {
      fontSize: {
        hero: '8rem',
      },
      textStyles: theme => ({
        heading: {
          output: false,
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          fontFamily: theme('fontFamily.sans'),
        },
        h1: {
          extends: 'heading',
          fontWeight: theme('fontWeight.black'),
          fontSize: theme('fontSize.4xl'),
          '@screen md': {
            fontSize: theme('fontSize.5xl'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.6xl'),
          },
        },
        h2: {
          extends: 'heading',
          fontWeight: theme('fontWeight.black'),
          fontSize: theme('fontSize.2xl'),
          '@screen md': {
            fontSize: theme('fontSize.3xl'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.4xl'),
          },
        },
        h3: {
          extends: 'heading',
          fontSize: theme('fontSize.lg'),
          '@screen md': {
            fontSize: theme('fontSize.xl'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.2xl'),
          },
        },
        h4: {
          extends: 'heading',
          textTransform: 'uppercase',
          fontSize: theme('fontSize.lg'),
          '@screen md': {
            fontSize: theme('fontSize.lg'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.xl'),
          },
        },
        h5: {
          extends: 'heading',
          textTransform: 'uppercase',
          fontSize: theme('fontSize.lg'),
          '@screen md': {
            fontSize: theme('fontSize.lg'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.xl'),
          },
        },
        h6: {
          extends: 'heading',
          textTransform: 'uppercase',
          fontSize: theme('fontSize.lg'),
          '@screen md': {
            fontSize: theme('fontSize.lg'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.xl'),
          },
        },
        p: {
          fontFamily: theme('fontFamily.serif'),
        },
      }),
      minWidth: {
        "9": "9.35rem",
        "16": "16rem",
        "24": "24rem",
        "32": "32rem",
        "38": "38rem"
      },
      maxWidth: {
        "7xl": "90rem"
      },
      maxHeight: {
        "75": "18.75rem"
      },
      padding: {
        // 74rem = 90rem (7xl) - 16rem (px-32)
        "center-two-columns": "calc(calc(100vw - 74rem) / 2)"
      },
      height: theme => ({
        "screen/1": "75vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "rectangular/0.5": "192px",
        "rectangular/1": "384px",
        "rectangular/2": "768px",
        "rectangular/3": "1152px",
        "12": "12rem",
        "18": "18rem",
        "21": "21rem",
        "28": "28rem",
        "36": "36rem",
      }),
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
        "7": "1.75rem",
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "30": "7.5rem",
        "45": "11.25rem",
        "74": "18.5rem",
        "88": "22rem"
      },
      inset: {
        init: "initial"
      },
      letterSpacing: {
        "wide-light": "0.01em"
      },
      textShadow: {
        default: "0 2px 0 #000",
        md: "0 2px 2px #000",
        h1: "0 0 3px #FF0000, 0 0 5px #0000FF",
        xl: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
        none: "none"
      }
    }
  },
  variants: {
    // https://tailwindcss.com/docs/pseudo-class-variants/#default-variants-reference
    // https://tailwindcss.com/docs/configuring-variants/
    // Possible values:
    //   'responsive',
    //   'group-hover',
    //   'focus-within',
    //   'first',
    //   'last',
    //   'odd',
    //   'even',
    //   'hover',
    //   'focus',
    //   'active',
    //   'visited',
    //   'disabled',
    width: ["responsive"],
    height: ["responsive"],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    typography: ["responsive", "hover"],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
    wordBreak: ['responsive', 'hover', 'focus'],
    whitespace: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    typography,
    forms,
  ],
};
