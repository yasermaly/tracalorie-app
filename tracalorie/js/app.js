class CalorieTracker {
  constructor() {
    this._calorieLimit = 200;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
  }

  addWorkouts(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // generates a random id hexadecimal number and then rounded up by removing the first two characters on the left.
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // generates a random id hexadecimal number and then rounded up by removing the first two characters on the left.
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker(); // new instance of CalorieTracker
const breakfast = new Meal('Breakfast', 400); // new instance of Meal
tracker.addMeal(breakfast); // adds the breakfast meal to the tracker variable

const run = new Workout('Morning Run', 300); // new instance of Workout
tracker.addWorkouts(run); // adds the run workout to the tracker variable

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
