import * as React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { axiosInstance, renewToken } from "../utils";

const theme = createTheme();

const AddURLForm = () => {
    const [URL, setURL] = useState<string>("");
    const [newURL, setNewURL] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setState] = useState<boolean>(false);

    const shortURL = () => {
        if (URL.trim() !== "") {
            setState(true);
            setError("");
            setNewURL("");

            renewToken();
            axiosInstance.post('url-shortener', {"URL": URL})
            .then(response => {
                setNewURL(response.data.data);
            })
            .catch(error => {
                if (error.response) {
                    const data: {message: string} = error.response.data;
                    setError(data.message);
                }
            })
            .finally(() => {
                setState(false);
            });
        }
    };

    const updateURL = (event: React.ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <Box component="div" sx={{
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
                    onChange={updateURL}
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={shortURL}
                    disabled={isLoading}
                >
                    Short URL
                </Button>
            </Box>
            {
                error && (
                    <Box>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )
            }
            {
                newURL && (
                <Box sx={{ mt: 2 }}>
                    <Alert severity="success">The Short URL is: {newURL}</Alert>
                </Box>
            )}
            
        </Container>
        </ThemeProvider>
    );
};

export default AddURLForm;