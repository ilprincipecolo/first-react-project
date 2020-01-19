import React from 'react';
import ActivityItem from './activityItem'

function filterArray(value,filter){
       if(filter.active)
        return value.title.includes(filter.filter) ? value : null
        else
        return filter.checked ?  value.status ? value: null : value
};
const ActivityContainer = (props) => {
        return (
            <div>
            {props.data
                        .filter(value => filterArray(value,{filter: props.filter, active: props.active, checked: props.checked}))
                        .map(act => <ActivityItem
                                        item={act} 
                                        key={act.id}
                                        handleStatusChange={props.handleStatusChange}/>)}
            </div>
           
        );
}

export default ActivityContainer;