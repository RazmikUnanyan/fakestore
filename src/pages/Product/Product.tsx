import React, {FC} from 'react';
import {ProductProps} from "./Product.props";
import style from './Product.module.scss';
import {useGetProductQuery} from "../../redux/apiSlice";
import {useParams} from "react-router-dom";


const Product: FC<ProductProps> = ({...props}) => {
    const {idProduct} = useParams()

    const {data: product, isLoading} = useGetProductQuery({id: idProduct})

    return (
        <div {...props}>
            {JSON.stringify(product)}
        </div>
    );
};

export default Product;