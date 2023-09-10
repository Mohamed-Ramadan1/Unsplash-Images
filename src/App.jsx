import TheamToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  return (
    <>
      <main>
        <TheamToggle />
        <SearchForm />
        <Gallery />
      </main>
      <ReactQueryDevtools />
    </>
  );
};
export default App;
