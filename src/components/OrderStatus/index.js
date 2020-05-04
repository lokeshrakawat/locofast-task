import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Done } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 15px',
        borderRadius: 10
    },
    icon: {
        fontSize: 20,
        padding: 10,
        color: "#50AF79",
        border: '1px solid #50AF79',
        borderRadius: 25,
        backgroundColor: '#fff'
    },
    iconWrap: {
        padding: '10px 10px 6px',
        border: "1px solid #50AF79",
        borderRadius: "50%"
    }
}))

const bgColor = "#E8FFF1";
const textColor = "#50AF79"

const OrderStatus = (props) => {
    const { status } = props;
    const classes = useStyles();
    const isDispatched = status === "dispatched";
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.root} style={{ backgroundColor: bgColor }}>
            <Grid container direction="column" alignItems="space-around" item xs={8}>
                <Typography variant="body2" style={{ color: "#000", margin: "7px 0" }}>
                    {`Order ${isDispatched && 'Complete'}!`}
                </Typography>
                <Typography variant="body2" style={{ color: textColor }}>
                    {isDispatched && "This order has been fully dispatched."}
                </Typography>
            </Grid>
            <Grid container justify="flex-end" alignItems="center" item xs={4}>
                <div className={classes.iconWrap}>
                    <div>
                        <Done className={classes.icon} />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.string.isRequired
};

export default OrderStatus;