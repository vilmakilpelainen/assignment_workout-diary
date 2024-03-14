import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useExerciseContext } from './Context';
import style from '../style/style';

const WorkoutList = () => {
  const { exercises, clearExerciseList, unit } = useExerciseContext();

  const calculateDistances = exercises.reduce((acc, curr) => {
    const { sportType, distance } = curr;
    acc[sportType] = acc[sportType] || 0;
    acc[sportType] += distance;
    return acc;
  }, {});

  const renderExerciseItem = ({ item }) => (
    <View style={style.listcontainer}>
      <Text style={{fontSize: 20, padding: 5}}>{item.date}</Text>
      <Text style={style.listText}>{item.sportType}</Text>
      <Text style={{paddingLeft: 20, paddingBottom: 8, fontSize: 20}} >Distance: {item.distance.toFixed(2)} {unit}kilometers</Text>
      <Text style={{paddingLeft: 20, paddingBottom: 8, fontSize: 20}}>Duration: {item.duration} minutes </Text>
    </View>
  );

  const handleClearExerciseList = () => {
    Alert.alert(
      'Clear all workouts', 'Are you sure you want to clear all your workouts?',
      [
        {
          text: 'No', style: 'cancel',
        },
        {
          text: 'Yes', onPress: () => clearExerciseList(),
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
          {Object.entries(calculateDistances).map(([sportType, distance]) => (
            <View key={sportType}>
              <Text > {sportType}: {distance.toFixed(2)}km</Text>
            </View>
          ))}
        </View>
          <FlatList
            data={exercises}
            renderItem={renderExerciseItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Clear all" onPress={handleClearExerciseList} />
        
        </>
      ) : (
        <Text style={style.text}>No logged workouts.</Text>
      )}
    </View>
  );
};

export default WorkoutList;