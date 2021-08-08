import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishablekey = 'pk_test_51JL0dwKjLm3nHsPePfOnFxcHO9quGbg2zdqM4AYluyrSLhrTqdSNjk9Xd31OUCL1R4exdM3tGa0JMueiLEWIyaGL00O1gMTGna'


  const onToken = token => {
        console.log(token);
        alert('Payment Successful')

    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} 
            stripeKey={pulishablekey}     
        />
    );
};

export default StripeCheckoutButton;
