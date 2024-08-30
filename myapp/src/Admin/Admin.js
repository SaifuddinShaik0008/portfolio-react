import React from 'react'


const Admin = () => {




  return (
    <div>
        <div className='vh-100 d-flex justify-content-center align-items-center  '> 
            <div className='w-50 border shadow rounded bg-light p-4 m-3 bg-black text-white'>
                <h1>Admin Panel</h1>
                <form >
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='username' aria-describedby='usernameHelp' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='password' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>

                <button className='btn btn-danger mt-3'>Logout</button>

            

            </div>

        </div>
    </div>
  )
}

export default Admin