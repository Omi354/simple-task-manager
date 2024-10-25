import { Box, Stack, Typography } from "@mui/material";
import TaskItem, { todo } from "./TaskItem";

type Props = {
  List: todo[];
  toggleCheckBox: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TaskList: React.FC<Props> = ({ List, toggleCheckBox, deleteTodo }) => {
  return (
    <>
      <Typography variant="h4" align="center">
        TODO List
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>state</Typography>
        <Box sx={{ flexGrow: 2, mx: 10 }}>
          <Typography>task</Typography>
        </Box>
        <Typography>deadline</Typography>
      </Box>
      <Stack spacing={2}>
        {List.map((todo, index) => (
          <Stack key={index}>
            <TaskItem
              id={todo.id}
              checkBox={todo.checkBox}
              task={todo.task}
              deadline={todo.deadline}
              toggleCheckBox={() => toggleCheckBox(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default TaskList;
