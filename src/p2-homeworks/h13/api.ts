import axios from "axios";

export const requestPostApi = (checked: boolean) => {
  return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: checked}
  )
  //   .then(res => {
  //     console.log(res)
  //     return res;
  // })
  //   .catch(error => {
  //     console.log({...error})
  //     console.log( error.response ? error.response.data.errorText : error.message )
  //     return {...error.response}
  //   })
}
