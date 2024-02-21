import React from 'react'

const registerpage = () => {
  return (
    <section className='mt-9' style={{ fontFamily: 'Gill Sans' }}>
      <h1 className='text-primary text-4xl text-center'>
        Register
      </h1>
      <form>
        <input type="email" placeholder='Enter Your Email' />
        <input type="password" placeholder='Enter Your Password' />
        <button type='submit'>Register</button>
      </form>
    </section>
  )
}

export default registerpage
