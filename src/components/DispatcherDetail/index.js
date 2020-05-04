import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DownloadButton from '../DownloadButton';

import { getDateString } from '../../helpers/general';

const download = [
    { text: "E-way Bill" },
    { text: "Invoice Copy" },
    { text: "Packing List" },
    { text: "Challan Copy" }
];

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: "1px solid #e2e2e2",
        padding: '16px 0'
    },
    main: {
        padding: '0 16px'
    },
    img: {
        width: '100%',
        padding: '10px 0',
        border: "1px solid #e5e5e5",
        borderRadius: 10
    },
    trackingWrap: {
        padding: '16px 0',
    },
    keyVal: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
}))

const DispatcherDetail = (props) => {
    const { src, trackingId, quantity, numOfBox, dispatchDate, name } = props.data;
    const classes = useStyles();

    const renderButtons = () => {
        return download.map((d, i) => (
            <Grid item xs={6} sm={3} md={3} key={i} style={{ paddingRight: 10 }}>
                <DownloadButton
                    text={d.text}
                    onClick={() => { }}
                />
            </Grid>
        ))
    }
    return (
        <Grid container item xs={12} className={classes.root}>
            <Grid item xs={3} sm={3} md={2}>
                <img src={src} className={classes.img} alt={name} />
            </Grid>
            <Grid item xs={9} sm={9} md={10} className={classes.main}>
                <Typography variant="body1"><b>{`Dispatched on ${getDateString(dispatchDate)} via ${name}`}</b></Typography>
                <Grid container className={classes.trackingWrap}>
                    <Grid item xs={12} sm={12} md={6} className={classes.keyVal}>
                        <Typography variant="caption">Tracking Id</Typography>
                        <Typography variant="body1">{trackingId}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} className={classes.keyVal}>
                        <Typography variant="caption">Quantity</Typography>
                        <Typography variant="body1">{`${quantity}pcs`}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} className={classes.keyVal}>
                        <Typography variant="caption">No. of Boxes</Typography>
                        <Typography variant="body1">{numOfBox}</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    {renderButtons()}
                </Grid>
            </Grid>
        </Grid>
    );
};

DispatcherDetail.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        trackingId: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        numOfBox: PropTypes.number.isRequired,
        dispatchDate: PropTypes.string.isRequired
    }).isRequired
};

export default DispatcherDetail;