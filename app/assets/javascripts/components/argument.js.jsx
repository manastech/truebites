var Argument = React.createClass({
  getInitialState: function() {
    return {
      activeVersion: this.props.versions.length - 1,
      activeStatement: 0,
      myVersion: []
    };
  },

  newStatement: function() {
    debugger;
    this.setState(React.addons.update(this.state, {
      myVersion: { $push: [ "" ] }
    }));
  },

  updateStatement: function(statementIndex, newContent) {
    this.setState(React.addons.update(this.state, {
      myVersion: {
        [statementIndex]: {$set: newContent }
      }
    }));
  },

  saveArgument: function() {
    return JSON.stringify(this.state.myVersion)
  },

  changeActiveVersion: function(newActiveVersionIndex) {
    this.setState(React.addons.update(this.state, {
      activeVersion: { $set: newActiveVersionIndex }
    }));
  },

  editArgument: function(statementIndex, newStatement) {
    var newStatements = this.props.versions[this.state.activeVersion].statements.slice(0);
    newStatements[statementIndex] = newStatement;
    this.setState(React.addons.update(this.state, {
      myVersion: { $set: newStatements },
      activeVersion: { $set: -1 },
      activeStatement: { $set: statementIndex },
    }));
  },

  addStatementAndStartEditing: function() {
    var newStatements = this.props.versions[this.state.activeVersion].statements.concat([""]);
    this.setState(React.addons.update(this.state, {
      myVersion: { $set: newStatements },
      activeVersion: { $set: -1 },
      activeStatement: { $set: newStatements.length - 1 },
    }));
  },

  render: function() {
    var currentArgument = null;
    if(this.state.activeVersion >= 0) {
      currentArgument = <ArgumentView statements={this.props.versions[this.state.activeVersion].statements} editArgument={this.editArgument} newStatement={this.addStatementAndStartEditing} />
    } else {
      currentArgument = <ArgumentEdit statements={this.state.myVersion} activeStatement={this.state.activeStatement} updateStatement={this.updateStatement} newStatement={this.newStatement} />
    }
    return (
      <div className="argument">
        <input type="hidden" name="argument[statements]" value={this.saveArgument()} />
        <VersionsList versions={this.props.versions} activeVersion={this.state.activeVersion} changeActiveVersion={this.changeActiveVersion} currentVersion={this.state.myVersion} />
        {currentArgument}
      </div>
    );
  }
});
