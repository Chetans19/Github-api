import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

 const Users = ({ users, loading}) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {/* this.state is changed to this.props */}
                {users.map((users => (
                <UserItem key={users.id} user={users}
                 />
                 )))}                    
            </div>
        )
    }
   
       
  
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
