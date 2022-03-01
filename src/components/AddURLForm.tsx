import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const theme = createTheme();

const AddURLForm = () => {
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <Box component="form" noValidate sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">
                    Enter the URL to short
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="url"
                    name="url"
                    autoComplete="url"
                    type="text"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Short URL
                </Button>
            </Box>
            <Box>
                <Alert severity="error">The URL Format is invalid</Alert>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button variant="outlined">Copy URL: </Button>
            </Box>
        </Container>
        </ThemeProvider>
    );
};

export default AddURLForm;