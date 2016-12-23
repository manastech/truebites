var Argument = React.createClass({
  getInitialState: function() {
    return {
      activeVersion: this.props.versions.length - 1,
      myVersion: []
    };
  },

  newStatement: function() {
    this.updateState({ myVersion: { $push: [ "" ] } });
  },

  updateStatement: function(statementIndex, newContent) {
    this.updateState({ myVersion: {
      [statementIndex]: {$set: newContent }
    }});
  },

  updateStatementAndStartEditing: function(statementIndex, newContent) {
    var newStatements = this.currentStatements();
    newStatements[statementIndex] = newContent;
    this.updateState({
      myVersion: { $set: newStatements },
      activeVersion: { $set: -1 },
    });
  },

  saveArgument: function() {
    return JSON.stringify(this.state.myVersion)
  },

  changeActiveVersion: function(newActiveVersionIndex) {
    this.updateState({ activeVersion: { $set: newActiveVersionIndex } });
  },

  addStatementAndStartEditing: function() {
    var newStatements = this.currentStatements().concat([""]);
    this.updateState({
      myVersion: { $set: newStatements },
      activeVersion: { $set: -1 },
    });
  },

  swapStatements: function(oneStatementIndex, otherStatementIndex) {
    var newStatements = this.currentStatements();
    var temporal = newStatements[oneStatementIndex];
    newStatements[oneStatementIndex] = newStatements[otherStatementIndex];
    newStatements[otherStatementIndex] = temporal;
    this.updateState({ myVersion: { $set: newStatements } });
  },

  swapStatementsAndStartEditing: function(oneStatementIndex, otherStatementIndex) {
    var newStatements = this.currentStatements();
    var temporal = newStatements[oneStatementIndex];
    newStatements[oneStatementIndex] = newStatements[otherStatementIndex];
    newStatements[otherStatementIndex] = temporal;
    this.updateState({ myVersion: { $set: newStatements }, activeVersion: { $set: -1 } });
  },

  deleteStatement: function(statementIndex) {
    var newStatements = this.currentStatements();
    newStatements.splice(statementIndex, 1);
    this.updateState({myVersion: { $set: newStatements }});
  },

  deleteStatementAndStartEditing: function(statementIndex) {
    var newStatements = this.currentStatements();
    newStatements.splice(statementIndex, 1);
    this.updateState({myVersion: { $set: newStatements }, activeVersion: {$set: -1}});
  },

  updateState: function(changesToApply) {
    this.setState(React.addons.update(this.state, changesToApply))
  },

  currentStatements: function() {
    return (this.state.activeVersion >= 0 ? this.props.versions[this.state.activeVersion].statements : this.state.myVersion).slice(0);
  },

  render: function() {
    var currentArgument = null;
    if(this.state.activeVersion >= 0) {
      currentArgument = <ArgumentEdit statements={this.props.versions[this.state.activeVersion].statements} updateStatement={this.updateStatementAndStartEditing} newStatement={this.addStatementAndStartEditing} swapStatements={this.swapStatementsAndStartEditing} deleteStatement={this.deleteStatementAndStartEditing} otherUser={this.props.versions[this.state.activeVersion].user.id != this.props.currentUser} votes={this.props.statementVotes} />
    } else {
      currentArgument = <ArgumentEdit statements={this.state.myVersion} updateStatement={this.updateStatement} newStatement={this.newStatement} swapStatements={this.swapStatements} deleteStatement={this.deleteStatement} votes={this.props.statementVotes}/>
    }
    return (
      <div className="argument">
        <input type="hidden" name="argument[statements]" value={this.saveArgument()} />
        <VersionsList versions={this.props.versions} currentUser={this.props.currentUser} activeVersion={this.state.activeVersion} changeActiveVersion={this.changeActiveVersion} currentVersion={this.state.myVersion} />
        {currentArgument}
      </div>
    );
  }
});
