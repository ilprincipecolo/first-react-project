import React from 'react';

const ActivityItem = (props) => {
    return (
<div className="ui cards">
  <div className="ui card">
    <div className="content">
      <div className="header">{props.item.title}</div>
      <div className="description">
        Activity have an ID={props.item.id} and it's {props.item.status ? "":"not"} completed!
       {props.item.status ? 
       <i aria-hidden="true" className="check circle link icon right floated" 
                            onClick={() => props.handleStatusChange(props.item.id)}></i>:
      <i aria-hidden="true" className="check circle outline link icon right floated"
                            onClick={() => props.handleStatusChange(props.item.id)}></i>}
      </div>
    </div>
  </div>
</div>
    );
}

export default ActivityItem;