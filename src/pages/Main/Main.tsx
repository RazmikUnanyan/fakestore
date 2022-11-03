import React, {FC} from 'react';
import {MainProps} from "./Main.props";
import style from './Main.module.scss';
import {useGetProductsQuery} from "../../redux/apiSlice";
import {Card} from "../../components";
import {useNavigate} from "react-router-dom";

const Main: FC<MainProps> = ({...props}) => {

    const {data: products = [], isLoading} = useGetProductsQuery()
    const navigate = useNavigate();

    return (
        <div className={style.content} {...props}>
            {products.map( p => (
                <Card key={p.id}
                      image={p.image}
                      price={p.price}
                      title={p.title}
                      rating={p.rating}
                      onClick={() => navigate(`/${p.id}`)}
                />
            ))}
        </div>
    );
};

export default Main;