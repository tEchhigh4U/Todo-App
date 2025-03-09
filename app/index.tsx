import { Text, View, TextInput, Pressable, FlatList, StyleSheet, ColorSchemeName } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";

import AntDesign from '@expo/vector-icons/AntDesign';
import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter"
import { Octicons } from "@expo/vector-icons";

import { DataProps, data } from "@/data/todos"
import { ThemeContext } from "@/context/ThemeContext";


export default function Index() {

  const [todos, setTodos] = useState(data.sort((a,b) => b.id - a.id));

  const [text, setText] = useState("");

  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext);

  const [loaded, error] = useFonts({
    Inter_500Medium,
  })

  if (!loaded && !error) {
    return null
  }

  const styles = createStyles(theme, colorScheme);

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
        <Pressable
          onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
          style={{ marginLeft: 10 }}
        >
          {colorScheme === 'dark' 
          ? <Octicons name="moon" size={28} color={theme.text}
           selectable={undefined} style={{ width:28 }} />
          : <Octicons name="sun" size={28} color={theme.text}
          selectable={undefined} style={{ width:28 }} />}
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

interface Theme {
  background: string;
  button: string;
  text: string;
}

interface Styles {
  container: object;
  headerContainer: object;
  headerTitle: object;
  headerSubtitle: object;
  inputContainer: object;
  input: object;
  addButton: object;
  addButtonText: object;
  todoItem: object;
  todoItemID: object;
  todoText: object;
  completedText: object;
  versionText: object;
}

function createStyles(theme: Theme, colorScheme: ColorSchemeName): Styles {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.background,
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
      color: theme.text,
      marginBottom: 8,
    },
    headerSubtitle: {
      fontSize: 16,
      color: '#aaaaaa',
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
      width: "100%",
      maxWidth: 1024,
      marginHorizontal: 'auto',
      pointerEvents: 'auto',
    },
    input: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      fontSize: 18,
      fontFamily: "Inter_500Medium",
      minWidth: 0,
      color: 'white'
    },
    addButton: {
      backgroundColor: theme.button,
      borderRadius: 5,
      padding: 10,
    },
    addButtonText: {
      fontSize: 18,
      color: colorScheme === 'dark' ? 'black' : 'white',
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
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
    todoText: {
      flex: 1,
      fontSize: 18,
      fontFamily: "Inter_500Medium",
      color: theme.text,
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    versionText: {
      fontSize: 14,
      color: 'gray',
      marginTop: 8,
      marginBottom: 8,
      paddingLeft: 8,
      width: '100%',
      textAlign: 'right',  // Add this to align text to the right
      paddingRight: 8,     // Add some padding on the right side
    }
  });
}