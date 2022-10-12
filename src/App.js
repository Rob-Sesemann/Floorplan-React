import React, { Component } from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'


export default class FloorPlan extends Component {
  render() {
    // const bedNums = this.props.post.comments.map(item => (
    //   <Bedroom bedNum={item} />
    // ))
    return (
      <div>
        FloorPlan
        <Kitchen></Kitchen>
        <LivingRoom></LivingRoom>
        <Bedroom bedNum='1'></Bedroom>
        <Bedroom bedNum='2'></Bedroom>
        <Bedroom bedNum='3'></Bedroom>
        <Bath size='Half'></Bath>
        <Bath size='Full'></Bath>
        {/* {bedNums} */}
      </div>
    )
  }
}
