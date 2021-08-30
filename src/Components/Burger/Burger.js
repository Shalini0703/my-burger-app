import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    let tranformedIngredient = Object.keys(props.ingredient).map(
        igkey => {
            return [...Array(props.ingredient[igkey])].map((ig, i) =>{
                return <BurgerIngredient key = {igkey + i} type = {igkey}></BurgerIngredient>
            }
            )
        }

    ).reduce((arr,el) => {
        return arr.concat(el);
    }, []);
    
    if(tranformedIngredient.length === 0){
        tranformedIngredient = <p>Please start adding burger ingredient!!</p>
    }

    return(
        <div className = {classes.Burger} >
            <BurgerIngredient type = "burger-top"/>
            {tranformedIngredient}
            <BurgerIngredient type = "burger-bottom"/>

        </div>
    )
}

export default burger;