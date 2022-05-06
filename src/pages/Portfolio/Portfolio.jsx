import CompetencyList from "../../components/Competencies/CompetencyList";

export default function Portfolio(){
    return (
        <>
            <div className="content-photo">Photo
                <img src={process.env.PUBLIC_URL + "/strichman.png"} alt="foto" className="rounded"/>
            </div>
            <div className="content-about">content-about
                <section>
                    <h2>Wer bin ich</h2>
                    <p>portfolio</p>
                </section>

                <div className="infotext">
                    <h2>infotext</h2>
                </div>
            </div>
            <div className="content-competencies">content-competencies
                <CompetencyList/>
            </div>
        </>

    );

}