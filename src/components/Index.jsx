import React from "react";

//Components
import IndexNavbar from "./Navbars/IndexNavbar.jsx";
import PageHeader from "./PageHeader/PageHeader.jsx";
import Footer from "./Footer/Footer.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
        <PageHeader />
        <Footer />
        </div>
      </>
    );
  }
}

export default Index;
