import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";

type PropsType = {
  title: string
}

function Junior(props: PropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <HW7/>
      <HW8/>
      <HW9/>
      <HW10/>
    </div>
  )
}

export default Junior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз