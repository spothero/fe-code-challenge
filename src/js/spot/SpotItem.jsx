import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../common/Image';
import TextButton from '../common/TextButton';

const styles = {
    item: isSelected => `relative flex py-5 px-6 ${isSelected ? 'bg-neutrals-pavement-dark' : ''}`,
    border: isSelected => `absolute top-0 left-0 bottom-0 w-2 z-10 ${isSelected ? 'bg-brand-green' : 'bg-transparent'}`
};

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
            isSelected,
            showDetails,
            data: {image, distance, title},
        } = this.props;
        const classes = classNames(styles.item(isSelected), {
            'SpotItem-selected': isSelected,
        });

        return (
            <div className={classes}>
                <div className={styles.border(isSelected)} />
                <Image
                    src={image}
                    className="flex-shrink-0 w-56 h-36 border border-neutral-dashboard rounded"
                />
                <div className="ml-6 grid grid-rows-3 gap-row-4 items-center justify-items-start">
                    <h2 className="text-3xl">{title}</h2>
                    <p className="m-0">{distance}</p>
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
