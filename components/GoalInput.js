import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    function endAddGoalHandler() {
        props.onCancel()
    }

    return (
        <Modal animationType='fade'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <Button title='Add Goal' onPress={addGoalHandler} color={'#5e0acc'}/>
                    <Button title='Cancel' onPress={endAddGoalHandler} color={'#f31282'}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});