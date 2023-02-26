import axios from "axios";

export const getProductAPI = async (getProductParams) => {
  let res = await axios.get(
    `https://shy-headscarf-tuna.cyclic.app/products`,
    getProductParams
  );
  return res.data;
};

export const postProductAPI = async (data) => {
  let res = await axios.post(
    `https://shy-headscarf-tuna.cyclic.app/products`,
    data
  );
  return res.data;
};

// export const patchProductAPI = async (id, data) => {
//   let res = await axios.patch(
//     `https://shy-headscarf-tuna.cyclic.app/products/${id}`,
//     data
//   );
//   return res.data;
// };



export async function patchProductAPI(id, quantity) {
  try {
    const response = await axios.patch(
      `https://shy-headscarf-tuna.cyclic.app/products/${id}`,
      { quantity }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


export const deleteProductAPI = async (id) => {
  let res = await axios.delete(
    `https://shy-headscarf-tuna.cyclic.app/products/${id}`
  );
  return res.data;
};

