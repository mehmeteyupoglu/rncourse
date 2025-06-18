import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function GoalItem({itemData, onDeleteItem}) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#9'}} onPress={onDeleteItem.bind(this, itemData.item.index)}>
                <Text style={styles.goalText}>{itemData.item}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  goalItem : {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
});