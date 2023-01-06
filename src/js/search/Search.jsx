import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import SpotList from './spot-list/SpotList';
import DetailsModal from './DetailsModal';

const Search = ({selectedSpot, spots, setSpot}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleModal = spot => {
        setSpot(spot);
        setIsOpen(!isOpen);
    };

    const handleCloseModal = () => {
        setSpot(null);
        setIsOpen(false);
    };

    return (
        <div className="Search">
            <SpotList
                spots={spots}
                selectedSpot={selectedSpot}
                setSpot={handleToggleModal}
            />
            <div className="Search-content">
                {selectedSpot && (
                    <DetailsModal
                        {...selectedSpot}
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
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
