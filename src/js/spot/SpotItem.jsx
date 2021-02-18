import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
export default class SpotItem extends PureComponent {
    static propTypes = {
        showDetails: PropTypes.bool,
        isSelected: PropTypes.bool,
        data: PropTypes.object.isRequired,
        onDetailsClick: PropTypes.func,
    };
    static defaultProps = {
        showDetails: true,
    };

    _onDetailsClick = (evt) => {
        const { data, onDetailsClick } = this.props;

        onDetailsClick(data);
    };

    render() {
        const {
            showDetails,
            isSelected,
            data: { image, distance, title },
        } = this.props;
        const classes = classNames("panel-block media mt-0 py-4", {
            "is-active": isSelected,
        });

        return (
            <a className={classes}>
                <div className="media-left">
                    <figure className="image">
                        <img className="is-4by3" src={image} />
                    </figure>
                </div>
                <div className="block">
                    <p className="title is-6">{title}</p>
                    <p className="subtitle is-6 mb-1">{distance}</p>
                    {showDetails && (
                        <a
                            className="is-ghost p-0"
                            onClick={this._onDetailsClick}
                        >
                            Details
                        </a>
                    )}
                </div>
            </a>
        );
    }
}
