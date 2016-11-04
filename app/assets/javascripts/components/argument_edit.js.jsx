var ArgumentEdit = React.createClass({
  updateStatement: function(statementIndex, newContent) {
    this.props.updateStatement(statementIndex, newContent)
  },

  render: function() {
    return (
      <div className="argumentEdit">
        {
          this.props.statements.map(function(statement, index){
            return <StatementEdit statement={statement} autoFocus={this.props.activeStatement == index} updateStatement={this.updateStatement.bind(this, index)} key={index} />;
          }.bind(this))
        }
        <a onClick={this.newStatement} href="javascript:">Add statement</a>
        <input type="submit" name="commit" value="Save version" />
      </div>
    );
  }
});
