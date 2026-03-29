import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Selected = ({selectedPlayers, setSelectedPlayers,coin,setCoin}) => {
    console.log(selectedPlayers);
    const handleDeleteSelectedPlayer=(player)=>{
        console.log(player);

    const filterdPlayers = selectedPlayers.filter(playerSelected => 
        playerSelected.playerName !== player.playerName);
    setSelectedPlayers(filterdPlayers)
     setCoin(coin + player.price)
    }
    return (
        <div>
            <div className='space-y-5'>
                {
                   selectedPlayers.length===0?
                   <div className='text-center border space-y-4 p-5 rounded-md m-4'>
                    <h2 className='text-bold text-3xl'>Subscribe to our Newsletter</h2>
                    <p>Get the latest updates and news right in your inbox!</p>

                    <div className='flex gap-4 justify-center'>
                        <input type="email" name="" id="" placeholder='Enter your email' className='border rounded-md'/>
                        <button className='btn btn-warning'>Subscribe</button>
                    </div>

                   </div> 
                   :selectedPlayers.map(player =>{

                      return  <div className='flex justify-between items-center border p-5 rounded-2xl'>

                            <div className='flex items-center gap-4'>

                            <img className='h-18 rounded-md w-auto' src={player.playerImg} alt={player.playerName} />
                        
                    
                                <div >

                                <h2 className='flex items-center gap-2 font-semibold'> <FaRegUser></FaRegUser> {player.playerName}</h2>

                                <p>{player.playerType} </p>

                                </div>                          
                           
                        </div>

                        <div >
                            <button 
                            onClick={()=>handleDeleteSelectedPlayer(player)}
                             className='btn text-3xl'> <MdDelete></MdDelete></button>
                            </div>
                        </div>

                      
                    })
                }
            </div>
        </div>
    );
};

export default Selected;