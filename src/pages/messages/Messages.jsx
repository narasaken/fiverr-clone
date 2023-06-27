import React from 'react';
import "./Messages.scss";
import {Link} from "react-router-dom";

const Messages = () => {

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true
  };

  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at excepturi beatae modi cupiditate ullam cumque minus accusantium nobis id quos alias tenetur, reprehenderit suscipit veniam molestiae eligendi in vero!"

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages