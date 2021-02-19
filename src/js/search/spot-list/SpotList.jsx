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
            <div className="SpotListAncestor tile is-ancestor is-absolute p-0 m-0">
                <div className="SpotListParent tile is-parent is-vertical p-0">
                    <div className="SpotList-heading has-background-white has-border-bottom-light p-5">
                        <nav className="breadcrumb has-succeeds-separator my-2">
                            <ul className="content pb-0 m-0">
                                <li>
                                    <a href="#" className="px-1">
                                        Chicago
                                    </a>
                                </li>
                                <li className="p-0 m-0 is-active">
                                    <a href="#" className="px-1">
                                        Millennium Park
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <h1 className="title is-1 mt-4">Millennium Park</h1>
                        <p className="content has-text-weight-normal is-small mb-3">
                            {spots.length} Spots Available
                        </p>
                    </div>
                    <div className="SpotListSpots block">
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
                </div>
            </div>
        );
    }
}
