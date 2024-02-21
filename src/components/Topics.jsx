import React from "react";
import "./topics.css";

function Topics() {
  return (
    <>
      <div className="top_head">
        <h1 id="top_h1">-TOPICS-</h1>
        <p id="top_p">TO BE COVERED</p>
      </div>
      <div className="top_content">
        <div>
          <p className="top_1">
            Overview on IPR, copyright, trade marks, patents and trade secrets
            Drafting of Patent and filing procedure
          </p>
        </div>
        <div>
          <p className="top_2">
            Introduction to Journal paper along with discussion of Case Studies
            Licensing and Technology Transfer
          </p>
        </div>
        <div>
          <p className="top_3">IP Enforcement and Litigation</p>
        </div>
        <div>
          <p className="top_4">Open Innovation and Collaborative Research</p>
        </div>
        <div>
          <p className="top_5">IPR Management and emerging trends in it</p>
        </div>
        <div>
          <p className="top_6">
            Benefits of having a patent and its industrial importance
          </p>
        </div>
      </div>
    </>
  );
}

export default Topics;
