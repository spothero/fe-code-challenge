import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import SpotList from './spot-list/SpotList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    searchContent: {
        position: 'absolute',
        top: 0,
        left: '28.75rem',
        width: 'calc(100vw - 28.75rem)',
        height: '100vh',
        backgroundColor: `${theme.palette.brand.darkBlue.DEFAULT}`,
    },
}));

const Search = ({selectedSpot, spots, setSpot}) => {
    const classes = useStyles();

    return (
        <div className="Search">
            <SpotList
                spots={spots}
                setSpot={setSpot}
                spotListWidth="1000px"
                selectedSpot={selectedSpot}
            />
            <div className={classes.searchContent} />
        </div>
    );
};

Search.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const {
        spot: {selected: selectedSpot},
    } = state;

    return {
        selectedSpot,
    };
};

const mapDispatchToProps = {
    setSpot: updateSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
