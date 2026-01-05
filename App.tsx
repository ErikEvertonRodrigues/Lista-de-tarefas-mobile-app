import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList } from 'react-native';

export default function App() {

  const [inputText, onChangeInputText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([])

  type Task = {
    id: number
    text: string
    done: boolean
  }

  function createTask(id: number, taskText: string): Task {
    return {
      id: id,
      text: taskText,
      done: false,
    }
  }

  function addTask() {
    if (inputText.trim() === '') return;

    setTasks(prevTasks => {
      const id = prevTasks.length === 0 ? 0 : prevTasks[prevTasks.length - 1].id + 1; 
      return [...prevTasks, createTask(id, inputText)];
    });

    onChangeInputText('');
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Digite o nome da tarefa: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeInputText}
            placeholder='Digite a tarefa'
            value={inputText}
          />
        </View>
          <Button
            title='Adicionar tarefa'
            onPress={() => addTask()}
          />
      </View>
      <View>
        <Text style={styles.tasksTitle}>Tarefas adicionadas</Text>
        {
          tasks.map(item => (
            <View key={item.id}>
              <Text>
                Tarefa: {item.text}
              </Text>
              <Text>
                Concluida: {item.done ? 'Concluida' : 'Pendente'}
              </Text>
            </View>
          ))
        }
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
