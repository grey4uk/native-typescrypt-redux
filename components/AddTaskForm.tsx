import React,{useState} from 'react';
import {TextInput,TouchableOpacity,Text} from 'react-native';
import styles from './styles.css';

interface Props {
    addTask(value:string):void
}

const AddTaskForm: React.FC<Props> = ({addTask}):JSX.Element => {
    const [value, setValue] = useState<string>('');

    return (
        <>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={()=>(addTask(value),setValue(''))}>
          <Text style={styles.buttonTitle}>ADD TASK</Text>
        </TouchableOpacity>
        </>
    );
}

export default AddTaskForm;