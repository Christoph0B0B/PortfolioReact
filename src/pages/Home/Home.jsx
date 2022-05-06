import style from './Home.module.css'
export default function Home() {
    return (
        <div>
            <h1>Home</h1>

            <div className="content-photo">
                <img src={process.env.PUBLIC_URL + "/homeBild.png"} alt="foto" className={style.img}/>
            </div>
        </div>
    );
}