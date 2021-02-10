import React from 'react';
import PropTypes from 'prop-types';

import SpotItem from '../../spot/SpotItem';
import TextButton from '../../common/TextButton';

const styles = {
    feature: 'w-100 h-72 p-8 border-b border-neutrals-dashboard',
    listWrapper: 'absolute top-0 l-0 bottom-0 w-96 bg-neutrals-white w-spotListWidth border-r border-neutrals-dashboard overflow-hidden',
    breadcrumbs: 'text-2xl mb-8',
    list: 'w-100 divide-y divide-neutrals-gray overflow-y-scroll max-h-100-72',
};

const SpotList = ({selectedSpot, spots, setSpot}) => {
    const handleDetailsClick = spot => setSpot(spot);

    return (
        <div
            className={styles.listWrapper}
        >
            <div className={styles.feature}>
                <div className={styles.breadcrumbs}>
                    <TextButton>Chicago</TextButton> &gt; Millennium Park
                </div>
                <h1>Millennium Park</h1>
                <p>{spots.length} Spots Available</p>
            </div>
            <div className={styles.list}>
                {spots.map(spot => (
                    <SpotItem
                        data={spot}
                        key={spot.id}
                        onDetailsClick={handleDetailsClick}
                        selectedSpotId={selectedSpot?.id || -1}
                    />
                ))}
            </div>

        </div>
    );
};

SpotList.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired
};

export default SpotList;
