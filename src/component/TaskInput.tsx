import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const TaskInput: React.FC = () => {
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
          id="filled-basic"
          label="新規タスク"
          variant="filled"
          sx={{ borderRadius: 4 }}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          id="filled-basic"
          label="期限"
          variant="filled"
          sx={{ borderRadius: 4 }}
        />
      </Grid>
      <Grid>
        <Button variant="contained">追加</Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
