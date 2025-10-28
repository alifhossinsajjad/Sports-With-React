import { use } from "react"

export default function Friend({friend}) {
    console.log(friend);
    const {name, email, address,phone} = friend;
    return (
        <div style={{
            color: "Blue",
            border: "4px solid yellow",
            marginBottom: "18px",
            padding: "20px",
            borderRadius: "18px"
        }}>
            <h4 >
                Name : {name}
            </h4>
            <p>Phone : {phone} </p>
            <p>Email : {email} </p>
            {/* <p>Address : {address} </p> */}
        </div>
    )
}