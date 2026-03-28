import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Player = ({playerPromise}) => {
    const player=use(playerPromise)
    // console.log(player);
    return (
        <div className='container mx-auto'>
            <p className='text-3xl font-bold my-5'>Player : {player.length}</p>


            <AvailablePlayers player={player}></AvailablePlayers>
          
        </div>
    );
};

export default Player;