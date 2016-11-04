var ArgumentView = React.createClass({
  editArgument: function(statementIndex, newValue) {
    this.props.editArgument(statementIndex, newValue);
  },
  newStatement: function() {
    debugger
  },
  render: function() {
    return (
      <div className="argumentView">
        {
          this.props.statements.map(function(statement, index){
            return <StatementView statement={statement} editArgument={this.editArgument.bind(this, index)} key={index} />;
          }.bind(this))
        }
        <a onClick={this.props.newStatement} href="javascript:">Add statement</a>
      </div>
    );
  }
});
