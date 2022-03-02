import * as React from "react";

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { axiosInstance } from "../utils";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

const Login = () => {
    const history = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);

        const user = {
            username: data.get('username') as string,
            password: data.get('password') as string
        };

        if (user.username.trim() !== "" && user.password.trim()) {
            axiosInstance.post('/login', {
                user: user.username,
                password: user.password
            }).then(response => {
                if (response.data) {
                    const { token } = response.data;
                    sessionStorage.setItem('token', token);

                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    history('/dashboard');
                }
            }).catch(console.log);
        }
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">
                    Welcome
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    type="text"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>
            </Box>
        </Container>
        </ThemeProvider>
    );
};

export default Login;