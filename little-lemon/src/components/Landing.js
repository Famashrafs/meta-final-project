import {React} from "react";
import { Link } from 'react-router-dom';
import Specials from "./Specials";
import restauranfood from "../icons_assets/restauranfood.jpg"
function Landing() {
    return (
        <>
            <section className="landing">
                <div className="container">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist
                    </p>
                    <Link to="/booking"> Reserve a Table</Link>
                </div>
                <img src={restauranfood} alt="pic"/>
            </section>
            <Specials />
        </>
    );
}

export default Landing;
