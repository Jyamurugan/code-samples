import React from 'react';
import Card from './Card';

export const CardList = ({ robots }) => {
    const cards = robots.map(({id, name, email}) => {
        return (
            <Card key={id} id={id} name={name} email={email} />
        );
    });
    return (
        <div>
            {cards}
        </div>
    );
}

export default CardList;