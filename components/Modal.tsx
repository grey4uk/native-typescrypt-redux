import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles.css';

interface Task {
    text: string;
    id: number;
  }

interface Props {
    setFlag(flag:boolean):void,
    task: Task|null,
    flag:boolean,
    editTask(id: number, textValue: string):void
}

const ModalComponent: React.FC<Props> = ({setFlag,task,flag,editTask}):JSX.Element => {
const [value, setValue] = useState<string>(task?task.text:'');

  return (
    <Modal isVisible={flag}>
    <View style={{ flex: 1 }}>
    <TextInput
        style={styles.modalInput}
        value={value}
        onChangeText={value=>setValue(value)}
      />
      <TouchableOpacity onPress={() => (setFlag(false),task&&editTask(task.id,value))} style={styles.closeBtn}>
        <Image source={require('../ui/images/remove.png')} />
      </TouchableOpacity>
    </View>
  </Modal>
  );
};

export default ModalComponent;
