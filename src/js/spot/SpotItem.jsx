import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import Image from '../common/Image';
import TextButton from '../common/TextButton';

const styles = {
    item: isSelected => `relative flex py-5 px-6 ${isSelected ? 'bg-neutrals-pavement-dark' : ''}`,
    border: isSelected => `absolute top-0 left-0 bottom-0 w-2 z-10 ${isSelected ? 'bg-brand-green' : 'bg-transparent'}`
};

const SpotItem = ({data, selectedSpotId, onDetailsClick, showDetails = true}) => {
    const isSelected = useMemo(() => data.id === selectedSpotId, [data.id, selectedSpotId]);

    const {
        title,
        image,
        distance,
    } = data;

    const handleClick = () => onDetailsClick(data);

    return (
        <div className={styles.item(isSelected)}>
            <div className={styles.border(isSelected)} />
            <Image
                src={image}
                className="flex-shrink-0 w-56 h-36 border border-neutral-dashboard rounded"
            />
            <div className="ml-6 grid grid-rows-3 gap-row-4 items-center justify-items-start">
                <h2 className="text-3xl">{title}</h2>
                <p className="m-0">{distance}</p>
                {showDetails && (
                    <TextButton onClick={handleClick}>
                        Details
                    </TextButton>
                )}
            </div>
        </div>
    );
};

SpotItem.propTypes = {
    showDetails: PropTypes.bool,
    onDetailsClick: PropTypes.func,
    selectedSpotId: PropTypes.number,
    data: PropTypes.object.isRequired,
};

export default SpotItem;
