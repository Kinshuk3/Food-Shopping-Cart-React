import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza Margherita',
      description: 'Classic Italian with fresh mozzarella and basil',
      price: 14.99,
    },
    {
      id: 'm2',
      name: 'Pad Thai',
      description: 'A Thai favorite with stir-fried noodles and shrimp',
      price: 12.5,
    },
    {
      id: 'm3',
      name: 'Mouthwatering Tacos',
      description: 'Authentic street-style tacos with your choice of fillings',
      price: 9.99,
    },
    {
      id: 'm4',
      name: 'Mediterranean Salad',
      description: 'A healthy delight with fresh veggies and feta cheese',
      price: 11.99,
    },
  ];  

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((meal) =>{
        return(
            <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
        )
    })

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals