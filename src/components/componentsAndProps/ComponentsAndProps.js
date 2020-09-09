import React from "react";

import Comment from "./Comment";

const ComponentsAndProps = () => {
    const comment1 = {
        date: new Date(),
        text: "Mali miš pojo velikog slona!",
        author: {
            name: "Mini Moj",
            avatarUrl: "https://placekitten.com/g/64/64",
        },
    };
    const comment2 = {
        date: new Date(),
        text: "I hope you enjoy learning React!",
        author: {
            name: "Hello Kitty",
            avatarUrl: "https://placekitten.com/g/64/64",
        },
    };
    const comment3 = {
        date: new Date(),
        text: "Vjetar puhao sto nas sat!",
        author: {
            name: "Uragan",
            avatarUrl: "https://placekitten.com/g/64/64",
        },
    };

    return (
        <div className="comments">
            <Comment comment={comment1} />
            <Comment comment={comment2} />
            <Comment comment={comment3} />
        </div>
    );
};

export default ComponentsAndProps;
