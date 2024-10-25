import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

type Props = {
  handleTaskChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDeadLineChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addNewTask: () => void;
  newTask: string;
  newDeadLine: string;
};

const TaskInput: React.FC<Props> = ({
  handleTaskChange,
  handleDeadLineChange,
  addNewTask,
  newTask,
  newDeadLine,
}) => {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid>
        <TextField
          fullWidth
          value={newTask}
          id="filled-basic"
          label="新規タスク"
          variant="filled"
          sx={{ borderRadius: 4 }}
          onChange={(e) => handleTaskChange(e)}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          value={newDeadLine}
          type="date"
          id="filled-basic"
          label="期限"
          variant="filled"
          sx={{ borderRadius: 4 }}
          onChange={(e) => handleDeadLineChange(e)}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => addNewTask()}>
          追加
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
