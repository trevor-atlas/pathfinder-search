import {
    Box,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputBase,
    Paper,
    Radio,
    RadioGroup
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { VirtualizedList } from '../components/VirtualizedList';
import { useDebounce } from '../utils/debounce';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            // @ts-ignore
            width: '25ch',
        },
    },
    menuButton: {
        marginRight: '1em'
    },
    title: {
        flexGrow: 1,
        display: 'none',
    },
    paper: {
        padding: '1em',
        color: '#333'
    },
    search: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: '#eee',
        '&:hover': {
            backgroundColor: '#ddd',
        },
        marginLeft: 0,
        width: '100%',
    },
    searchIcon: {
        padding: '0 1em',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#234599'
    },
    inputRoot: {
    },

    inputInput: {
        padding: '1em 1em 1em 0',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + 25px)`,
        width: '100%',
    },
}));

const Index = () => {
    const classes = useStyles();
    const [type, setType] = useState('spells');
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null as any);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        setSelected,
        results: [],
        type
    });

    const debouncedSearchTerm = useDebounce(query, 500);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    useEffect(() => {
        (async () => {
            if (debouncedSearchTerm) {
                setIsLoading(true);
                try {

                const result = await fetch(`http://localhost:8080?query=${query}&type=${type}`);
                const data = await result.json();
                setData({
                    setSelected,
                    results: data,
                    type
                });

                } catch(err) {
                    setData({
                        setSelected,
                        results: [],
                        type
                    })
                }
                setIsLoading(false);
            } else {
            }
        })()
    }, [debouncedSearchTerm, type]);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                        <Box m={2}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    onChange={(e) => setQuery(e.target.value)}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Box>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Query Type</FormLabel>
                            <RadioGroup aria-label="Query Type" name="gender1" value={type} onChange={handleTypeChange}>
                                <FormControlLabel color="primary" value="feats" control={<Radio />} label="Feats" />
                                <FormControlLabel color="primary" value="monsters" control={<Radio />} label="Monsters" />
                                <FormControlLabel color="primary" value="spells" control={<Radio />} label="Spells" />
                                <FormControlLabel color="primary" value="items" control={<Radio />} label="Items" />
                            </RadioGroup>
                        </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                    {isLoading ? (
                        <h2>Loading ...</h2>
                    ) : (
                        data.results
                        && data.results.length
                        && <VirtualizedList itemData={data} />
                       || <h2>No Results</h2>
                    )}
                </Grid>
                <Grid item xs={12} md={7}>
                    {selected && <Paper className={classes.paper}>
                        <h2>{selected.name}</h2>
                        {Object.entries(selected)
                            .filter(([key, value]) =>
                                value
                                && key
                                && value != 'NULL'
                                && key != 'full_text'
                                && key != 'description_formatted'
                                && key != 'name'
                                && key != 'fulltext'
                            )
                            .map(([key, value], i) => {
                            return (
                                <p key={key + i}><strong>{humanize(key)}:</strong> <span>{humanize(value)}</span></p>
                            )
                        })}
                    </Paper>}
                </Grid>
            </Grid>
        </Container>

    )
};

const humanize = (str) => {
    if (!str) return str;
    if (typeof str !== 'string') return str;
    return str.trim().replace('_', ' ');
}

export default Index;
