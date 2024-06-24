import React from "react";
import greekSalad from "../icons_assets/greek salad.jpg"
import bruchetta from "../icons_assets/bruchetta.svg"
import lemonDessert from "../icons_assets/lemon dessert.jpg"
function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
                <div className="articles">
                    <article>
                        <img src={greekSalad} alt="product-1"/>
                        <div className="product-content">
                            <div className="namePrice">
                                <p className="name">Greek Salad</p>
                                <p className="price">$12.99</p>
                            </div>
                            <p className="description">
                                The famous greek salad of crispy lettuce,
                                peppers, olives and our Chicago style fota cheese,
                                garnished with crunchy garlic and rosemary croutons
                            </p>
                            <a href="#order">Order a delivery</a>
                        </div>
                    </article>
                    <article>
                        <img src={bruchetta} alt="product-2"/>
                        <div className="product-content">
                            <div className="namePrice">
                                <p className="name">Bruchetta</p>
                                <p className="price">$5.99</p>
                            </div>
                            <p className="description">
                                Our Bruschetta is made from grilled bread
                                that has been smeared with garlic and seasoned
                                with salt and olive all
                            </p>
                            <a href="#order">Order a delivery</a>
                        </div>
                    </article>
                    <article>
                        <img src={lemonDessert} alt="product-3"/>
                        <div className="product-content">
                            <div className="namePrice">
                                <p className="name">Lemon Dessert</p>
                                <p className="price">$5.00</p>
                            </div>
                            <p className="description">
                                This comes straight from grandma's recipe book,
                                every last ingredient has been sourced and is as
                                authentic as can be imagined.
                            </p>
                            <a href="#order">Order a delivery</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Specials;
