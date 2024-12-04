import { createTheme } from '@mui/material/styles';

export const getMuiTheme = () =>
    createTheme({
        components: {
            MUIDataTable: {
                styleOverrides: {
                    paper: {
                        scroll: true,
                        zIndex: 0,
                        boxShadow: 'none',
                        width: '100%',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        color: 'black',
                        textTransform: 'none',
                        padding: '0px',
                        position: 'sticky',
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        // minheight: '10px',
                        position: 'sticky',
                        top: '0',
                        zIndex: '100',
                    },
                    regular: {
                        padding: '0px',
                        backgroundColor: '#CDCAC6',
                    },
                },
            },
            MuiButtonBase: {
                styleOverrides: {
                    MuiTableSortLabel: {
                        icon: {
                            color: 'blue',
                        },
                    },
                },
            },

            MUIDataTableHeadCell: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'lightgray',
                    },
                    toolButton: {
                        fontWeight: 'bold',
                        color: 'darkblue',
                        marginLeft: '5px',
                    },
                    sortActive: {
                        color: 'white',
                    },
                },
            },
            MUIDataTableBodyCell: {
                styleOverrides: {
                    root: {
                        marginLeft: '14px',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        height: '40px',
                    },
                },
            }
        },
    });


