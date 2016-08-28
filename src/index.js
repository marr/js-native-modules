
module.exports = React.createClass({
  render: function() {
    return (
      <div>My cool React component: {moment().calendar()}</div>
    )
  }
})
