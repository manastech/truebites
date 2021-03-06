var VersionsList = React.createClass({
  changeActiveVersion: function(index) {
    this.props.changeActiveVersion(index)
  },

  render: function() {
    var myVersion = null;
    if(this.props.currentVersion.length > 0) {
      myVersion = <li key={-1} onClick={this.changeActiveVersion.bind(this, -1)}>My new version{this.props.activeVersion == -1 ? " - Active" : ""}</li>;
    }
    return (
      <div>
        <ul>
          {myVersion}
          { this.props.versions.map(function(version, index){
              var versionName = version.user.id == this.props.currentUser ? "My version" : version.user.name;
              return <li key={version.version_id} onClick={this.changeActiveVersion.bind(this, index)}>{versionName} - Sent {version.lastmod}{index == this.props.activeVersion ? " - Active" : ""}</li>;
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
