import React from 'react'

type PropsType = {
  title: string
}

function Junior(props: PropsType) {
    return (
        <div>
          <h1>{props.title}</h1>
          <p>I am not a junior yet</p>

        </div>
    )
}

export default Junior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз