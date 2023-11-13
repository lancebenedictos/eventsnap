import { useQuery } from "@tanstack/react-query";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { checkUser } from "./api/auth";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["organizer"],
    queryFn: checkUser,
  });

  if (isLoading) return <h1>loading</h1>;

  return <>{data === null ? <LandingPage /> : <Home />}</>;
}

export default App;
