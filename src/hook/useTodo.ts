import { useState } from "react";
import { todo } from "../component/TaskItem";

export const useTodo = () => {
  const [newTask, setNewTask] = useState("");
  const [newDeadLine, setNewDeadLine] = useState("");
  const [newTodoList, setNewTodoList] = useState<todo[]>([]);

  // 新規タスク用の関数
  const handleTaskChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask(e.target.value);
  };
  const handleDeadLineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewDeadLine(e.target.value);
  };
  const addNewTask = () => {
    if (newTask === "" || newDeadLine === "") {
      alert("未入力項目があります");
      return;
    }

    setNewTodoList([
      ...newTodoList,
      {
        id: Date.now(),
        checkBox: false,
        task: newTask,
        deadline: newDeadLine,
        toggleCheckBox: toggleCheckBox,
        deleteTodo: deleteTodo,
      },
    ]);
    setNewTask("");
    setNewDeadLine("");
  };

  // 作成済タスク用の関数
  const toggleCheckBox = (id: number) => {
    setNewTodoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checkBox: !item.checkBox } : item
      )
    );
  };

  const deleteTodo = (id: number) => {
    setNewTodoList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return {
    handleTaskChange,
    handleDeadLineChange,
    addNewTask,
    toggleCheckBox,
    deleteTodo,
    newTask,
    newDeadLine,
    newTodoList,
  };
};
