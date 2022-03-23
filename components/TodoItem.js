import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({ item, handleDelete }) {
  return (
    <TouchableOpacity
      onPress={() => handleDelete(item.id)}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <AntDesign name="delete" size={24} color="crimson" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 36,
    marginBottom: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },
  text: {
    fontSize: 20
  }
})
