import { useState } from 'react';
import { Alert, FlatList, StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'clean room' },
    { id: 2, name: 'buy milk' },
    { id: 3, name: 'play GTA' },
  ])

  const handleAdd = (name) => {
    if(name.length < 5) {
      Alert.alert('OOPS!', 'Todo must be over 5 chars long', [
        {text: 'Close', onPress: () => console.log('Alert closed')}
      ])
      return
    } 
      
    let lastId = todos.length
    setTodos(prevTodos => ([...prevTodos, {name: name, id: lastId + 1 }]))

    Keyboard.dismiss()
  }

  const handleDelete = (id) => {
    console.log(id);
    setTodos(prevState => prevState.filter(prev => prev.id !== id))
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAdd={handleAdd}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                  item={item} 
                  handleDelete={handleDelete}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
    flex: 1
  },
  list: {
    flex: 1,
  }
});
