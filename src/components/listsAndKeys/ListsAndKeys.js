import React from "react";
import NumberList from "./NumberList";
import NumberList2 from "./NumberList2";
import Blog from "./Blog";

const ListsAndKeys = () => {
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
        { id: 1, title: "Title One" },
        { id: 2, title: "Title Two" },
        { id: 3, title: "Title Three" },
    ];

    return (
        <div>
            <NumberList numbers={numbers} />
            <NumberList2 numbers={numbers} />
            <Blog posts={posts} />
        </div>
    );
};

export default ListsAndKeys;
