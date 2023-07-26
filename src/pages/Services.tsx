import { Grid, Typography } from '@mui/material';
import * as F from '../common/styles/forms.styles';

//https://icons8.com/

export const Services = () => {
  const puzzle = [
    {
      title: 'Global',
      text: 'Reach users in 85+ countries on all continents',
      icon: '/services/global.png',
    },
    {
      title: 'KPI-focused',
      text: 'Pay only for the achieved action, install or other performance',
      icon: '/services/house.png',
    },
    {
      title: 'Mobile',
      text: 'We specialize on mobile apps promotion',
      icon: '/services/mobile.png',
    },
    {
      title: 'Risk-safe',
      text: 'Our qualified and tech-savvy team acquire high quality traffic and prevent fraud',
      icon: '/services/mail.png',
    },
  ];

  return (
    <>
      <F.Section direction={'column'} id={'services'}>
        <F.ServicesBlock>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Typography variant={'h1'}>Services</Typography>
          </div>
        </F.ServicesBlock>

        <Grid container spacing={5}>
          {puzzle.map((p) => (
            <Grid item xs={6} key={p.icon}>
              <F.ElementContainer>
                <F.Svg src={p.icon} />
                <F.PuzzelContainer>
                  <Typography variant={'h2'}>{p.title}</Typography>
                  <Typography sx={{ my: 2 }} variant={'h3'}>
                    {p.text}
                  </Typography>
                </F.PuzzelContainer>
              </F.ElementContainer>
            </Grid>
          ))}
        </Grid>
      </F.Section>
    </>
  );
};
