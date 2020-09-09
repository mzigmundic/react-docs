import React from "react";

import UserInfo from "./UserInfo";

const Comment = ({ comment: { author, date, text } }) => {
    const formatDate = (date) => {
        return date.toLocaleString();
    };

    return (
        <div className="comment">
            <UserInfo author={author} />
            <div className="comment-text">{text}</div>
            <div className="comment-date">{formatDate(date)}</div>
        </div>
    );
};

export default Comment;
