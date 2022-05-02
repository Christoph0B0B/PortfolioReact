import {useState, useEffect} from 'react';
import Competency from './Competency';
import ApiService from "../../Api/ApiService";

export default function CompetencyList() {

    const [competencies, setCompetencies] = useState([]);

     function fetchData() {
         ApiService.fetchDataFromApi('http://localhost:4000/competencies').then(response => response.json()).then(data => setCompetencies(data));
    }


    useEffect( () => {
         fetchData();
    }, []);


    // console.log("competencies:" + competencies);
    //
    //
    // console.log("competencies.languages.title: " + competencies.languages.title);
    return (
        <>
            {

                competencies && competencies.map(
                    (skill, index) => {
                    console.log("skill:"+ skill.languages)
                      return  <Competency key={index} competencyData={skill.content[index]}/>;
                }

            )}
        </>
    );
}