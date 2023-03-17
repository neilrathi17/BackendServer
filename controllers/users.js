import User from "../models/user";
//----------READ-------------------

export const getUser =async(req,res) =>{
    try{
        const {id}=req.params;
        const user=await user.findById(id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
}

export const getUserFriend =async(req,res)=>{
    try{
        const {id}=req.params;
        const user = await user.findById(id);
    
        const {friends} = await Promise.all(
            user.friends.map((id)=>user.findById(id))
        );

        const formattedFriends=friends.map(
            ({_id,fristName,lastName,occupation,location,picturePath})=>
            {return {_id,fristName,lastName,occupation,location,picturePath}}
        );
        res.status(200).json(formattedFriends)
    
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
    
}


//-------------UPDATE--------------
export const addRemoveFriend=async(req,res)=>{
    try{
        const {id,friendId}=req.params;
        const user=await user.findById(id);
        const friend=await user.findById(friendId);


        if(user.friends.includes(friendId)){
            user.friends=user.friends.filter((id)=>id!==friendId);
            friend.friends=friend.friends.filter((id)=>id!==id)
        }
        else{
            user.friends.push(friendId);
            friend.friends.push(id)
        }
        await user.save();
        await friend.save();

        const {friends} = await Promise.all(
            user.friends.map((id)=>user.findById(id))
        );
        const formattedFriends=friends.map(
            ({_id,fristName,lastName,occupation,location,picturePath})=>
            {return {_id,fristName,lastName,occupation,location,picturePath}}
        );
        res.status(200).json(formattedFriends)

    }
    catch(err){
        res.status(404).json({message:err.message});
    }
}