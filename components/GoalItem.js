import { StyleSheet, Text } from 'react-native';


export default function GoalItem({text}) {
    return (
        <Text style={styles.goalItem}>{text}</Text>
    )
}

const styles = StyleSheet.create({
  goalItem : {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});