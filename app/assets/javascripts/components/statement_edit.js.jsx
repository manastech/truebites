var StatementEdit = React.createClass({
  onChange: function(event) {
    this.props.updateStatement(event.target.value)
  },

  changeStatementOrder: function(delta) {
    this.props.changeStatementOrder(delta);
  },

  toggleUpvote: function() {

  },

  toggleDownvote: function() {

  },

  render: function() {
    var moveUp = (this.props.statementIndex > 0) ?
      (<a href="javascript:" onClick={this.changeStatementOrder.bind(this, -1)} disabled={this.props.statementIndex > 0}>^</a>) :
      ("^");
    var moveDown = (this.props.lastStatement) ?
      ("V") :
      <a href="javascript:" onClick={this.changeStatementOrder.bind(this, 1)}>V</a>;

    var statement = {content: this.props.statement, agree: 0, disagree: 0, current_user: null}

    if(this.props.votes) {
      statement.agree = this.props.votes.agree;
      statement.disagree = this.props.votes.disagree;
      if(this.props.otherUser) {
        statement.current_user = this.props.votes.current_user;
      }
    }

    var yourAgreement = null;
    if (statement.current_user == true) {
      statement.agree++;
      yourAgreement = <a href="javascript:" onClick={this.cancelAgreement}>You agree</a>;
    } else if (statement.current_user == false) {
      statement.disagree++;
      yourAgreement = <a href="javascript:" onClick={this.cancelDisagreement}>You disagree</a>;
    }

    return (<span>
      <a href="javascript:" onClick={this.toggleUpvote}>+{statement.agree}</a> | <a href="javascript:" onClick={this.toggleDownvote}>-{statement.disagree}</a> || {moveUp}{moveDown}
      <input type="text" className="statementEdit" onChange={this.onChange} value={statement.content} key={this.props.statementIndex} />
      <a href="javascript:" onClick={this.props.deleteStatement}>x</a> - {yourAgreement}
    </span>);
  }
});
