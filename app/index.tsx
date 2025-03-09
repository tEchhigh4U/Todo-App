import { Text, View, TextInput, Pressable, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

import { DataProps, data } from "@/data/todos"

export default function Index() {

  const [todos, setTodos] = useState(data.sort((a,b) => b.id - a.id));

  const [text, setText] = useState("");

  const addTodo = () => {
    if(text.trim()){
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{
        id: newId,
        title: text,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: null
      }, ...todos]);

    setText('');
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
}

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const renderItem = ({ item }: { item: DataProps }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoItemID}>
        {item.createdAt.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })}
        </Text>

      <Text style={[
        styles.todoText, 
        item.isCompleted && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <AntDesign name="delete" size={28} color="red" selectable={undefined}/>
      </Pressable>
    </View>
  )
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>TODO App</Text>
        <Text style={styles.headerSubtitle}>Help you manage your daily tasks</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please input your task here..."
          value={text}
          placeholderTextColor="gray"
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id.toString()}
        contentContainerStyle={ {flexGrow: 1 }}
      />

      <Text style={styles.versionText}>Version: 1.0.0</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: 'black' 
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Subtle darker border
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(244,244,244)', 
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#aaaaaa',
    textAlign: 'center',
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    width: "100%",
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
  },
  input:{
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 18,
    minWidth: 0,
    color: 'white'
  },
  addButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: 'black'
  },
  todoItem: {
    flexDirection: 'row',
    alignItems:  'center',
    justifyContent: 'space-between',
    gap: 6,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
  },
  todoItemID: {
    color: 'white',
    fontSize: 18,
    marginRight: 8,
  },
  todoText:{
    flex: 1,
    fontSize: 18,
    color: 'white',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  versionText: {
    fontSize: 10,
    color: 'gray',
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    width: '100%',
    textAlign: 'right',  // Add this to align text to the right
    paddingRight: 8,     // Add some padding on the right side
  }
})