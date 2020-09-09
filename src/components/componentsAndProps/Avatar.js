import React from "react";

const Avatar = ({ author: { avatarUrl, name } }) => {
    return <img src={avatarUrl} alt={name} className="avatar" />;
};

export default Avatar;
