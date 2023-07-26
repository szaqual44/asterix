import { Text } from '../common/text/Text';
import * as F from '../common/styles/forms.styles';
import { Typography } from '@mui/material';

export const About = () => {
  return (
    <>
      <F.Bar />
      <F.Section id={'about'}>
        <F.Block>
          <F.Img src={'/assets/img/2.jpg'} />
        </F.Block>
        <F.Block>
          <F.TextContainer>
            <Typography variant={'h1'}>About</Typography>
            <Typography variant={'h3'}>{Text.getText(2)}</Typography>
          </F.TextContainer>
        </F.Block>
      </F.Section>
    </>
  );
};
