export interface Task {
    text: string;
    id: number;
  }

export const ADD_TASK="@ToDo/ADD";
interface ADD_TASK {
    type: typeof ADD_TASK,
    payload: Task
}

export const EDIT_TASK="@ToDo/EDIT";
interface EDIT_TASK {
    type: typeof EDIT_TASK,
    payload: Task
}

export const DELETE_TASK="@ToDo/DELETE";
interface DELETE_TASK {
    type: typeof DELETE_TASK,
    payload: number
}

export type actionsInterface = ADD_TASK | EDIT_TASK | DELETE_TASK