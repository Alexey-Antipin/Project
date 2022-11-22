import {
  Header,
  Contacts,
  Error,
  News,
  NewsDetailed,
  Authorization,
  Registration,
  Footer,
} from "../components";
import "./index.scss";

export const App = () => {
  return (
    <div>
      <Header />
      {/* <News /> */}
      {/* <NewsDetailed/> */}
      {/* <Error /> */}
      <Contacts />
      {/* <Authorization /> */}
      {/* <Registration /> */}
      <Footer />
    </div>
  );
};
