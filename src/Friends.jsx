import { use } from "react"
import Friend from "./Friend"

export default function Friends ({friendsData}){

    const friends = use(friendsData)
    return(
         <div style={{
            color: "Blue",
            border: "4px solid yellow",
            marginBottom: "18px",
            padding: "20px",
            borderRadius:"18px"
        }}>
            <h3>
                Friends : {friends.length}
            </h3>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}/>)
            }
        </div>
    )
}