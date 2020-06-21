import {ADD_TASK, EDIT_TASK, DELETE_TASK, Task, actionsInterface} from './types';

export const addTaskAction = (task: Task):actionsInterface => ({
  type: ADD_TASK,
  payload: task,
});

export const editTaskAction = (task: Task):actionsInterface => ({
  type: EDIT_TASK,
  payload: task,
});

export const delTaskAction = (id: number):actionsInterface => ({
  type: DELETE_TASK,
  payload: id,
});
