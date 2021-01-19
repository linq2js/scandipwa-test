/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.steps.scss';

export const STEP_INDEXES = {
    SHIPPING_STEP: [0, 'Shipping'],
    BILLING_STEP: [1, 'Review & Payment'],
    DETAILS_STEP: [2, 'Finish']
};

/** @namespace ScandipwaTest/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderStepIndicators() {
        const { checkoutStep } = this.props;
        return (
            <div block="CheckoutSteps">
                <div>
                    { Object.keys(STEP_INDEXES).map((key, index) => {
                        const isActive = STEP_INDEXES[checkoutStep][0] >= index;
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

    render() {
        return (
            <main block="Checkout">
                { this.renderStepIndicators() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
