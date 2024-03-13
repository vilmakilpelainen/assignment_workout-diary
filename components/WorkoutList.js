import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useExerciseContext } from './Context';
import style from '../style/style';

const WorkoutList = () => {

  const { exercises, clearExerciseHistory, unit } = useExerciseContext();

  const sportTypeDistances = exercises.reduce((totals, exercise) => {
    if (!totals[exercise.sportType]) {
      totals[exercise.sportType] = 0;
    }
    totals[exercise.sportType] += exercise.distance;
    return totals;
  }, {});

  const renderExerciseItem = ({ item }) => (
    <View style={style.listcontainer}>
      <Text style={{fontSize: 20, padding: 5}}>{item.date}</Text>
      <Text style={style.listText}>{item.sportType}</Text>
      <Text style={{paddingLeft: 20, paddingBottom: 8, fontSize: 20}} >Distance: {item.distance.toFixed(2)} {unit}kilometers</Text>
      <Text style={{paddingLeft: 20, paddingBottom: 8, fontSize: 20}}>Duration: {item.duration} minutes </Text>
    </View>
  );

  const handleClearExerciseHistory = () => {
    Alert.alert(
      'Clear all workouts', 'Are you sure you want to clear all your workouts?',
      [
        {
          text: 'Cancel', style: 'cancel',
        },
        {
          text: 'OK', onPress: () => clearExerciseHistory(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={style.listcontainer}>
      {exercises.length > 0 ? (
        <>
        <View style={style.box}>
          {Object.entries(sportTypeDistances).map(([sportType, distance]) => (
            <View key={sportType} style={style.sumbox}>
              <Text > {sportType}: {distance.toFixed(2)}km</Text>
            </View>
          ))}
        </View>
          <FlatList
            data={exercises}
            renderItem={renderExerciseItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Clear all" onPress={handleClearExerciseHistory} />
        
        </>
      ) : (
        <Text style={style.text}>No saved workouts</Text>
      )}
    </View>
  );
};

export default WorkoutList;