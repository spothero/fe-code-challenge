import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../common/Image';
import TextButton from '../common/TextButton';

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

    _onDetailsClick = evt => {
        const {data, onDetailsClick} = this.props;

        onDetailsClick(data);
    };

    render() {
        const {
            showDetails,
            isSelected,
            data: {image, distance, title},
        } = this.props;
        const classes = classNames('SpotItem', {
            'SpotItem-selected': isSelected,
        });

        return (
            <div className={classes}>
                <Image src={image} />
                <div className="SpotItem-info">
                    <h2>{title}</h2>
                    <p>{distance}</p>
                    {showDetails && (
                        <TextButton onClick={this._onDetailsClick}>
                            Details
                        </TextButton>
                    )}
                </div>
            </div>
        );
    }
}
