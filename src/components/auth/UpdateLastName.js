import React from 'react'
import { signUp } from '../../api/auth'

const UpdateLastName =({user,handleLastChange,handleLastUpdate}) => {
    return(
        <>
            <input
                type='text'
                value={user.lastName}
                name='firstName'
                onChange={handleLastChange}
            />
            {/* <button onClick={handleLastUpdate}>Update</button> */}
        </>
    )
}

export default UpdateLastName