import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  type Task = {
    id: number
    text: string
    done: boolean
  }

  let tasks: Task[];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Digite o nome da tarefa: </Text>
        <TextInput
          style={styles.input}
        />
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
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 2,
    width: 100,
  },

  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputText: {
    
  }
});
