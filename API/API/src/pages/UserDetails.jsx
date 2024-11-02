import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { getUser, getUserAlbums } from "../services/api.jsx";

function UserDetails() {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([getUser(id), getUserAlbums(id)]).then(
      ([userResponse, albumsResponse]) => {
        setUser(userResponse.data);
        setAlbums(albumsResponse.data);
      }
    );
  }, [id]);

  if (!user) return null;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography gutterBottom>{user.email}</Typography>
      <Typography gutterBottom>{user.phone}</Typography>
      <Typography gutterBottom>{user.website}</Typography>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Albums
      </Typography>
      <Grid container spacing={3}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/albums/${album.id}`)}
            >
              <CardContent>
                <Typography>{album.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserDetails;
