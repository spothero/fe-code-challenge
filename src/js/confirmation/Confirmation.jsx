import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from '../common/Button';
import Image from '../common/Image';

const styles = {
    confirmation: 'w-4/12 mx-auto my-16 Confirmation p-10 bg-neutrals-white rounded border border-neutrals-dashboard text-center',
    heading: 'text-center uppercase',
    image: 'block my-12 mx-auto rounded border border-solid border-neutrals-dashboard',
    button: 'mt-12'
};

class Confirmation extends PureComponent {
    static propTypes = {
        selectedSpot: PropTypes.object,
        pushTo: PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        const {
            selectedSpot,
            pushTo
        } = props;

        // if you refresh on confirmation and there isn't a selectedSpot, make sure to go back to search and render nothing here
        if (!selectedSpot) {
            pushTo('/');
        }
    }

    _onPurchaseAnotherClick = evt => {
        const {
            pushTo,
        } = this.props;

        pushTo('/');
    }

    render() {
        const {
            email,
            selectedSpot
        } = this.props;

        if (!selectedSpot) {
            return null;
        }

        return (
            <div className={styles.confirmation}>
                <h1 className={styles.heading}>Park it like its hot!</h1>
                <p >You successfully purchased parking at <strong>{selectedSpot.title}</strong> for <strong>${(selectedSpot.price / 100).toFixed(2)}</strong>.</p>
                <Image
                    src={selectedSpot.image}
                    className={styles.image}
                />
                <p>We emailed a receipt to <a href={`mailto:${email}`}>{email}</a>.</p>

                <Button
                    color="primary"
                    className={styles.button}
                    onClick={this._onPurchaseAnotherClick}
                >
                    Purchase Another Spot!
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        checkout: {
            email
        },
        spot: {
            selected: selectedSpot
        }
    } = state;

    return {
        email,
        selectedSpot
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
