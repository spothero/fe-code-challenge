import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "../common/Image";
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
            "mx-0 my-0 px-0 py-4 tile is-ancestor has-border-bottom-light",
            {
                "is-active has-spotlist-selector": isSelected,
            }
        );

        return (
            <div className={classes}>
                <div className="tile is-horizontal is-12 px-5">
                    <div className="tile is-child is-4">
                        <Image src={image} />
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
            </div>
        );
    }
}
