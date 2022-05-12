import { useQuery } from "react-query";
import { getMoives } from "../api";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMoives);
  console.log(data, isLoading);

  return <div style={{ height: "200vh" }}>Home</div>;
}

export default Home;
