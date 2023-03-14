import React, { Component } from 'react'

class RenderPropsComp extends Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    )
  }
}

export default RenderPropsComp
