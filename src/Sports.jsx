import { useState } from "react"

export default function Batsman() {

    const [runs = 0, setRuns] = useState(0)

    const [sixes, setSixes] = useState(0)
    const [four, setFour] = useState(0)



    const handleSingle = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);

    }

    const handleSix = () => {
        const newRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(newRuns); 
    }


    const handleFour = () => {
        const newRuns = runs + 4;
        const updateFour = four + 1;
        setFour(updateFour);
        setRuns(newRuns) ;
    }
    return (
        <div style={{
            color: "yewllo",
            border: "4px solid green",
            marginBottom: "18px",
            padding: "20px"
        }}>
            <h2>Runs : {runs}</h2>

                <p>six : {sixes}</p>
                <p>Four : {four}</p>
            {
                runs > 50 && <p>your score is : 50</p> 
            }

            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Singles</button>
            <button onClick={handleSix}>Six </button>

        </div>
    )
}