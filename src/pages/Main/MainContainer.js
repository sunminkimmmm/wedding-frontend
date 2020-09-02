import React from "react";
import MainPresenter from "./MainPresenter";

const count = 3;
const data = [
  {
    gender: "female",
    name: { title: "ms", first: "angeles", last: "leon" },
    email: "angeles.leon@example.com",
    nat: "ES"
  },
  {
    gender: "male",
    name: { title: "mr", first: "dean", last: "wagner" },
    email: "dean.wagner@example.com",
    nat: "US"
  },
  {
    gender: "female",
    name: { title: "ms", first: "faustine", last: "fabre" },
    email: "faustine.fabre@example.com",
    nat: "FR"
  },
  {
    gender: "female",
    name: { title: "ms", first: "adriana", last: "gil" },
    email: "adriana.gil@example.com",
    nat: "ES"
  },
  {
    gender: "female",
    name: { title: "miss", first: "amy", last: "harcourt" },
    email: "amy.harcourt@example.com",
    nat: "CA"
  },
  {
    gender: "female",
    name: { title: "mrs", first: "kenzi", last: "foster" },
    email: "kenzi.foster@example.com",
    nat: "AU"
  },
  {
    gender: "female",
    name: { title: "ms", first: "alexis", last: "evans" },
    email: "alexis.evans@example.com",
    nat: "NZ"
  },
  {
    gender: "female",
    name: { title: "mrs", first: "ella", last: "denys" },
    email: "ella.denys@example.com",
    nat: "CA"
  },
  {
    gender: "male",
    name: { title: "mr", first: "senna", last: "sier" },
    email: "senna.sier@example.com",
    nat: "NL"
  }
];
/**
 * MainContainer
 */
// const MainContainer = () => <MainPresenter />;
class MainContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: []
  };

  /**
   *
   */
  componentDidMount() {
    this._handleLoadMore();
  }

  /**
   *
   */
  render() {
    return <MainPresenter {...this.state} onLoadMore={this._handleLoadMore} />;
  }

  _handleLoadMore = () => {
    this.setState({
      loading: true,
      initLoading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    });
    setTimeout(() => {
      this.setState(
        {
          list: data,
          initLoading: false,
          loading: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    }, 2300);
  };
}
export default MainContainer;
