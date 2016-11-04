var StatementView = React.createClass({
  getInitialState: function() {
    return {editing: false}
  },
  toggleEditable: function(editable) {
    this.setState(React.addons.update(this.state, {
      editing: { $set: editable }
    }));
  },
  onChange: function(event) {
    this.props.editArgument(event.target.value)
  },

  render: function() {
    if(this.state.editing) {
      return (<span>
        <input type="text" className="statementView" onMouseLeave={this.toggleEditable.bind(this, false)} onChange={this.onChange} value={this.props.statement} />
      </span>);
    } else {
      return (<span>
        <span className="statementView" onMouseEnter={this.toggleEditable.bind(this, true)}>{this.props.statement}</span>
      </span>);
    }
  }
});
