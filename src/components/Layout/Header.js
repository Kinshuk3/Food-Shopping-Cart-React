import React from "react";
import mealsImage from '../../assets/food.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Student Meals</h1>
                <HeaderCartButton onHeaderClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;