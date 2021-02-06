import { Card,CardBody,CardTitle, CardText } from "reactstrap";
import React from 'react';

const ProductCardComponent = (props) =>{
    const {id, first_name, last_name, email } = props;
    return (
        <Card>
            <CardBody>
                <CardTitle>{id}</CardTitle>
                <CardText>{first_name}</CardText>
                <CardText>{last_name}</CardText>
                <CardText>{email}</CardText>
            </CardBody> 
        </Card>
    );
}

export default ProductCardComponent;