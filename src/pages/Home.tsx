import { Typography } from '@mui/material';
import * as F from '../common/styles/forms.styles';
import { Text } from '../common/text/Text';

export const Home = () => {
  return (
    <>
      <F.Section id={'home'}>
        <F.FirstBlock>
          <div style={{ width: '60%', textAlign: 'center' }}>
            <Typography variant={'h2'}>{Text.getText(1)}</Typography>
          </div>
        </F.FirstBlock>
        <F.Block>
          <F.Img src={'/assets/img/1.jpg'} />
        </F.Block>
      </F.Section>
    </>
  );
};
