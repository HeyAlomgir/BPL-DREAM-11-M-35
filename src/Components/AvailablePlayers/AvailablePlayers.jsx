import React from 'react';

import PlayerCard from './PlayerCard';

const AvailablePlayers = ({player,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
    // console.log(player);
   
    return (
        <>
   

   <div className=' container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>



                   {player.map(player=>

            <PlayerCard key={player.playerName } player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></PlayerCard>

    )}

   


   </div>


</>
    );
};

export default AvailablePlayers;