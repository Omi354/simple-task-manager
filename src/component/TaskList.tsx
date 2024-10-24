// type TodoList = {
//   checkBox: boolean
//   task: string
//   deadline: string
// }

import { Box, Stack, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const List = [
    { checkBox: false, task: "掃除", deadline: "2022/10/10" },
    { checkBox: false, task: "洗濯", deadline: "2022/10/11" },
    { checkBox: false, task: "買い物", deadline: "2022/10/12" },
  ];

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
              checkBox={todo.checkBox}
              task={todo.task}
              deadline={todo.deadline}
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default TaskList;
