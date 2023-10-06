import { Search } from "@mui/icons-material";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input
                    placeholder="キーワード検索"
                    type="text"
                />
            </div>
            <div className="widgets__widgetsContainer">
                <h2>いまどうしてる？</h2>

                {/*ライブラリの使用 */}
                <TwitterTweetEmbed tweetId={"1704670966209511832"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="OECU_official"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://twitter.com/OECU_official"}
                    options={{ text: "#React.tsx勉強中", via: "OECU_official" }}
                />
            </div>
        </div>
    );
}

export default Widgets;
