var StatementEdit = React.createClass({
  onChange: function(event) {
    this.props.updateStatement(event.target.value)
  },

  render: function() {
    return (<span>
      <input type="text" value={this.props.statement} autoFocus={this.props.autoFocus} onChange={this.onChange} className="statementEdit" />
    </span>);
  }
});
