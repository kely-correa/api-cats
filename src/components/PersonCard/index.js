import React from 'react';
import { Img } from './styles';

const PersonCard = ({data}) => {
    console.log(data);
    return (
        <div>
            <Img src={`https://cataas.com/cat/${data.id}`}  />
        </div>
    );
}

export default PersonCard;