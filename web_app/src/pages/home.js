import React, { useState, useEffect } from "react";
import { getBooks } from "../services/actions/books";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HomePage = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    props
      .getBooks(props.auth)
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="landing-page-main-text">Books</div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5">
          <center>
            <div className="landing-page-main-div">
              {books.length > 0 ? (
                <div>
                  {books.map((book) => (
                    <div className="landing-page-supporting-text">
                      {book.title}
                    </div>
                  ))}
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </center>
        </div>
      </div>
      <br />
    </div>
  );
};

HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getBooks })(HomePage);
