import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
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
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <Button title='Add Goal' onPress={addGoalHandler}/>
                    <Button title='Cancel' onPress={endAddGoalHandler}/>
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});