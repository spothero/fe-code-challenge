import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import TextButton from '../common/TextButton';
import SpotItem from '../spot/SpotItem';

export default class SpotList extends PureComponent {
    static propTypes = {
        selectedSpot: PropTypes.object,
        spots: PropTypes.arrayOf(PropTypes.object).isRequired,
        setSpot: PropTypes.func.isRequired
    };

    _onDetailsClick = spot => {
        this.props.setSpot(spot);
    }

    render() {
        const {
            selectedSpot,
            spots
        } = this.props;

        return (
            <div className="w-3/12 h-100 bg-white border-r-2 overflow-hidden flex flex-col">
                <div className="w-full p-8 border-b-2 border-naturals-dashboard flex flex-col justify-between bg-white overflow-y-hidden flex-shrink-0">
                    <div className="text-2xl mb-8">
                        <TextButton>Chicago</TextButton> &gt; Millennium Park
                    </div>
                    <h1 className="text-5xl mb-8">Millennium Park</h1>
                    <p>{spots.length} Spots Available</p>
                </div>
                <div className="overflow-y-auto">
                    {spots.map(spot => {
                        return (
                            <SpotItem
                                key={spot.id}
                                data={spot}
                                isSelected={selectedSpot && selectedSpot.id === spot.id}
                                onDetailsClick={this._onDetailsClick}
                            />
                        );
                    })}
                </div>

            </div>
        );
    }
}
