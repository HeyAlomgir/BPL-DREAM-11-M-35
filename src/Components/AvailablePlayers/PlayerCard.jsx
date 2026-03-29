import React, { useState } from 'react';

import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlayerCard = ({player,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
     const [iselected,setIselected]=useState(false);


     
    const newCoin =coin-player.price;
     const handleChosePlayer=()=>{

          if(newCoin >=0){

             setCoin(newCoin);
         }else{
            toast.error("Not enough coin to purchase this player")
            return
         }


        toast.success(`${player.playerName} is selected`);
         setIselected(true);

       setSelectedPlayers([...selectedPlayers,player])


     }
    return (
        <>

  <div className="card bg-base-100  shadow-sm m-4">
  <figure>
    <img className='w-full h-96 '
      src={player.playerImg} />
  </figure>

  <div className="card-body">


    <div className='flex items-center gap-2'>
        <FaUser className='text-2xl'></FaUser>
    <h2 className="card-title">{player.playerName} </h2>
    </div>

        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <FaFlag></FaFlag>
                <p>{player.playerCountry} </p>
            </div>
            <button className='btn'>{player.playerType} </button>
        </div>


        <div className='divider'></div>

        <h2 className=' text-2xl'>Rating ({player.rating})</h2>


        <div className='flex justify-between'>

        <p className='font-bold'>{player.battingStyle} </p>
        <h6 className='font-bold'>{player.bowlingStyle}</h6>

   
        </div>


        <div className='flex justify-between'>


            <p >Price : ${player.price} </p>

            <button className="btn"
             onClick={handleChosePlayer}

            disabled={iselected ? true : false}>

                {iselected===true ? "Selected":"Chose Player"}

                </button>


        </div>


    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </>
  
    );
};

export default PlayerCard;