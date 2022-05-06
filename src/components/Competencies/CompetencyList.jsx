import {useState, useEffect} from 'react';
import Competency from './Competency';
import ApiService from "../../Api/ApiService";
import "./CompetencyList.module.css";

export default function CompetencyList() {

    const [competencies, setCompetencies] = useState([]);

    async function fetchData() {
        const response = await ApiService.fetchDataFromApi('http://localhost:4000/competencies');
        setCompetencies(response);
    }

    useEffect(() => {
        // fetchOnRender().then((data)=>(setCompetencies(data.json())));

        //
        fetch('http://localhost:4000/competencies')
            .then((res) => res.json())
            .then((data) => {
                setCompetencies(data);
            })
            .catch((err) => {
                console.log(err);
            });

        // fetchOnRender().then((data)=>(setCompetencies(data.json())));
        // const fetchData =  () => {
        //     const response =  ApiService.fetchDataFromApi('http://localhost:4000/competencies');
        //     setCompetencies(response);
        // }
    }, []);


    return (
        <>
            <div className="jumbotron vertical-center">
                <div className="container">
                    {
                        competencies.map(
                            (competency, index) => {
                                return <Competency key={index} competencyData={competency}/>;
                            }
                        )}
                </div>
            </div>

        </>
    );
}