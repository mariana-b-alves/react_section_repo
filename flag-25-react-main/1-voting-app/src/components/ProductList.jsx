import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";

function ProductList() {
    const [prods, setProds] = useState(products) //initalState
    const [descendent, setDescendent] = useState(false);

        //const product = products[3];

        //Sort -> Usar .sort é má prática porque faz mutação à array.

    const handleProductVote = (id, vote) => {
        console.log(`Foi votado o produto com o id:${id}`);

        const updateProducts = prods.map( p => {
            if (p.id === id){
                return {...p, votes: p.votes + vote}
            } else {
                return p;
            } 
        })
        setProds(updateProducts);
       /*  products.map( p => {
            if (p.id === id){
                p.votes = p.votes + 1;
                console.log(p.votes);
            } 
        })*/
    }

    const changeSort = () => {
        setDescendent(!descendent)
    }


    const sortedProducts = prods.sort(( a, b ) => (descendent ? (a.votes - b.votes):(b.votes - a.votes)));

    const productComponents = sortedProducts.map( product =>(
        <Product 
                /* {...product} */
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.url}
                votes = {product.votes}
                productImageUrl = {product.productImageUrl}
                submitterAvatarUrl = {product.submitterAvatarUrl}
                changeVote = {handleProductVote}

            />
    ))
    return (
        <section className="ui unstackable items">
            <button onClick={changeSort}>Up/Down</button>
            {productComponents}
        </section>
    );
}

export default ProductList;