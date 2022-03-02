import * as React from "react";
import { useState, useEffect } from "react";
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

import { axiosInstance, renewToken } from "../utils";

const theme = createTheme();

const TopURLs = () => {
    const [URLs, setURLs] = useState<URL[]>([]);

    useEffect(() => {
        renewToken();
        axiosInstance.get('/top-urls').then(
            response => {
                if (response.data) {
                    const { data } = response.data;
                    const URLs: URL[] = data.map((url: URL) => ({
                        source: url.source,
                        visits: url.visits,
                        shortcode: url.shortcode,
                        newURL: url.newURL
                    }));

                    setURLs(URLs);
                }
            }
        )
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <Typography align="center">TOP 20 Visited URLs</Typography>
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">URL</TableCell>
                                <TableCell align="center">VISITS</TableCell>
                                <TableCell align="center">SHORTCODE</TableCell>
                                <TableCell align="center">NEW URL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            URLs.map(url => (
                                <TableRow key={url.shortcode}>
                                    <TableCell align="center"><a href={url.source}>{url.source}</a></TableCell>
                                    <TableCell align="center">{url.visits}</TableCell>
                                    <TableCell align="center">{url.shortcode}</TableCell>
                                    <TableCell align="center"><a href={url.newURL}>{url.newURL}</a></TableCell>
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