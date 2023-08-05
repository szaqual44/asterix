import * as F from '../common/styles/forms.styles';
import { Typography } from '@mui/material';

export const About = () => {
  return (
    <F.AboutStyling>
      <F.Section id={'about'}>
        <F.Block>
          <F.TextContainer>
            <Typography variant={'h1'}>About</Typography>

          </F.TextContainer>
        </F.Block>
        <F.Block>
          <F.Img src={'/assets/img/2.jpg'} />
        </F.Block>
      </F.Section>
    </F.AboutStyling>
  );
};
