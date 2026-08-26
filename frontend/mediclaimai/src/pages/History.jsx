import React, { useEffect, useState } from "react";
import "../styles/History.css";

function History() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        setHistory([
            {
                id: 1,
                date: "19 Jul 2026",
                age: 22,
                bmi: 22.5,
                smoker: "No",
                predictedCost: "₹2,635",
                risk: "Low"
            },
            {
                id: 2,
                date: "18 Jul 2026",
                age: 35,
                bmi: 29.4,
                smoker: "Yes",
                predictedCost: "₹18,420",
                risk: "High"
            }
        ]);

    }, []);

    return (

        <div className="history-container">

            <h1>Prediction History</h1>

            <table>

                <thead>

                    <tr>

                        <th>Date</th>
                        <th>Age</th>
                        <th>BMI</th>
                        <th>Smoker</th>
                        <th>Prediction</th>
                        <th>Risk</th>

                    </tr>

                </thead>

                <tbody>

                    {history.map((item) => (

                        <tr key={item.id}>

                            <td>{item.date}</td>
                            <td>{item.age}</td>
                            <td>{item.bmi}</td>
                            <td>{item.smoker}</td>
                            <td>{item.predictedCost}</td>
                            <td>

                                <span className={item.risk === "High" ? "high" : "low"}>

                                    {item.risk}

                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default History;