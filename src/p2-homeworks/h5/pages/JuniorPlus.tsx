import React from 'react'

type PropsType = {
  title: string
}

function JuniorPlus(props: PropsType) {
    return (
        <div>
          <h1>{props.title}</h1>

          <p>I am not a junior yet</p>
          <p>But soon I will become a middle</p>
        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз