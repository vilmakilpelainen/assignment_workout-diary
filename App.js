import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExerciseProvider } from './components/Context';
import AddExercise from './components/AddExercise';
import WorkoutList from './components/WorkoutList';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ExerciseProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WORKOUT DIARY" component={Screens} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExerciseProvider>
  );
};

const Screens = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Add Workout') {
            iconName ='add' ;
          } else if (route.name === 'Workout List') {
            iconName = 'view-list';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Add Workout" component={AddExercise} />
      <Tab.Screen name="Workout List" component={WorkoutList} />
    </Tab.Navigator>
  );
};




export default App;
