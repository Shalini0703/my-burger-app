import React , {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import { object } from 'prop-types';
import Modal from '../../Components/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.6,
    meat : 2.0,
    bacon : 0.9
};

class BurgerBuilder extends Component {
    state = {
        ingredient :{
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon: 0
        },
        totalPrice : 4.0,
        pushasable : false,
        purchasing : false
    }

    updatePurchasable(ingredient){
        const sum = Object.keys(ingredient).map(
            function (key) { 
                // Using Number() to convert key to number type 
                // Using obj[key] to retrieve key value 
                return [ingredient[key]]; 
            }
        ).reduce(
            (sum, el) => {
                return sum + el;
            }, 0
        );

        this.setState({pushasable: sum > 0})
    }

    addIngredientListener = (type) => {
        let oldIngredientAmt = this.state.ingredient[type];
        let newIngredientAmt = oldIngredientAmt + 1;
        let updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = newIngredientAmt;

        let totalPrice = this.state.totalPrice;
        let updatedPrice = totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredient : updatedIngredient,
            totalPrice: updatedPrice
        })
        this.updatePurchasable(updatedIngredient);

    }

    removeIngredientListener = (type) => {
        let oldIngredientAmt = this.state.ingredient[type];
        if (oldIngredientAmt <= 0){
            return;
        }
        let newIngredientAmt = oldIngredientAmt - 1;
        let updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = newIngredientAmt;

        let totalPrice = this.state.totalPrice;
        let updatedPrice = totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredient : updatedIngredient,
            totalPrice: updatedPrice
        })
        this.updatePurchasable(updatedIngredient);

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    disposePurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = () => {
        alert("Your Order is placed");
        this.setState({purchasing: false})
    }


    render(){

        const disabledInfo = {
            ...this.state.ingredient
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal show = {this.state.purchasing} dispose = {this.disposePurchaseHandler}>
                    <OrderSummary ingredient = {this.state.ingredient}
                    price = {this.state.totalPrice}
                    dispose = {this.disposePurchaseHandler}
                    continue = {this.continuePurchaseHandler}
                    />
                </Modal>
                <div>
                    <Burger  ingredient = {this.state.ingredient}/>
                </div>
                <div>
                    <BuildControls
                        ingredientAdded = {this.addIngredientListener}
                        ingredientRemoved = {this.removeIngredientListener}
                        disabled = {disabledInfo}
                        price = {this.state.totalPrice}
                        pushasable = {this.state.pushasable}
                        clicked = {this.purchaseHandler}
                    />
                </div>
            </Aux>

        )
    }

}

export default BurgerBuilder;