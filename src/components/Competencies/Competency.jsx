import PropTypes from "prop-types";

export default function Competency(prop ) {

    console.log("competency prop title:" + prop.name);
    console.log("competency prop title:" + prop.competencyData.description);

    return (

        <div className="col-2">
            <ul className="list-group">
                <li className="list-group-item">{prop.competencyData.name}</li>
                prop.competencyData.description.f

                {prop.competencyData.description.map((item,i) =>
                    <li className="list-group-item" key={i}>{item.name}</li>
                )}

            </ul>
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