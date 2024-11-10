import React, { useContext } from 'react';
import { PersonasContext } from '../../context/PersonaContext';

export const OpcionMenu: React.FC = () => {
    const context = useContext(PersonasContext);

    if (!context) {
        throw new Error('OpcionMenu debe estar dentro de un PersonasProvider');
    }

    const { personas } = context;

    return (
        <div>
            <ul>
                {
                personas.length > 0 ? personas.map((persona) => (
                    <li key={persona.id}>{persona.apellido_paterno}</li>
                )) : 'no hay data'
                }
            </ul>
        </div>
    );
};
