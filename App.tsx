import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';

export default function App() {

  const [inputText, onChangeInputText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  

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

  function toggleTaskDone(id: number, change: boolean) {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === id ? { ...task, done: change } : task
    ));
  }

  function removeTask(id: number) {
    setTasks(prevTasks => prevTasks.filter(task => 
      task.id !== id  
    ))
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
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
        <ScrollView style={{flex: 1, paddingTop:20, paddingBottom: 60}}>
          {
            tasks.map(item => (
              <View style={styles.taskContainer} key={item.id}>
                <Text style={styles.taskText}>
                  Tarefa: {item.text}
                </Text>
                <Text style={styles.taskText}>
                  Concluida: {item.done ? 'Concluida' : 'Pendente'}
                </Text>
                <Button 
                  title='concluir'
                  color='#0f0'
                  onPress={() => toggleTaskDone(item.id, true)}
                />
                <Button
                  title='Tornar pendente'
                  color='#e0ff2eff'
                  onPress={() => toggleTaskDone(item.id, false)}
                />
                <Button 
                  title='remover tarefa'
                  color='#f00'
                  onPress={() => removeTask(item.id)}
                />
              </View>
            ))
          }
        </ScrollView>
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
    justifyContent: 'flex-start',
    marginTop: 80,
    paddingBottom: 120,
  },

  topContainer: {
    marginBottom: 30,
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

  taskContainer: {
    backgroundColor: '#47b2ffff',
    borderRadius: 5,
    marginVertical: 10,
    padding: 20,
    flex: 1,
    height: 200,
    justifyContent: 'space-around',
  },

  taskText: {
    color: '#fff',
  }
});
