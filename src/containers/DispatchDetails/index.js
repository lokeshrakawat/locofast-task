import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DispatchList from './DispatchList';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15
    },
    button: {
        textTransform: 'none'
    }
}))

const dispatchId = 'PO1234456';

const DispatchDetails = (props) => {
    const classes = useStyles();

    const [state, setState] = useState({
        openDetail: false,
        dispatchId: ''
    });

    // open detail list and set dispatch id
    const onClickDispatchDetail = (id) => {
        setState({
            ...state,
            openDetail: true,
            dispatchId: id
        })
    };

    // close detail list and reset dispatch id
    const closeDetail = () => {
        setState({
            ...state,
            openDetail: false,
            dispatchId: ''
        })
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                {!state.openDetail &&
                    <Button
                        variant="outlined"
                        onClick={() => onClickDispatchDetail(dispatchId)}
                        className={classes.button}
                    >
                        Click for dispatch details
                    </Button>
                }
                {state.openDetail &&
                    <Grid container justify="center">
                        <Grid item xs={12} md={8} lg={6}>
                            <DispatchList
                                dispatchId={state.dispatchId}
                                closeDetail={closeDetail}
                            />
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid>
    );
};

export default DispatchDetails;