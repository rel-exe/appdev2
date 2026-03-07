import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function Todo() {

  const [search, setSearch] = useState('')
  const [todo, setTodo] = useState("")

  const [todoList, setTodoList] = useState([
    { id: 1, text: "study for practical exam in appdev", completed: false },
    { id: 2, text: "finish todo page", completed: true },
  ])

  const filteredTodo = todoList.filter(item =>
    item.text.toLowerCase().includes(search.toLowerCase())
  )

  const addTodo = () => {
    if (!todo.trim()) return

    setTodoList([
      {
        id: Date.now(),
        text: todo.trim(),
        completed: false
      },
      ...todoList
    ])

    setTodo("")
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  const confirmDelete = (id) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTodo(id) }
    ])
  }

  const toggleTodo = (id) => {
    setTodoList(todoList.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Todo List</Text>

      {/* Search */}
      <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={20} color="#555" />
        <TextInput
          placeholder="Search..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Todo List */}
      <ScrollView style={styles.todoList}>
        {filteredTodo.map(item => (
          <View style={styles.todoContainer} key={item.id}>

            <TouchableOpacity
              style={styles.todoTextWrapper}
              onPress={() => toggleTodo(item.id)}
            >
              <Ionicons
                name={item.completed ? "checkmark-circle" : "ellipse-outline"}
                size={26}
                color="#e761e7"
              />

              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completed
                ]}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {item.text}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
              <Ionicons name="trash-outline" size={26} color="#e761e7" />
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView>

      {/* Add Todo */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.addWrapper}>
          <View style={styles.inputContainer}>
            <Ionicons name="create-outline" size={20} color="#555" />

            <TextInput
              placeholder="Add todo"
              style={styles.input}
              value={todo}
              onChangeText={setTodo}
            />

            <TouchableOpacity onPress={addTodo}>
              <Ionicons name="add-circle" size={30} color="#e761e7" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#e990cc',
    marginBottom: 15
  },

  input: {
    flex: 1,
    marginLeft: 10
  },

  todoList: {
    marginTop: 10
  },

  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f6d3ef',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10
  },

  todoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10
  },

  todoText: {
    flex: 1,
    fontSize: 16
  },

  completed: {
    textDecorationLine: 'line-through',
    color: '#777'
  },

  addWrapper: {
    marginTop: 10,
    marginBottom: 25
  }

})