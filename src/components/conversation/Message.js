import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";

export default function Message({menu}){
    return(
        <div className="p-3">
            <div className="d-flex flex-column gap-3">
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            // timeline
                            return <Timeline el={el}/>
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // img msg
                                    return <MediaMsg el={el} menu={menu}/> 
                                case "doc":
                                    // doc msg
                                    return <DocMsg el={el} menu={menu}/>
                                case "link":
                                    // link msg
                                    return <LinkMsg el={el} menu={menu}/>
                                case "reply":
                                    // reply msg
                                    return <ReplyMsg el={el} menu={menu}/>
                            
                                default:
                                    // Text Msg
                                    return <TextMsg el={el} menu={menu}/>
                            }
                            break;
                    
                        default:
                            break;
                    }
                })}
            </div>
        </div>
    )
}