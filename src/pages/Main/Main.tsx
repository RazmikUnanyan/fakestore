import React, {FC} from 'react';
import {MainProps} from "./Main.props";
import style from './Main.module.scss';
import {useGetProductsQuery} from "../../redux/apiSlice";
import {Card} from "../../components";

const Main: FC<MainProps> = () => {
    const {data: products = [], isLoading} =useGetProductsQuery()

    return (
        <div className={style.content}>
            {products.map( p => (
                <Card key={p.id}
                      image={p.image}
                      price={p.price}
                      title={p.title}
                      rating={p.rating}
                />
            ))}
        </div>
    );
};

export default Main;