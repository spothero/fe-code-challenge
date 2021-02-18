import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SpotItem from "../../spot/SpotItem";

export default class SpotList extends PureComponent {
    static propTypes = {
        selectedSpot: PropTypes.object,
        spots: PropTypes.arrayOf(PropTypes.object).isRequired,
        setSpot: PropTypes.func.isRequired,
    };

    _onDetailsClick = (spot) => {
        this.props.setSpot(spot);
    };

    render() {
        const { selectedSpot, spots } = this.props;

        return (
            <div className="SpotList column is-one-third px-3">
                <div className="panel">
                    {/* Heading Container */}
                    <div className="SpotList-heading panel-heading has-background-light py-6">
                        <nav className="breadcrumb has-succeeds-separator my-2">
                            <ul className="content is-small">
                                <li className="p-0 m-0 ">
                                    <a href="#">Chicago</a>
                                </li>
                                <li className="is-active p-0 m-0">
                                    <a href="#">Millennium Park</a>
                                </li>
                            </ul>
                        </nav>
                        <h1 className="title is-2">Millennium Park</h1>
                        <p className="subtitle is-6">
                            {spots.length} Spots Available
                        </p>
                    </div>
                    {/* Heading Container */}

                    {/* Spotlist Container */}
                    <div className="SpotList-spots block">
                        {spots.map((spot) => {
                            return (
                                <SpotItem
                                    key={spot.id}
                                    data={spot}
                                    isSelected={
                                        selectedSpot &&
                                        selectedSpot.id === spot.id
                                    }
                                    onDetailsClick={this._onDetailsClick}
                                />
                            );
                        })}
                    </div>
                    {/* Spotlist Container */}
                </div>
            </div>
        );
    }
}
