import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Persona {
    id: number;
    rut: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
}

interface PersonasContextType {
    personas: Persona[];
}

export const  PersonasContext = createContext<PersonasContextType | undefined>(undefined);

export const PersonasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [personas, setPersonas] = useState<Persona[]>([]);

    const obtenerPersonas = async () => {
        const url = 'http://127.0.0.1:8000/api/personas/';
        const response = await axios.get<Persona[]>(url);
        setPersonas(response.data);
    };

    useEffect(() => {
        obtenerPersonas();
    }, []);

    return (
        <PersonasContext.Provider value={{ personas }}>
            {children}
        </PersonasContext.Provider>
    );
};
