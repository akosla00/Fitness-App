export const saveWorkouts = (workoutArr) => {
    if (workoutArr.length) {
        localStorage.setItem('saved_workouts', JSON.stringify(workoutArr));
    } else {
        localStorage.removeItem('saved_workouts');
    }
}

export const getSavedWorkouts = () => {
    const savedWorkouts = localStorage.getItem('saved_workouts')
        ? JSON.parse(localStorage.getItem('saved_workouts'))
        : [];

    return savedWorkouts;
}
