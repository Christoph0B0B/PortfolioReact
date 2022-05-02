import {useState, useEffect} from 'react';
import Competency from './Competency';
import ApiService from "../../Api/ApiService";

export default function CompetencyList() {

    const [competencies, setCompetencies] = useState();

    // async function fetchOnRender() {
    //     const data = await ApiService.fetchDataFromApi('http://localhost:4000/competencies');
    //     setCompetencies(data);
    //     console.log("data:" + data);
    //
    // }

    useEffect(() => {
        // fetchOnRender().then((data)=>(setCompetencies(data.json())));
        const fetchData = async () => {
            const response = await ApiService.fetchDataFromApi('http://localhost:4000/competencies');
            setCompetencies(response);
        }
        fetchData();
        // fetchOnRender().then((data)=>(setCompetencies(data.json())));
        // const fetchData =  () => {
        //     const response =  ApiService.fetchDataFromApi('http://localhost:4000/competencies');
        //     setCompetencies(response);
        // }
        // fetchData();
    }, []);


    console.log("competencies:" + competencies);


    // console.log("competencies.languages.title: " + competencies.languages.title);
    return (
        <>
            {
                competencies.map(
                    (skill, index) => {
                    console.log("skill:"+ skill)
                      return  <Competency key={index} competencyData={skill[index]}/>;
                }

            )}
        </>
    );
}