import { Box, Button, Checkbox, Typography } from "@mui/material";

export type todo = {
  id: number;
  checkBox: boolean;
  task: string;
  deadline: string;
  deleteTodo: (id: number) => void;
  toggleCheckBox: (id: number) => void;
};

const TaskItem: React.FC<todo> = ({
  id,
  checkBox,
  task,
  deadline,
  toggleCheckBox,
  deleteTodo,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        textDecoration: checkBox ? "line-through" : "none",
        bgcolor: checkBox ? "text.disabled" : "none",
        gap: 2,
      }}
    >
      <Checkbox checked={checkBox} onClick={() => toggleCheckBox(id)} />
      <Box sx={{ flexGrow: 2, mx: 10 }}>
        <Typography>{task}</Typography>
      </Box>
      <Typography>{deadline}</Typography>
      <Button variant="outlined" onClick={() => deleteTodo(id)}>
        削除
      </Button>
    </Box>
  );
};

export default TaskItem;
