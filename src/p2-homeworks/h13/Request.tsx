import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestPostApi} from "./api";
import {useState} from "react";

type ResponseType = {
  data: {
    errorText: string
    info: string
  }
  status: number
}

export const Request = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [response, setResponse] = useState<ResponseType>({
    data: {
      errorText: '-',
      info: '-',
    },
    status: 0
  });

  const setPostRequest = () => {
    requestPostApi(checked)
      .then(res => {
        setResponse(res)
      })
      .catch(error => {
        setResponse({...error.response})
      })
  }

  return (
    <div>
      <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
      <p><SuperButton onClick={setPostRequest}>API</SuperButton></p>
      <p>Status: {response.data.errorText}</p>
      <p>Info: {response.data.info}</p>
    </div>
  )
}
