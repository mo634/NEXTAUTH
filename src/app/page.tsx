import { Button } from '@/components/ui/button'
import React from 'react'
import LoginButton from '@/components/auth/LoginButton'
const Home = () => {
  return (
    <main
      className='min-h-screen bg-[#0079ff] text-[#eee] flex justify-center items-center'
    >

      <div className="space-y-4 text-center">
        <h1 className=' text-5xl font-bold'>Auth Application</h1>

        <p className=' text-xl'>simple auth app</p>

        <LoginButton>
        <Button className='mt-2' size={'lg'} variant={'secondary'}>sign in</Button> 
        </LoginButton>


      </div>

    </main>
  )
}

export default Home