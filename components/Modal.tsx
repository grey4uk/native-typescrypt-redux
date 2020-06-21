import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles.css';

import {Task} from '../redux/types';

interface Props {
    task: Task|null,
    editTask(id: number, textValue: string):void
}

const ModalComponent: React.FC<Props> = ({task,editTask}):JSX.Element => {
const [value, setValue] = useState<string>(task?task.text:'');

  return (
    <Modal isVisible={!!task}>
    <View style={{ flex: 1 }}>
    <TextInput
        style={styles.modalInput}
        value={value}
        onChangeText={value=>setValue(value)}
      />
      <TouchableOpacity onPress={() => (task&&editTask(task.id,value))} style={styles.closeBtn}>
        <Image source={require('../ui/images/remove.png')} />
      </TouchableOpacity>
    </View>
  </Modal>
  );
};

export default ModalComponent;
