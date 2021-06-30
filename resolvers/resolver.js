
import User from '../models/user';


export const resolvers ={
Query:{
    hello: () => {
        return 'hello World witj'
    },
    numb : () => 2,
    greet:(root,data)=>{
        return `valor obtenido ${data.name}`
    },
    users: async ()=>{
    return await User.find();
    }
   
},
Mutation:{
    async createUser(_,{input}){
    
        const newUser = new User(input);
        await newUser.save();
        return newUser;

    },
    async deleteUser(_,{_id}){
         
        return await User.findByIdAndDelete(_id);
    },
    async updateUser(_,{_id,input}){

        return await User.findByIdAndUpdate(_id,input,{new:true});

    }
},





}