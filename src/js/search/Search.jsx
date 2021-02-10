import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import SpotList from './spot-list/SpotList';

const styles = 'absolute top-0 right-0 bottom-0 w-window-spotList';

const Search = ({
    spots,
    setSpot,
    selectedSpot,
}) => {
    return (
        <>
            <SpotList
                spots={spots}
                setSpot={setSpot}
                selectedSpot={selectedSpot}
            />
            <div className={styles} />
        </>
    );
};

Search.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const {
        spot: {
            selected: selectedSpot
        }
    } = state;

    return {
        selectedSpot
    };
};

const mapDispatchToProps = {
    setSpot: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
