var ArgumentEdit = React.createClass({
  updateStatement: function(statementIndex, newContent) {
    this.props.updateStatement(statementIndex, newContent)
  },
  changeStatementOrder: function(currentIndex, delta) {
    this.props.swapStatements(currentIndex, currentIndex + delta)
  },
  deleteStatement: function(currentIndex) {
    this.props.deleteStatement(currentIndex)
  },

  render: function() {
    return (
      <div className="argumentEdit">
        {
          this.props.statements.map(function(statement, index){
            return <StatementEdit statement={statement} updateStatement={this.updateStatement.bind(this, index)} key={index} statementIndex={index} changeStatementOrder={this.changeStatementOrder.bind(this, index)} deleteStatement={this.deleteStatement.bind(this, index)} lastStatement={index == this.props.statements.length - 1} otherUser={this.props.otherUser} votes={this.props.votes[statement]} />;
          }.bind(this))
        }
        <a onClick={this.props.newStatement} href="javascript:">Add statement</a>
        <input type="submit" name="commit" value="Save version" />
      </div>
    );
  }
});
