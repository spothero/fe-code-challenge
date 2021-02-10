import {SPOT_UPDATE_SELECTED} from './spot-actions';

const initialState = {
    selected: {id: 1, title: 'Seven Lions - Valet', price: 1400, description: 'Arrive at this location at 97 E Adams St. This is the Seven Lions valet stand operated by VPA. It is located in front of Starbucks on the south side of E Adams St. between S Michigan Ave. and S Wabash Ave. If you are using the SpotHero Mobile App, please refer to the 2nd picture for an annotated map.', distance: '0.1 mi', image: 'https://res.cloudinary.com/spothero/image/upload/v1579704583/front-end/code-challenge/wkabs86wl5zwqaksb6fr.jpg'}
};

export default function spot(state = initialState, {type, payload}) {
    switch (type) {
        case SPOT_UPDATE_SELECTED: {
            return {
                ...state,
                selected: payload || null
            };
        }

        default:
            return state;
    }
}
