import CssBaseline from "@mui/material/CssBaseline";
import TaskInput from "./component/TaskInput";
import { Box, Container } from "@mui/material";
import TaskList from "./component/TaskList";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        <TaskInput />
        <Box mt={2}>
          <TaskList />
        </Box>
      </Container>
    </>
  );
}

export default App;
