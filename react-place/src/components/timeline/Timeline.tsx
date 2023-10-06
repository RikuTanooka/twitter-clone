import { DocumentData, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import db from "../../firebase";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

function Timeline(): JSX.Element {
    const [posts, setPosts] = useState<DocumentData[]>([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));
        /*
        getDocs(q).then((querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
        */

        /* リアルタイムで反映*/
        onSnapshot(q, (querySnapShot) => {
            setPosts(querySnapShot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="timeline">
            {/*Header  */}
            <div className="timeline__header">
                <h2>ホーム</h2>
            </div>

            {/*TweetBox */}
            <TweetBox />

            {/*Post 複数*/}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.varifi}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Timeline;
