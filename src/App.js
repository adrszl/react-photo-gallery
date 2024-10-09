import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Fab,
  Grid,
  Paper,
  Select,
  MenuItem,
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './utils/ScrollTop';
import './App.css';

function App() {
  const [gridStyle, setGridStyle] = useState('standard');

  const handleGridStyleChange = (event) => {
    setGridStyle(event.target.value);
  }

  return (
    <React.Fragment>
      <AppBar className="main-header">
        <Toolbar>
          <Typography variant="h6" component="div">
            React Photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        {/* main content here */}
        <h4>Title</h4>
        <p>TBD:</p>
        <ul>
          <li>choose light or dark theme</li>
        </ul>
        <Select
          labelId="choose-grid-style"
          id="choose-grid-style"
          value={gridStyle}
          label="Grid style"
          onChange={handleGridStyleChange}
        >
          <MenuItem value={'standard'}>Standard</MenuItem>
          <MenuItem value={'masonry'}>Masonry</MenuItem>
        </Select>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <ImageList>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">Gallery</ListSubheader>
            </ImageListItem>
            <ImageListItem key={'item.img'}>
              <Grid item>
                <Paper>
                  <div style={{height: "200px", width: "200px", backgroundColor: "green"}}></div>
                  <ImageListItemBar
                    title={'item.title'}
                    subtitle={'item.author'}
                    actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about (...)`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </Paper>
              </Grid>
            </ImageListItem>
            <ImageListItem key={'item.img'}>
              <Grid item>
                <Paper>
                  <div style={{height: "200px", width: "200px", backgroundColor: "green"}}></div>
                  <ImageListItemBar
                    title={'item.title'}
                    subtitle={'item.author'}
                    actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about (...)`}
                    >
                      <InfoIcon />
                    </IconButton>
                      }
                    />
                </Paper>
              </Grid>
            </ImageListItem>
            <ImageListItem key={'item.img'}>
              <Grid item>
                <Paper>
                  <div style={{height: "200px", width: "200px", backgroundColor: "green"}}></div>
                  <ImageListItemBar
                    title={'item.title'}
                    subtitle={'item.author'}
                    actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about (...)`}
                    >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                </Paper>
              </Grid>
            </ImageListItem>
          </ImageList>
        </Grid>
        {/* main content here */}
      </Container>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
