import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import { getBooks } from "../services/actions/books";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BookCard from "../components/BookCard";

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
    <div style={{padding: "0px 0px 0px 12px"}}>
      {books.length > 0 ? (
        <Masonry columns={{sx: 2, md: 3, lg: 5}} spacing={3}>
          {books.map((book) => (
            <>
            <BookCard book={book} key={book._id} />
          </>))}
        </Masonry>
      ) : (
        <div>Loading...</div>
      )}
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
