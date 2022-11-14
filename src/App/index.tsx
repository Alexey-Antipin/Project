import {
  Header,
  Contacts,
  Error,
  News,
  NewsDetailed,
  Footer,
} from "../components/index";
import "./index.scss";

export const App = () => {
  return (
    <div>
      <Header />
      {/* <News /> */}
      {/* <NewsDetailed/> */}
      {/* <Error /> */}
      <Contacts/>
      <Footer />
    </div>
  );
};
