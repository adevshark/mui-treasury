/* eslint-disable max-len */
import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      '&.MuiButton--shinning': {
        position: 'relative',
        paddingLeft: 16,
        paddingRight: 16,
        background:
          'linear-gradient(to right, #aea0d5, #eaafc8)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        boxShadow: '0 0 20px 0 #f5005780',
        animation: 'mui-ripple-pulsate 1s infinite',
      },
    },
    label: {
      color: muiBaseTheme.palette.common.white,
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
    },
    contained: {
      minHeight: 30,
      boxShadow: muiBaseTheme.shadows[0],
      '&$focusVisible': { boxShadow: muiBaseTheme.shadows[0] },
      '&:active': { boxShadow: muiBaseTheme.shadows[0] },
      '&$disabled': { boxShadow: muiBaseTheme.shadows[0] },
    },
  },
});

const ShinningButton = () => (
  <Button className={'MuiButton--shinning'}>Sunshine</Button>
);

ShinningButton.getTheme = getTheme;
ShinningButton.metadata = {
  name: 'Shinning',
  description: 'I love to be shinned',
};
ShinningButton.codeSandbox = 'https://codesandbox.io/s/ko3w0m4qw5';

export default ShinningButton;
