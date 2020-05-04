import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, IconButton, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Close } from '@material-ui/icons';

import { dispatcherData } from '../../data/dispatcherData';
import { DispatcherDetail, OrderStatus } from '../../components';

const useStyles = makeStyles(theme => ({
    card: {
        // boxShadow: 
    },
    content: {
        maxHeight: 500,
        overflow: 'auto',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    statusWrap: {
        padding: '0 16px',
        borderRadius: 5
    }
}))

const DispatchList = (props) => {
    const { dispatchId, closeDetail } = props;
    const classes = useStyles();
    return (
        <Card raised className={classes.card}>
            <CardHeader
                title={`Dispatch Details '${dispatchId}'`}
                action={
                    <IconButton onClick={closeDetail}>
                        <Close />
                    </IconButton>
                }
                classes={{ title: classes.title }}
            />
            <div className={classes.statusWrap}>
                <OrderStatus
                    status="dispatched"
                />
            </div>
            <CardContent className={classes.content}>
                {dispatcherData.map((data, ind) => (
                    <DispatcherDetail
                        key={ind}
                        data={data}
                    />
                ))}
            </CardContent>
        </Card>
    );
};

DispatchList.propTypes = {
    dispatchId: PropTypes.string.isRequired,
    closeDetail: PropTypes.func.isRequired
};

export default DispatchList;