import * as React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import type { URL } from "../types/types";

const theme = createTheme();

const TopURLs = () => {
    const [URLs, setURLs] = useState<URL[]>([]);

    // TODO: fetch endpoint

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <Typography align="center">TOP 20 Visited URLs</Typography>
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">URL</TableCell>
                                <TableCell align="center">VISITS</TableCell>
                                <TableCell align="center">SHORTCODE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            URLs.map(url => (
                                <TableRow>
                                    <TableCell align="center">{url.source}</TableCell>
                                    <TableCell align="center">{url.visits}</TableCell>
                                    <TableCell align="center">{url.shortcode}</TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ThemeProvider>
    );
};

export default TopURLs;