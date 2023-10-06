import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar(): JSX.Element {
    return (
        <div className="sidebar">
            {/*ツイッターアイコン*/}
            <TwitterIcon className="sidebar__twitterIcon" />

            {/*Sidebaroption */}
            <SidebarOption
                text="ホーム"
                Icon={HomeIcon}
                active
            />
            <SidebarOption
                text="話題を検索"
                Icon={SearchIcon}
            />
            <SidebarOption
                text="通知"
                Icon={MailOutlineIcon}
            />
            <SidebarOption
                text="メッセージ"
                Icon={NotificationsNoneIcon}
            />
            <SidebarOption
                text="ブックマーク"
                Icon={BookmarkBorderIcon}
            />
            <SidebarOption
                text="リスト"
                Icon={ListAltIcon}
            />
            <SidebarOption
                text="プロフィール"
                Icon={PermIdentityIcon}
            />
            <SidebarOption
                text="もっとみる"
                Icon={MoreHorizIcon}
            />

            {/*ツイートぼたん */}
            <Button
                variant="outlined"
                className="sidebar__tweet"
                fullWidth
            >
                ツイートする
            </Button>
        </div>
    );
}

export default Sidebar;
