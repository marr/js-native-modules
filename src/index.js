import moment from 'moment'
import React, { Component } from 'react'

export default class Mod extends Component {
  render() {
    return <p>react module says its: {moment().calendar()}</p>
  }
}
