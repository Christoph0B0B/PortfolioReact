import PropTypes from "prop-types";

export default function Competency(prop ) {

    console.log("competency prop title:" + prop.name);
    console.log("competency prop title:" + prop.competencyData.description);

    return (

        <div className="col-2">
            {/*<ul className="list-group">*/}
            {/*    <li className="list-group-item">hobbies</li>*/}
            {/*    <li className="list-group-item">Dapibus ac facilisis in</li>*/}
            {/*    <li className="list-group-item">Morbi leo risus</li>*/}
            {/*    <li className="list-group-item">Porta ac consectetur ac</li>*/}
            {/*    <li className="list-group-item">Vestibulum at eros</li>*/}
            {/*</ul>*/}
            <h1>Competency start</h1>
            <dl className="row">
                <dt className="col-sm-3">{prop.competencyData.name}</dt>
                <dd className="col-sm-9">{prop.competencyData.description}</dd>
            </dl>
            <h1>Competency ende</h1>
        </div>
    );
    competencies: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.array
    })
}