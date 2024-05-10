import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CloudDownloadOutlined, DeleteOutline } from '@mui/icons-material';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
   
  </React.Fragment>
);

export default function CardComponent({ content, handleDeleteModal }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant='caption' sx={{ fontSize: 14, lineHeight:1, textAlign:'left' }}>
            Download data  <CloudDownloadOutlined sx={{ fontSize: 18, verticalAlign:'center' }}  />
          </Typography>
        </Grid>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontSize: 16, lineHeight:1 }}>
            87 <DeleteOutline sx={{ fontSize: 18, verticalAlign:'bottom' }} onClick={ ()=> handleDeleteModal(content.id) }  />
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Typography variant="h5" component="div" sx={{ mt:2, textAlign:'left' }}>
          {content.name}
        </Typography>
        <Typography variant="body2" sx={{ mt:2, textAlign:'left' }}>
          {content.description}
        </Typography>
      </Grid>
    </CardContent>
      </Card>
    </Box>
  );
}