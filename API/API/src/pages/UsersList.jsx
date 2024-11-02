import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { getUsers } from "../services/api.jsx";

function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Card
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <CardContent>
              <Typography variant="h6">{user.name}</Typography>
              <Typography color="textSecondary">{user.email}</Typography>
              <Typography>{user.company.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UsersList;
