import PropTypes from "prop-types";

export default function Competency(prop) {

    return (
        <div>

            <dl className="row">
                <dt className="col-sm-3">{prop.competencyData.name}: </dt>
                <dd className="col-sm-9">{prop.competencyData.description}</dd>
            </dl>

        </div>
    );

    competencies: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.array
    })
}