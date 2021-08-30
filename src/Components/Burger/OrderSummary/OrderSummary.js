import { transform } from '@babel/core';
import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../Button/Button';

const OrderSummary = (props) => {
    const burgerIngredient = Object.keys(props.ingredient).map(
        (igkey) => <span key = {igkey} style = {{textTransform: 'capitalize'}}><li>{igkey} : {props.ingredient[igkey]} </li> </span>
    )
    return (
        <Aux>
            <h3> Your Order Summary</h3>
            {burgerIngredient}
            <p><strong>Total Price : ${props.price.toFixed(2)}</strong></p>
            <p>Do you want to proceed to checkout?</p>
            <Button btnType = "Danger" clicked = {props.dispose}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.continue}>CONTINUE</Button>

        </Aux>
    )

}

export default OrderSummary;