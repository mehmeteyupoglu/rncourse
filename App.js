import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
    endAddGoalHandler()
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.index === id)
    })
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color={'#5e0acc'} onPress={startAddGoalHandler}/>
        {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
        
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} id={itemData.index} onDeleteItem={deleteGoalHandler}/>
            )
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    // backgroundColor: 'blue'
  },
  goalsContainer: {
    flex: 4
  }
});
