import {useState, useEffect} from 'react';
import Competency from './Competency';
import ApiService from "../../Api/ApiService";
import data from '../../assets/simple.json';

export default function CompetencyList() {

    const [competencies, setCompetencies] = useState([]);


    //
    // var myArray = competencies.map(function(town){
    //     return town[2];
    // });
     async function fetchData ()  {
        const response = await ApiService.fetchDataFromApi('http://localhost:4000/competencies');
        setCompetencies(response);
    }

    useEffect(() => {
        // fetchOnRender().then((data)=>(setCompetencies(data.json())));

        //
        // fetch('http://localhost:4000/competencies')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setCompetencies(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // fetchOnRender().then((data)=>(setCompetencies(data.json())));
        // const fetchData =  () => {
        //     const response =  ApiService.fetchDataFromApi('http://localhost:4000/competencies');
        //     setCompetencies(response);
        // }
        fetchData();
    }, []);


    console.log("competencies:" + competencies);

    let competencies2 = [{"name": "languages", "description": ["englisch"]},
        {"name": "programmingLanguages", "description": ["c", "c++" , "java", "php"]},
        {"name": "certifications", "description": ["ISTQB Foundation Level", "Prince2 Foundation Level" ]}]

    return (
        <>

            {
                competencies.map(
                    (order, index) => {
                        console.log("order.name;:" + order.name);
                        console.log("order.description:" + order.description);
                        return <Competency key={index} competencyData={order}/>;
                    }
                )}
            }
        </>
    );
}