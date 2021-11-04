import React from 'react'
import HW11 from "../../h11/HW11";

type PropsType = {
  title: string
}

function JuniorPlus(props: PropsType) {
    return (
        <div>
          <h1>{props.title}</h1>
          <HW11/>

        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз