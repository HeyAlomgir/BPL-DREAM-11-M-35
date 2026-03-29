import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import Selected from '../Selected/Selected';

const Player = ({playerPromise,setCoin,coin}) => {
    const player=use(playerPromise)
    // console.log(player);

    const [selectType,setSelectType]=useState("available")
    // console.log(selectType);

    const [selectedPlayers,setSelectedPlayers]=useState([]);
    return (
        <>
        <div className='container mx-auto'>


            <div className=' flex justify-between items-center mt-32 mb-4 m-4 '>
                {selectType==="available"?
                <h1 className='md:text-3xl font-bold'>Available Players</h1>:
                <h1 className=' md:text-3xl font-bold '>Selected Players({selectedPlayers.length}/{player.length})</h1>}


                <div>

                <button 
                onClick={()=> setSelectType("available")}
                className={`btn ${selectType === "available"?  "bg-[#E7FE29]":""} rounded-r-none rounded-l-xl`}>Available</button>

                <button 
                onClick={()=>setSelectType("selected")}
                className={`btn ${selectType === "selected"?  "bg-[#E7FE29]":""} rounded-l-none rounded-r-xl`}>
                    Selected({selectedPlayers.length})
                    </button>

                </div>


            </div>
            


          
            {
                selectType==="available" ?
                <AvailablePlayers player={player} setCoin={setCoin} coin={coin}  setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></AvailablePlayers>:

                <Selected
                 selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                 coin={coin}
                 setCoin={setCoin}
                 ></Selected>
            }
        </div>

        </>
    );
};

export default Player;