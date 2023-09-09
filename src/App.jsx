import TheamToggle from "./ThemeToggle";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "./context";
const App = () => {
  const { greating } = useGlobalContext();
  console.log(greating);
  return (
    <main>
      Unsplash Images Starter
      <TheamToggle />
      <Gallery />
      <SearchForm />
      <h1>Hello</h1>
    </main>
  );
};
export default App;
