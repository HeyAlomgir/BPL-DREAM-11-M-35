import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const AvailablePlayers = ({player}) => {
    console.log(player);
    return (
        <>
   

   <div className=' container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>

    {player.map(player=>

                        <div className="card bg-base-100  shadow-sm">
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
            <button className="btn">Choose Player</button>
        </div>


    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    )}



   </div>


</>
    );
};

export default AvailablePlayers;