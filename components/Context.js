import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = createContext();

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]); 

  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async () => {
    try {
      const storedExercises = await AsyncStorage.getItem('exercises');
      if (storedExercises !== null) {
        setExercises(JSON.parse(storedExercises));
      }
    } catch (error) {
      console.error('Error loading', error);
    }
  };

  const addExercise = async (exercise) => {
    try {
      const updatedExercises = [...exercises, exercise];
      setExercises(updatedExercises);
      await 
      AsyncStorage.setItem('exercises', JSON.stringify(updatedExercises));
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  const clearExerciseList = async () => {
    try {
      setExercises([]);
      await 
      AsyncStorage.removeItem('exercises');
    } catch (error) {
      console.error('Error clearing workout list:', error);
    }
  };

  return (
    <Context.Provider value={{ 
      exercises, 
      addExercise, 
      clearExerciseList, 
    }}>
      {children}
    </Context.Provider>
  );
};

export const useExerciseContext = () => React.useContext(Context);