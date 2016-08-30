import moment from 'moment'
import React from 'react'

module.exports = React.createClass({
  render: function() {
    return <p>react module says its: {moment().calendar()}</p>
  }
})
