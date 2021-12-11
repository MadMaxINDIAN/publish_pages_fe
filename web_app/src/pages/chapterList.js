import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChapters } from "../services/actions/books";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ChapterSummaryComponent = (props) => {
  const [open, setOpen] = useState(false);
  const chapter = props.chapter;
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      style={{
        transition: "all 0.2s ease",
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "9px",
        margin: "10px",
      }}
    >
      {chapter.number} - {chapter.title}{" "}
      {open && (
        <div
        style={{
          fontSize: "0.8em",
        }}
        >
          <div dangerouslySetInnerHTML={{ __html: chapter.summary }} />
        </div>
      )}
    </div>
  );
};

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
    <div style={{
      padding: "10px",
    }}>
      {chapterList ? (
        <div className="landing-page-supporting-text">
          {chapterList.length === 0 ? (
            <>No chapters found</>
          ) : (
            <>
              <h1 style={{
                padding: "10px",
              }}>Chapter List</h1>
                {chapterList.map((chapter) => (
                    <ChapterSummaryComponent chapter={chapter} />
                ))}
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
