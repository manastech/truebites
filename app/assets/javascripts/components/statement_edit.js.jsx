var StatementEdit = React.createClass({
  onChange: function(event) {
    this.props.updateStatement(event.target.value)
  },

  changeStatementOrder: function(delta) {
    this.props.changeStatementOrder(delta);
  },

  render: function() {
    var moveUp = (this.props.statementIndex > 0) ?
      (<a href="javascript:" onClick={this.changeStatementOrder.bind(this, -1)} disabled={this.props.statementIndex > 0}>^</a>) :
      ("^");
    var moveDown = (this.props.lastStatement) ?
      ("V") :
      <a href="javascript:" onClick={this.changeStatementOrder.bind(this, 1)}>V</a>;

    return (<span>
      {moveUp}
      {moveDown}
      <input type="text" className="statementEdit" onChange={this.onChange} value={this.props.statement} key={this.props.statementIndex} />
      <a href="javascript:" onClick={this.props.deleteStatement}>x</a>
    </span>);
  }
});
