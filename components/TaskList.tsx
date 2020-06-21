import React from 'react';
import {TouchableOpacity, Text, View, FlatList, Image} from 'react-native';
import styles from './styles.css';
import {Task} from '../redux/types';

interface Props {
  delTask(value: number): void;
  tasks: Task[];
  handleEdit(el: Task): void;
}

const TaskList: React.FC<Props> = ({
  delTask,
  tasks,
  handleEdit,
}): JSX.Element => {
  return (
    <View>
      <FlatList
        keyExtractor={(item:any) => item.id}
        data={tasks}
        renderItem={({item}) => (
          <View style={styles.post}>
            <Text>{item.text}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
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
  );
};

export default TaskList;
