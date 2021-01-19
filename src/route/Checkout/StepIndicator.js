import PropTypes from 'prop-types';

import './Checkout.steps.scss';

export const STEP_INDEXES = {
    SHIPPING_STEP: [0, 'Shipping'],
    BILLING_STEP: [1, 'Review & Payment'],
    DETAILS_STEP: [2, 'Finish']
};

export default function StepIndicator({ step }) {
    return (
        <div block="CheckoutSteps">
            <div>
                { Object.keys(STEP_INDEXES).map((key, index) => {
                    const isActive = STEP_INDEXES[step][0] >= index;
                    return (
                        <div className={ isActive ? 'active' : '' }>
                            <span data-text={ STEP_INDEXES[key][1] }>{ index + 1 }</span>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}

StepIndicator.propTypes = {
    step: PropTypes.number.isRequired
};
