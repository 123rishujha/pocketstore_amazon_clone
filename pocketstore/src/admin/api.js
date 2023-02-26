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
    let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/products`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });
    let res1=await res.json();
   console.log(res1);
    return res1;
    
}
catch(er){
    console.log(er);
}
} ;

export const getallproducts=async()=>{
let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/products`);
let res1=await res.json();
return res1;
}

// for updating quantity of product
export const updatequantity=async(id,bd)=>{
    console.log(id,bd);
    let obj={"quantity":bd}
    let res=await fetch(`https://shy-headscarf-tuna.cyclic.app/products/${id}`,{
        method:"PATCH",
body:JSON.stringify(obj),
headers:{
    "Content-Type":"application/json"
}
    });
    // let res1=await res.json();
    return res
    // console.log(res1);
};
export const login=async(obj)=>{
let res=await fetch(`https://reqres.in/api/login`,{
method:"POST",
body:JSON.stringify(obj),
headers:{
    "Content-Type":"application/json"
}
});
let res1=await res.json();
return res1.token
}
