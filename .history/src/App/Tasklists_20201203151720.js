import React from "react";

export default class Tasklist extends React.Component {
	render() {
	  const tasklistsList = this.props.tasklists.map( tasklist => {
		return <div key={tasklist.id}>{tasklist.name}</div>
	  })
	  return <div>{tasklistsList}</div>
	}
}