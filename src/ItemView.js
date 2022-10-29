import React from "react";
import frog from "./statics/frog_stickers.jpg"
import Button from "./Button.js"
import "./ItemView.css"

function ItemView(){
    return(
        <div class="container">
            <div class = "image-holder">
                <img src={frog}/>
            </div>
            <div class = "text-box">
                <h2>
                    50 Pieces of Water Proof Froggy Stickers 
                </h2>
                <h3>Price: $6.99</h3>
                <div>
                    <Button name = "./buy" title = "Buy"/>
                </div>
                <div class="text">
                    <p>
                        <b>Brand: </b>Sunvalley <br/>
                        <b>Item Dimensions: </b> 4.72 x 2.36 x 0.5 inches <br/>
                        <b>Material: </b> Vinyl<br/>
                        <b>Theme: </b> Cartoon, Frog, Phone<br/>
                        <b>Special Feature: </b> Waterproof<br/>
                        <b>Age Range: </b> Kid<br/>


                        <b>About this item: </b>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    );
}

export default  ItemView;