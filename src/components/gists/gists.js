import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists, getGistsName } from "../../store/gists";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
export const Gists = () => {
  // const [gists, setGists] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const getGists = async () => {
  //   try {
  //     setIsLoading(true);

  //     const result = await fetch(URL);
  //     const data = await result.json();

  //     if (result.status === 200) {
  //       setGists(data);
  //     } else {
  //       setError("test");
  //     }
  //   } catch (e) {
  //     setError(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getGists();
  // }, []);

  const dispatch = useDispatch();
  const { gists, error, pending, gistsName, errorName, pendingName } =
    useSelector((state) => state.gists);
  useSelector((state) => state.gistsName);

  useEffect(() => {
    dispatch(getGists());
    dispatch(getGistsName());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>error !!!!</h1>
      </div>
    );
  }

  if (pending) {
    return (
      <div>
        <h1>isLoading ....</h1>
      </div>
    );
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} component={Paper} padding={5}>
          <h1>Gists page</h1>
          {Array.from({ length: 10 })
            .map((_, index) => index + 1)
            .map((item) => (
              <button onClick={() => dispatch(getGists(item))} key={item}>
                {item}
              </button>
            ))}
          {gists.map((gist, index) => (
            <div key={index}>
              <h2>
                {gist.description || (
                  <span style={{ fontWeight: "bold" }}>no description</span>
                )}
              </h2>
              <hr />
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} component={Paper} padding={5}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            onChange={(e) => dispatch(getGistsName(e.target.value))}
          />
          {gistsName.map((gist, index) => (
            <div key={index}>
              <h2>
                {gist.description || (
                  <span style={{ fontWeight: "bold" }}>no description</span>
                )}
              </h2>
              <hr />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
