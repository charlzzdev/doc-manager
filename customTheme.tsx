import { theme } from '@chakra-ui/core';

export const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    bold: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" > <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"> </path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path > </svg>
    },
    italic: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" > <path d="M19 4h-9M14 20H5M14.7 4.7L9.2 19.4" /></svg >
    },
    underline: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" > <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"> </path><line x1="4" y1="21" x2="20" y2="21"></line > </svg>
    },
    link: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    },
    leftAlign: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3" /></svg>
    },
    rightAlign: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7" /></svg>
    },
    centerAlign: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9.5H5M21 4.5H3M21 14.5H3M19 19.5H5" /></svg>
    },
    justifyAlign: {
      path: <svg fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" /></svg>
    },
  }
}
