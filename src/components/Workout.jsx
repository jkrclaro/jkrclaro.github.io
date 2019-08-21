import React from 'react';


class Workout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: this.generateWorkout()
        };
        this.random = this.random.bind(this);
        this.generateWorkout = this.generateWorkout.bind(this);
        this.randomWorkout = this.randomWorkout.bind(this);
    }

    random(max) {
        return Math.floor(Math.random() * max)
    }

    generateWorkout() {
        const CHEST = 'chest';
        const SHOULDERS = 'shoulders';
        const LEGS = 'legs';
        const BACK = 'back';
        const ARMS = 'arms';
        const CORE = 'core';

        const calendar = {
            '0': { // ALL
                '0': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
                '1': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
                '2': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
                '3': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
                '4': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
                '5': [CHEST, ARMS, BACK, CORE, LEGS, SHOULDERS],
            },
            '1': {  // January
                '0': [CHEST, ARMS],
                '1': [BACK, CORE],
                '2': [CORE, LEGS],
                '3': [ARMS, CORE],
                '4': [LEGS, ARMS],
                '5': [SHOULDERS, LEGS]
            },
            '2': { // February
                '0': [CHEST, CORE],
                '1': [BACK, LEGS],
                '2': [CORE, CORE],
                '3': [ARMS, LEGS],
                '4': [LEGS, CORE],
                '5': [SHOULDERS, ARMS],
            },
            '3': { // March
                '0': [CHEST, SHOULDERS],
                '1': [LEGS, BACK],
                '2': [ARMS, CORE],
                '3': [CHEST, LEGS],
                '4': [SHOULDERS, BACK],
                '5': [CORE, ARMS],
            },
            '4': { // April
                '0': [CHEST, SHOULDERS],
                '1': [LEGS, BACK],
                '2': [CORE, ARMS],
                '3': [CHEST, LEGS],
                '4': [SHOULDERS, BACK],
                '5': [CORE, ARMS],
            },
            '5': { // May
                '0': [CHEST, ARMS],
                '1': [BACK, LEGS],
                '2': [CORE, BACK],
                '3': [ARMS, LEGS],
                '4': [LEGS, ARMS],
                '5': [SHOULDERS, BACK],
            },
            '6': { // June
                '0': [CHEST, CORE],
                '1': [BACK, LEGS],
                '2': [CORE, CORE],
                '3': [ARMS, LEGS],
                '4': [LEGS, CORE],
                '5': [SHOULDERS, ARMS],
            },
            '7': { // July
                '0': [CHEST, SHOULDERS],
                '1': [LEGS, BACK],
                '2': [CORE, CORE],
                '3': [ARMS, LEGS],
                '4': [LEGS, CORE],
                '5': [SHOULDERS, ARMS],
            },
            '8': { // August
                '0': [CHEST, SHOULDERS],
                '1': [LEGS, BACK],
                '2': [CORE, ARMS],
                '3': [CHEST, LEGS],
                '4': [SHOULDERS, BACK],
                '5': [CORE, ARMS],
            },
            '9': { // September
                '0': [CHEST, ARMS],
                '1': [BACK, LEGS],
                '2': [CORE, BACK],
                '3': [ARMS, LEGS],
                '4': [LEGS, ARMS],
                '5': [SHOULDERS, BACK],
            },
            '10': { // October
                '0': [CHEST, CORE],
                '1': [BACK, CORE],
                '2': [CORE, CORE],
                '3': [ARMS, LEGS],
                '4': [LEGS, CORE],
                '5': [SHOULDERS, ARMS],
            },
            '11': { // November
                '0': [CHEST, CORE],
                '1': [BACK, LEGS],
                '2': [CORE, CORE],
                '3': [ARMS, LEGS],
                '4': [LEGS, CORE],
                '5': [SHOULDERS, ARMS],
            },
            '12': { // December
                '0': [CHEST, SHOULDERS],
                '1': [LEGS, BACK],
                '2': [CORE, ARMS],
                '3': [CHEST, LEGS],
                '4': [SHOULDERS, BACK],
                '5': [CORE, ARMS],
            }
        }

        const muscles = {
            'core': {
                '#1': ['Plank', 'Bottoms Up', 'Spider Crawl'],
                '#2': ['Cross-Body Crunch', 'Elbow to Knee', 'Cocoons'],
                '#3': ['Reverse Crunch', 'Air Bike', '3/4 Sit-Up']
            },
            'chest': {
                '#1': ['Pushups', 'Incline Push-Up', 'Single-Arm Push-Up'],
                '#2': ['Pushups (Close and Wide Hand Positions)', 'Push-Ups With Feet Elevated', 'Isometric Wipers'],
                '#3': ['Clock Push-Up', 'Push-Up Wide']
            },
            'shoulders': {
                'front': ['Front Barbell Raise'],
                'rear': ['Standing Bent-Over With Dumbbells', 'Seated Bent-Over With Dumbbells', 'Seated Bent-Over On An Incline Bench / Exercise Ball'],
                'middle': ['Dumbbell Side Raise']
            },
            'arms': {
                'biceps': ['Wide-Grip Standing Barbell Curl', 'Hammer Curls', 'Biceps Curl To Shoulder Press'],
                'triceps': ['Dumbbell Floor Press', 'Weighted Bench Dip', 'Standing Dumbbell Triceps Extension'],
                'forearms': ['Wrist Rotations with Straight Bar', 'Finger Curls', 'Standing Palms-Up Barbell Behind The Back Wrist Curl']
            },
            'legs': {
                'hamstrings': ['Romanian Deadlift with Dumbbells', 'Stiff-Legged Dumbbell Deadlift', 'Dumbbell Clean'],
                'quads': ['Dumbbell Squat', 'Dumbbell Goblet Squat', 'Dumbbell Lunges'],
                'calf': ['Standing Dumbbell Calf Raise']
            },
            'back': {
                'lower': ['Superman'],
                'middle': ['One-Arm Dumbbell Row', 'Bent Over Two-Dumbbell Row With Palms In', 'Bent Over Two-Dumbbell Row'],
                'lats': ['Pullups', 'Chin-Up', 'Wide-Grip Pull-Up', 'V-Bar Pullup', 'Wide-Grip Rear Pull-Up']
            }
        }

        const today = new Date();
        const month = today.getMonth() + 1;  // 1 - 12 (Jan to Dec)
        const day = today.getDay();  // 0 - 5 (Sun to Mon)
        
        const date = calendar[month][day];
        let workoutsToDo = [];
        for (var muscleIndex in date) {
            const muscle = date[muscleIndex];
            console.log(muscle);
            const targetMuscles = muscles[muscle];
            console.log(targetMuscles);
            let workoutToDo = {'muscleToDo': muscle, 'exercisesToDo': []};
            for (var targetMuscle in targetMuscles) {
                const exercises = targetMuscles[targetMuscle];
                const randomExercise = exercises[this.random(exercises.length)];
                workoutToDo['exercisesToDo'].push(randomExercise)
            }
            workoutsToDo.push(workoutToDo);
        }
        
        return workoutsToDo;
    }

    randomWorkout() {
        const workouts = this.generateWorkout();
        this.setState({workout: workouts})
    }

    render() {
        return (
            <div className='container mt-3 mb-3'>
                <div className='mb-5'>
                    <span onClick={this.randomWorkout} className='btn btn-primary'>Generate</span>
                </div>
                <div>
                    {
                        this.state.workout.map((workout, workoutIndex) =>
                            <div key={workoutIndex}>
                                <h1>{workout.muscleToDo}</h1>
                                <ul>
                                    {
                                        workout.exercisesToDo.map((exerciseToDo, exerciseToDoIndex) =>
                                            <li key={exerciseToDoIndex}>{exerciseToDo}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Workout;