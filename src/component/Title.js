import React from 'react'


const  Title = (props) => {
    const {field} = props;
    return (
    <div>
      <h2>This is id {field.id},This is title {field.title}, {field.description}</h2>
    </div>
  )
}

export default Title;

