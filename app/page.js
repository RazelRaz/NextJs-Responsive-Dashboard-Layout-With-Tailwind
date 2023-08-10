import Image from 'next/image'
import SideNavbar from './components/SideNavbar'
import Header from './components/Header'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

export default function Home() {
  return (
    <div className='flex'>
      <SideNavbar></SideNavbar>
      <div className='flex-1 md:flex h-screen relative'>
        <Header />
        <LeftColumn></LeftColumn>
        <RightColumn></RightColumn>
      </div>
    </div>
  )
}
