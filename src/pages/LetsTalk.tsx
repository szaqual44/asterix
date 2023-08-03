import * as F from '../common/styles/forms.styles';
import { Typography } from '@mui/material';
import { Colors } from '../common/styles/variables.styles';

export const LetsTalk = () => {
  return (
    <>
      <F.Section dir={'column'} id={'letstalk'}>
        <F.LetsTalkHeader>
          <Typography variant={'h1'} sx={{ color: Colors.white, fontSize: 100 }}>
            LET`S TALK MOBILE APP!{' '}
          </Typography>
        </F.LetsTalkHeader>
        <F.Img src={'/assets/img/2.png'} />
      </F.Section>
    </>
  );
};
