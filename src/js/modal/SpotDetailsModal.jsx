import React from "react";
import PropTypes from "prop-types";

export default class SpotDetailsModal extends React.Component {
    static propTypes = {
        selectedSpot: PropTypes.object,
        setSpot: PropTypes.func.isRequired,
    };

    _onBookParkingClick = () => {};

    _closeDetailsModal = () => {
        this.props.setSpot(null);
    };

    render() {
        const { selectedSpot } = this.props;
        const modalOpen = !!selectedSpot ? "is-active" : "";

        return (
            <div className={`modal ${modalOpen}`}>
                <div className="modal-content card has-background-white p-6">
                    <div className="card-content is-flex is-flex-direction-column">
                        <button
                            className="delete is-align-self-flex-end"
                            onClick={this._closeDetailsModal}
                        />
                        <h2 className="title is-2 is-align-self-center">
                            Spot Details
                        </h2>
                        <h3 className="subtitle is-2">
                            {selectedSpot && selectedSpot.title}
                        </h3>
                        <p className="content">
                            {selectedSpot && selectedSpot.description}
                        </p>
                        <button
                            className="button is-primary is-align-self-center"
                            onClick={this._onBookParkingClick}
                        >
                            $
                            {selectedSpot &&
                                (selectedSpot.price / 100).toFixed(2)}{" "}
                            | Book It!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
