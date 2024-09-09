import { Component } from "react";
import'./card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        console.log("CardList render()")
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, email, id} = monster;
                    return (
                        <div className='card-container'>
                            <img alt={`moster ${name}`}
                                src={`https://robohash.org/${id*2}?set=set1&size=180x180`}
                            />

                            <h2>{name} </h2>
                            <p>{email} </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;