
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerHr, setlowerHr] = useState(0)
  const [upperHr, setupperHr] = useState(0)

  useEffect(() => {
    if (age !== '') {
      const maxHeartRate = 220 - age;
      const lowerLimit = Math.round(maxHeartRate * 0.65);
      const upperLimit = Math.round(maxHeartRate * 0.85);
      setlowerHr(lowerLimit);
      setupperHr(upperLimit);
    }
  }, [age]);

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style = {styles.field} value={age} onChangeText={text => setAge(text)} 
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Hr limits</Text>
      <Text style={{ ...styles.field, flexDirection: 'row', alignItems: 'center' }}>
         {lowerHr.toFixed(2)} - {upperHr.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});
