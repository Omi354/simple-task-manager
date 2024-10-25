import CssBaseline from "@mui/material/CssBaseline";
import TaskInput from "./component/TaskInput";
import { Box, Container } from "@mui/material";
import TaskList from "./component/TaskList";
import { useTodo } from "./hook/useTodo";

function App() {
  const {
    handleTaskChange,
    handleDeadLineChange,
    addNewTask,
    toggleCheckBox,
    deleteTodo,
    newTask,
    newDeadLine,
    newTodoList,
  } = useTodo();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        <TaskInput
          handleTaskChange={handleTaskChange}
          handleDeadLineChange={handleDeadLineChange}
          addNewTask={addNewTask}
          newTask={newTask}
          newDeadLine={newDeadLine}
        />
        <Box mt={2}>
          <TaskList
            List={newTodoList}
            toggleCheckBox={toggleCheckBox}
            deleteTodo={deleteTodo}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
