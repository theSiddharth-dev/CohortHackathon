import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(()=>{
    const newTween = gsap.timeline({
      scrollTrigger:{
        trigger:"nav",
        start:"bottom top"
      }
    });

    newTween.fromTo('nav',{backgroundColor:'transparent'},{
      backgroundColor:'#00000050',
      backgroundfilter:'blur(10px)',
      duration:1,
      ease :'power1.inOut',
    })

  })
  return (
    <nav>
      <div id="Home" className="flex-center gap-2">
        <img src="/images/logo.png" alt="" />
        <p>Velvet Pour</p>
      </div>

      <ul>
      {navLinks.map((link)=>(
        <li key={link.id}>{link.title}</li>
      ))}
      </ul>
    </nav>
  )
}

export default Navbar