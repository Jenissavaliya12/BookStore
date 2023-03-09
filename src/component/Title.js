import React from 'react'
import "./Title.css"

const  Title = (props) => {
    // const {field} = props;
    const {title,description} = props;
    return (
    <div className='Container'>
        
        <p className='primary'>I'm {title} and I'm a  {description}</p>


      {/* <h2>This is id {field.id},This is title {field.title}, {field.description}</h2> */}
    </div>
  )
}

export default Title;

