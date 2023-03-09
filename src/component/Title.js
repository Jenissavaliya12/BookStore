import React from 'react'


const  Title = (props) => {
    const {title , name } = props;
    return (
    <div>
      <h1>Hello  {title}  and this for {name}</h1>
    </div>
  )
}

export default Title;

