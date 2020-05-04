import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { VerticalAlignBottom } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        textTransform: 'none',
        fontSize: 12,
        padding: '5px 8px',
        width: '100%',
        height: '100%'
    }
}))

const DownloadButton = (props) => {
    const { text, onClick } = props;
    const classes = useStyles();
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            className={classes.button}
            endIcon={<VerticalAlignBottom />}
        >
            {text}
        </Button>
    );
};

DownloadButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DownloadButton;