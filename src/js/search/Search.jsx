import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import SpotList from './spot-list/SpotList';

const Search = ({selectedSpot, spots, setSpot}) => {
    return (
        <div className="Search">
            <SpotList
                spots={spots}
                selectedSpot={selectedSpot}
                setSpot={setSpot}
            />
            <div className="Search-content" />
        </div>
    );
};

Search.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
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
