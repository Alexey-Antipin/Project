import {
  Error,
  Footer,
  Header,
  News,
  NewsDetailed,
} from "../components/index";
import "./index.scss";

export const App = () => {
  return (
    <div>
      <Header />
      {/* <News /> */}
      {/* <NewsDetailed/> */}
      <Error />
      <Footer />
    </div>
  );
};
