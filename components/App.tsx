import React, {useState} from 'react';
import styles from './styles.css';
import {Provider} from 'react-redux';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
import ModalComponent from './Modal';
import store from '../redux/store';


interface Task {
  text: string;
  id: number;
}

const App: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [task, setTask] = useState<Task | null>(null);

  const addTask = (): void => {
    Keyboard.dismiss();
    !value
      ? Alert.alert('Empty post')
      : (setTasks([...tasks, {text: value, id: Number(Date.now())}]),
        setValue(''));
  };

  const delTask = (id: number): void => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  const editTask = (id: number, textValue: string) => {
    setTasks(tasks.map((el) => (id === el.id ? {...el, text: textValue} : el)));
  };

  return (
    <>
    {/* <Provider store={store}> */}
      <View style={styles.wrapper}>
        {flag && (
          <ModalComponent
            setFlag={setFlag}
            task={task}
            flag={flag}
            editTask={editTask}
          />
        )}
        {/* <Text>Hello World</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
          <Text style={styles.buttonTitle}>ADD TASK</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            keyExtractor={(item: any) => item.id}
            data={tasks}
            renderItem={({item}) => (
              <View style={styles.post}>
                <Text>{item.text}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => (setFlag(true), setTask(item))}>
                    <Image source={require('../ui/images/gtkedit.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => delTask(item.id)}>
                    <Image source={require('../ui/images/remove.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      {/* </Provider> */}
    </>
  );
};

export default App;
