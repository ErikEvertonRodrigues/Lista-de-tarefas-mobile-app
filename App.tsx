import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {

  const [inputText, SetInputText] = useState('Texto padrão');

  type Task = {
    id: number
    text: string
    done: boolean
  }

  let tasks: Task[] = [];

  function createTask(id: number, taskText: string) {
    const newTask: Task = {
      id: id,
      text: taskText,
      done: false,
    }

    return newTask;
  }

  function addTask() {
    
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Digite o nome da tarefa: </Text>
          <TextInput
            style={styles.input}

          />
        </View>
          <Button
            title='Adicionar tarefa'
            onPress={() => addTask()}
          />
      </View>
      <View>
        <Text style={styles.tasksTitle}>Tarefas adicionadas</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 130,
  },

  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  inputText: {
    fontSize: 18,
    fontWeight: '600',
  },

  tasksTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
