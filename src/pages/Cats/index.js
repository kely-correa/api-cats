import React, { useCallback, useState, useEffect } from 'react';
import PersonCard from '../../components/PersonCard';
import api from '../../services/api';

const Cats = () => {
    const [gatinhos, setGatinhos] = useState([]);

    const loadingCats = useCallback(async () => {
        try {
            const response = await api.get(`/api/cats`);
            if (response.data) setGatinhos(response.data);            
        } catch (error) {
            console.log("Erro ao acessar a API");
        }
    }, []);

    useEffect(() => {
        loadingCats();
    }, [loadingCats]);

    return(
        <>
            <h1>Gatos</h1>
            <ul>                
                {gatinhos.map((cat) => {                    
                    return(                        
                        <PersonCard data={cat} />
                    );              
                })}
            </ul>
        </>
    );
}

export default Cats;