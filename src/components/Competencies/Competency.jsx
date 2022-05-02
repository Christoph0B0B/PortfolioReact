import PropTypes from "prop-types";

export default function Competency(prop) {

  // console.log("competency prop title:"+ prop.competencyData.title);
  // console.log("competency prop title:"+ prop.competencyData.title);

    return(

    <div className="col-2">
        {/*<ul className="list-group">*/}
        {/*    <li className="list-group-item">hobbies</li>*/}
        {/*    <li className="list-group-item">Dapibus ac facilisis in</li>*/}
        {/*    <li className="list-group-item">Morbi leo risus</li>*/}
        {/*    <li className="list-group-item">Porta ac consectetur ac</li>*/}
        {/*    <li className="list-group-item">Vestibulum at eros</li>*/}
        {/*</ul>*/}

        <dl className="row">
            <dt className="col-sm-3">{prop.competencyData.languages.title}</dt>
            <dd className="col-sm-9">{prop.competencyData.languages.content}</dd>
            {/*<dt className="col-sm-3">prop.competencyData.title</dt>*/}
            {/*<dd className="col-sm-9">prop.competencyData.content</dd>*/}
        </dl>
    </div>
    );
    competencies: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.array
    })
}