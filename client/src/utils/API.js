// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  console.log(userData)
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const getExercises = async () => {
  const response = await fetch('/api/exercises', {
      method: 'GET',
  });
  const data = await response.json();
  return data;
}

export const getPremadeWorkouts = async () => {
  const response = await fetch('/api/workouts', {
      method: 'GET',
  });
  const data = await response.json();
  return data;
}

export const addWorkout = async (workoutData, token) => {
  return fetch('api/workouts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workoutData)
  });
}