import { use } from "react"

export default function Users ({fetchUsers}) {

    const user = use(fetchUsers)
    return (
        <div style={{
            color: "red",
            border: "4px solid green",
            marginBottom: "18px",
            padding: "20px",
            borderRadius:"18px"
        }}>
            <h3>
                Users : {user.length}
            </h3>
        </div>
    )
}