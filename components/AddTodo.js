import { useState } from "react";
import { TextInput, StyleSheet, Text, Button, View } from "react-native";

export default function AddTodo({ handleAdd }) {
  const [name, setName] = useState('')

  const handleChange = (val) => {
    setName(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={handleChange}
      />
        
      <View style={styles.button}>
        <Button
          onPress={() => handleAdd(name)}
          title='Add todo'
          color='green'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  button: {
    marginBottom: 15,
  }
})
