export const deleteproduct=async(id)=>{
    console.log(id);
try{
    let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/cart/${id}`,{
        method:"DELETE",
    });
    let res1=await res.json();
    console.log(res1);return res1;
}
catch(er){
    console.log(er);
}
} ;
export const addproduct=async(obj)=>{
 
try{
    let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/cart`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });
    let res1=await res.json();
    console.log(res1);
    
}
catch(er){
    console.log(er);
}
} 