import * as React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import AddURLForm from "./AddURLForm";

const theme = createTheme();

function TabPanel(props: {
    children: React.ReactNode,
    value: number,
    index: number
}) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="ADD URL" />
                        <Tab label="TOP 20 URLS" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <AddURLForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Container>
        </ThemeProvider>
    );
};

export default Dashboard;