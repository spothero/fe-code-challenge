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
        const classes = classNames(
            "panel-block mx-0 my-0 px-0 py-4 tile is-ancestor",
            {
                "is-active has-spotlist-selector": isSelected,
            }
        );

        return (
            <a className={classes}>
                <div className="tile is-horizontal is-12 px-5">
                    <div className="tile is-child is-4">
                        <figure className="image">
                            <img
                                className="has-radius has-border-light-hover"
                                src={image}
                            />
                        </figure>
                    </div>
                    <div className="tile is-child is-vertical content is-7 pl-4">
                        <div>
                            <p className="is-size-4 has-text-weight-semibold p-0 mb-0">
                                {title}
                            </p>
                            <p className="content is-smaller mb-1">
                                {distance}
                            </p>
                        </div>
                        {showDetails && (
                            <a onClick={this._onDetailsClick}>Details</a>
                        )}
                    </div>
                </div>
            </a>
        );
    }
}
