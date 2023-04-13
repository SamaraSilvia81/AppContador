import { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Text} from 'react-native-paper';

export default function App() {
  const [counter, setcounter] = useState(0);

  function increment(){
    setcounter(counter+1)
  }

  function decrement(){
    setcounter(counter-1)
  }

  function clean(){
    setcounter(counter == 0)
  }

  return (
    <View style={styles.container}>
       <Text style={styles.result}>Counter: {counter}</Text>
      <View style={styles.btn}>
        <View style={styles.push}>
          <Button color='#5CE1E6' mode="contained" onPress={() => increment()}>
            +
          </Button>
        </View>
        <View style={styles.clean}>
          <Button color='#5CE1E6' mode="contained" onPress={() => clean()}>
            Clean
          </Button>
        </View>
        <View style={styles.minus}>
          <Button color='#5CE1E6' mode="contained" onPress={() => decrement()}>
            -
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:300,
    backgroundColor: '#fff',
  },
  btn:{
    flexDirection: 'row',
    alignSelf: 'center',
  },
  clean:{
    marginRight: 5,
    marginLeft: 5,
  },
  result: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
