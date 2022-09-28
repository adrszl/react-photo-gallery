import React from 'react';
import {AppBar, Toolbar, Typography, Container, Fab} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './utils/ScrollTop';
import './App.css';

function App() {
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
        <div style={{height: "2000px", backgroundColor: "green"}}></div>
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
