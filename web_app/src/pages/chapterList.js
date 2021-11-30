import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChapters } from "../services/actions/books";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ChapterList = (props) => {
  const [chapterList, setChapterList] = useState();
  const { bookId } = useParams();
  useEffect(() => {
    props
      .getChapters(props.auth, bookId)
      .then((res) => {
        setChapterList(res.data.book.chapters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {chapterList ? (
        <div className="landing-page-supporting-text">
          {chapterList.length === 0 ? (
            <>No chapters found</>
          ) : (
            <>
              <h1>Chapter List</h1>
              <ul>
                {chapterList.map((chapter) => (
                  <li key={chapter._id}>{chapter.title}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ) : (
        <div className="landing-page-supporting-text">Loading...</div>
      )}
      <br />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

ChapterList.propTypes = {
  auth: PropTypes.object.isRequired,
  getChapters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getChapters })(ChapterList);
