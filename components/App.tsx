import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Alert, Keyboard} from 'react-native';
import styles from './styles.css';
import ModalComponent from './Modal';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import {Task} from '../redux/types';
import {RootState} from '../redux/rootReducer';
import {addTaskAction,editTaskAction,delTaskAction} from '../redux/actions';

const App: React.FC = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log('tasks :>> ', tasks);
  // const [tasks, setTasks] = useState<Array<Task>>([]);
  const [task, setTask] = useState<Task | null>(null);

  const addTask = (value: string): void => {
    Keyboard.dismiss();
    !value
      ? Alert.alert('Empty post')
      // : setTasks([...tasks, {text: value, id: Number(Date.now())}]);
      :dispatch(addTaskAction({text: value, id: Number(Date.now())}))
  };

  const delTask = (id: number): void => {
    // setTasks(tasks.filter((el) => el.id !== id));
    dispatch(delTaskAction(id));
  };

  const editTask = (id: number, textValue: string): void => {
    dispatch(editTaskAction({text:textValue,id}))
    // setTasks(tasks.map((el) => (id === el.id ? {...el, text: textValue} : el)));
    setTask(null);
  };

  const handleEdit = (el: Task): void => {
    setTask(el);
  };

  return (
   
      <View style={styles.wrapper}>
        {task && <ModalComponent task={task} editTask={editTask} />}
        <AddTaskForm addTask={addTask} />
        <TaskList delTask={delTask} tasks={tasks} handleEdit={handleEdit} />
      </View>
   
  );
};

export default App;
