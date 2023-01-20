import React from 'react'
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "React is back", 
        "Top news - 999 readers"
      )}
      {newsArticle(
        "The best programming languages 2022",
        "Top news - 882 readers"
      )}
      {newsArticle(
        "Bitcoin breaks $60k", 
        "Top news - 480 readers"
      )}
      {newsArticle(
        "What is the Client State Management?",
        "Top news - 600 readers"
      )}
      {newsArticle(
        "Frontend development roadmap 2023",
        "Top news - 712 readers"
      )}
      {newsArticle(
        "How to be a programmer",
        "Top news - 203 readers"
      )}
    </div>
  );
}

export default Widgets