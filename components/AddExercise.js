import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'; 
import { SegmentedButtons, Button as PaperButton, TextInput } from 'react-native-paper';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useExerciseContext } from './Context'; 
import style from '../style/style';

const AddExercise = () => {
  const navigation = useNavigation();
  const {addExercise, unit } = useExerciseContext();
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState(new Date());


  const handleAddExercise = () => { 
    if (!sportType || !distance || !duration || !date) {
      alert('Fill in all fields!');
      return;
    }
    const exercise = {
      sportType,
      distance: parseFloat(distance), 
      duration: parseFloat(duration),
      date: date.toLocaleDateString(),
    };

    addExercise(exercise);
    navigation.navigate('Workout List'); 
  };

  const showDatePicker = () => {
    setDateVisible(true);
  };

  const handleDateChange = (event, Date) => {
    if (date === undefined) {
      setDateVisible(false);
    } else {
      setDate(date || new Date());
      setDateVisible(false); 
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={style.container}>
        <SegmentedButtons
          style={style.segmented}
          value={sportType}
          onValueChange={setSportType}
          buttons={[
            {
              value: 'Running',
              label: 'Run',
              icon: 'run',
              showSelectedCheck: ' ',
              style: {borderRadius: 9, backgroundColor: '#FF9C38'}
            },
            {
              value: 'Walking',
              label: 'Walk',
              icon: 'walk',
              showSelectedCheck: ' ',
              style: {borderRadius: 0, backgroundColor: '#FF9C38'}
            },
            {
              value: 'Swimming',
              label: 'Swim',
              icon: 'swim',
              showSelectedCheck: ' ',
              style: {borderRadius: 9, backgroundColor: '#FF9C38'}
            },
          ]}
        />
        <TextInput
          style={style.inputs}
          label={'Distance (km)'} 
          mode='outlined'
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
        />
        <TextInput
          style={style.inputs}
          label={'Duration (min)'}
          mode='outlined'
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
        <PaperButton style={{marginTop: 20}} onPress={showDatePicker}> Select Date </PaperButton>
        <Modal
          animationType='fade'
          transparent={true}
          visible={dateVisible}
          onRequestClose={() => setDateVisible(false)}
        >
          <View >
            <DateTimePicker
              style={style.calendar}
              value={date || new Date()}
              mode="date"
              display="inline"
              onChange={handleDateChange}
            />
          </View>
        </Modal>
        <PaperButton style={style.button} mode="contained-tonal" onPress={handleAddExercise}> ADD WORKOUT</PaperButton>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddExercise;