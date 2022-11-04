import React, {FC} from 'react';
import {ProductProps} from "./Product.props";
import style from './Product.module.scss';
import {useGetProductQuery} from "../../redux/apiSlice";
import {useParams} from "react-router-dom";


const Product: FC<ProductProps> = ({...props}) => {
    const {idProduct} = useParams()

    const {data: product, isLoading} = useGetProductQuery({id: idProduct})

    return (
       isLoading
                ? <>"Loading..."</>
                : (
                    <div className={style.product} {...props}>
                        <img src={product?.image} width={600}/>
                        <div className={style.description}>
                            <h1>{product?.title}</h1>
                            <br/>
                            <p>price: {product?.price} $</p>
                            <br/>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                )
    );
};

export default Product;