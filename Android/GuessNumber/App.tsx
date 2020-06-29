/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

function check(str) {
  var re = /^(?:[1-9]?\d|100)$/;
  if (re.test(str)) {
    return true;
  }
  return false;
}

const App = () => {
  const [text, setText] = React.useState('');
  const currentNumber = React.useRef(getRandomNumber());
  const num = React.useRef(0);

  function doGuess() {
    if (!check(text)) {
      Alert.alert('你输入的不是一个数字，请重新输入！');
      return;
    }

    const inputNumber = Number(text);
    num.current++;

    if (inputNumber > currentNumber.current) {
      Alert.alert('大了！');
    } else if (inputNumber < currentNumber.current) {
      Alert.alert('小了！');
    } else {
      Alert.alert(`您一共猜了${num.current}次！`);
      num.current = 0;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        keyboardType="numeric"
        placeholder="请输入一个数字"
      />
      {/* <Button style={styles.button} title="王"></Button> */}
      <TouchableOpacity style={styles.button} onPress={doGuess}>
        <Text style={styles.buttonText}>猜一下</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 50,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 12,
    // 水平方向
    paddingHorizontal: 15,
    fontSize: 26,
  },
  button: {
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 20,
    width: 100,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default App;
