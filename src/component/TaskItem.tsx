import { Box, Checkbox, Typography } from "@mui/material";

type Props = {
  checkBox: boolean;
  task: string;
  deadline: string;
};

const TaskItem: React.FC<Props> = ({ checkBox, task, deadline }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Checkbox checked={checkBox} />
      <Box sx={{ flexGrow: 2, mx: 10 }}>
        <Typography>{task}</Typography>
      </Box>
      <Typography>{deadline}</Typography>
    </Box>
  );
};

export default TaskItem;
