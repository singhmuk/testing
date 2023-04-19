import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Line, Pie } from "react-chartjs-2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    fetch("https://blob-internal.goblitz.ai/quickdump/sales-data")
      .then((res) => res.json())
      .then((mocks) => setMocks(mocks));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <table>
        <tr>
          <th>PRODUCTLINE</th>
          <th>SALES</th>
        </tr>
      </table> */}
      {mocks.map((items, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={6} md={8}>
            <Item>{items.PRODUCTLINE}</Item>
          </Grid>

          <Grid item xs={6} md={4}>
            <Item>{items.SALES}</Item>
          </Grid>
          <br />
        </Grid>
      ))}
    </Box>
  );
};

export default App;
