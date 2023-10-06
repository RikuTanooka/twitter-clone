import { Avatar, Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import db from "../../firebase";
import "./TweetBox.css";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState<string>("");
    const [tweetImage, setTweetImage] = useState<string>("");

    const sendTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            displayName: "プログラミングチュートリアル",
            username: "Shin_Enginner",
            verified: true,
            text: tweetMessage,
            avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
            image: tweetImage,
            timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <Avatar />
                <input
                    value={tweetMessage}
                    placeholder="いまどうしてる？"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTweetMessage(e.target.value)}
                ></input>
                <input
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="画像のURLを入力してください"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTweetImage(e.target.value)}
                ></input>
                <Button
                    className="tweetBox__tweetButton"
                    type="submit"
                    onClick={sendTweet}
                >
                    ツイートする
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
