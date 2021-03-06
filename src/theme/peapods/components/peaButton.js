import Color from 'color';

export default ({ palette, spacing, breakpoints }) => {
  const elongatedWidth = 160;
  const defaultFontWeight = 'bold';
  const defaultLetterSpacing = '0.25px';
  const defaultTextTransform = 'none';
  const invertedColor = palette.common.white;
  const borderWidth = 2;
  const iconSelector =
    '.MuiButton-label:not([class*="-icon-isolated"]) > .material-icons, > svg';
  const loaderSelector = '.MuiButton-label .MuiButton-loader';
  const defaultIconSize = 22;
  return {
    MuiButton: {
      root: {
        minHeight: 44,
        color: palette.text.secondary,
        // STANDALONE
        '&.-color-danger': {
          color: palette.error.main,
        },
        '&.-compact': {
          paddingTop: 3,
          paddingBottom: 3,
        },
        '&.-elongated': {
          minWidth: elongatedWidth,
        },
        '&.-inverted': {
          color: invertedColor,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '&.-labelExpanded': {
          '& .MuiButton-text': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '& .MuiButton-label > .material-icons, > svg': {
            // dont change upper code to iconSelector
            // fixed styles
            '&:first-child': {
              marginLeft: -spacing.unit / 2,
            },
            '&:last-child': {
              marginRight: -spacing.unit / 2,
            },
          },
        },
        '&.-mobileFullWidth': {
          [breakpoints.only('xs')]: {
            width: '100%',
          },
        },
        // icon
        [`& ${iconSelector}`]: {
          // default icon size
          fontSize: defaultIconSize,
        },
        '& .MuiButton-label > .material-icons, > svg': {
          // dont change upper code to iconSelector
          // fixed styles
          '&:first-child': {
            marginRight: spacing.unit,
          },
          '&:last-child': {
            marginLeft: spacing.unit,
          },
        },
        // loading
        '&.-loading': {
          pointerEvents: 'none',
          '& .MuiButton-label': {
            color: 'rgba(0,0,0,0)',
            '& .MuiButton-loader': {
              color: palette.text.primary,
            },
          },
        },
        '& .MuiButton-loader': {
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
        // sizes
        '&.-size-small': {
          minHeight: 36,
          padding: '3px 12px',
          fontSize: '0.75rem',
          [`& ${iconSelector}`]: {
            fontSize: '0.75rem',
          },
        },
        '&.-size-big': {
          padding: '8px 24px',
          fontSize: '1rem',
          [`& ${iconSelector}`]: {
            fontSize: '1rem',
          },
        },
        '&.-size-large': {
          padding: '12px 32px',
          fontSize: '1.25rem',
          [`& ${iconSelector}`]: {
            fontSize: '1.25rem',
          },
        },
        '&.-shape-chubby': {
          borderRadius: 100,
          padding: '6px 16px',
        },
        '&.-shape-circular': {
          borderRadius: '50%',
          padding: spacing.unit,
          minWidth: 'auto',
          [`& ${iconSelector}`]: {
            margin: 0,
            fontSize: 20,
          },
        },
        // COMBINATION
        '&.-shape-circular.-size-small': {
          padding: spacing.unit,
          [`& ${iconSelector}`]: {
            fontSize: 16,
          },
        },
        '&.-shape-circular.-size-big': {
          padding: spacing.unit * 1.5,
          [`& ${iconSelector}`]: {
            fontSize: 28,
          },
        },
        '&.-shape-circular.-size-large': {
          padding: spacing.unit * 2,
          [`& ${iconSelector}`]: {
            fontSize: 32,
          },
        },
        '&.-size-big.-compact': {
          paddingTop: 4,
          paddingBottom: 4,
        },
        '&.-size-large.-compact': {
          paddingTop: 6,
          paddingBottom: 6,
        },
        '&$disabled.-inverted': {
          borderColor: 'rgba(255, 255, 255, 0.38)',
          color: 'rgba(255, 255, 255, 0.38)',
        },
        '&.-loading.-inverted': {
          [`& ${loaderSelector}`]: {
            color: invertedColor,
          },
        },
      },
      label: {
        letterSpacing: defaultLetterSpacing,
        textTransform: defaultTextTransform,
        fontWeight: defaultFontWeight,
      },
      contained: {
        '&.-color-danger': {
          backgroundColor: palette.error.main,
          color: invertedColor,
        },
        // No Shadow
        '&$focusVisible.-shadowless': {
          boxShadow: 'none',
        },
        '&.-shadowless': {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        // ---------
        '&.-inverted': {
          transition: 'unset',
          backgroundColor: 'unset',
          color: invertedColor,
          borderWidth,
          borderStyle: 'solid',
          borderColor: invertedColor,
          '&:hover': {
            background: invertedColor,
            color: palette.text.primary,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      containedPrimary: {
        color: invertedColor,
        '&.-inverted': {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          '&:hover': {
            background: palette.primary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      containedSecondary: {
        color: invertedColor,
        '&.-inverted': {
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          '&:hover': {
            background: palette.secondary.main,
            color: palette.common.white,
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.common.white,
        },
      },
      outlined: {
        '&.-inverted': {
          transition: 'unset',
          borderWidth,
          borderColor: 'rgba(255, 255, 255, 0.54)',
          color: 'rgba(255, 255, 255, 0.87)',
          '&:hover': {
            borderColor: invertedColor,
            background: 'rgba(255, 255, 255, 0.24)',
            color: invertedColor,
          },
          '& .MuiButton-label': {
            fontWeight: 'bold',
          },
        },
      },
      outlinedPrimary: {
        color: palette.text.secondary,
        borderWidth: '2px !important',
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.primary.main,
            borderColor: palette.primary.main,
            backgroundColor: Color(palette.primary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.primary.main,
        },
      },
      outlinedSecondary: {
        '&.-inverted': {
          borderWidth,
          '&:hover': {
            color: palette.secondary.main,
            borderColor: palette.secondary.main,
            backgroundColor: Color(palette.secondary.main)
              .alpha(0.1)
              .lighten(0.5)
              .string(),
          },
        },
        [`&.-loading ${loaderSelector}`]: {
          color: palette.secondary.main,
        },
      },
    },
  };
};
