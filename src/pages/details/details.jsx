import React from 'react';
import FRIENDS_DATA from './friends-data'
import Items from '../../components/Items/Items'

class Details extends React.Component {
 constructor(props) {
     super(props);
    
     this.state = {

        collections:FRIENDS_DATA[this.props.match.params.id].items
     }
 }
 render() {
     const {collections} = this.state;
     return (<div className="details">
         {
             collections.map(({id,title,imageUrl})=>(
                 <Items key={id} title={title} imageUrl={imageUrl}></Items>
             ))
         }
     </div>)
 }
};
export default Details;