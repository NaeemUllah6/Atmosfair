import React from 'react'
import Image from 'next/image'
import mail from '@/common/assets/images/mail.svg'
import tel from '@/common/assets/images/tel.svg'
import address from '@/common/assets/images/address.svg'
import logo from '@/common/assets/images/Logo.svg'
import facebook from '@/common/assets/images/facebook.svg'
import instagram from '@/common/assets/images/insta.svg'
import skype from '@/common/assets/images/skype.svg'
import linkedin from '@/common/assets/images/linkedin.svg'
import facebok from '@/common/assets/images/facebok.svg'
import you from '@/common/assets/images/you.svg'
import skpe from '@/common/assets/images/skpe.svg'
import link from '@/common/assets/images/link.svg'
const Footer = () => {
  const contact = [
    {
      label: 'Email Address:',
      link: 'mailto:info@atmosfair.de',
      text: 'info@atmosfair.de'
    },
    {
      label: 'Phone Number:',
      link: 'tel:+49 (0) 30 120 84 80 – 0',
      text: '+49 (0) 30 120 84 80 – 0'
    },
    {
      label: 'Address:',
      link: 'atmosfair gGmb Harzer Straße 3912059 Berlin',
      text: 'atmosfair gGmbH Harzer Straße 3912059 Berlin'
    },
  ]
  const icons = [
    {
      icon: linkedin,
      link: 'https://linkedin.com'
    },
    {
      icon: facebook,
      link: 'https://facebook.com'
    },
    {
      icon: skype,
      link: 'https://skype.com'
    },
    {
      icon: instagram,
      link: 'https://instagram.com'
    },
  ]

  const icons2 = [
    {
      icon: facebok,
      link: 'https://linkedin.com'
    },
    {
      icon: you,
      link: 'https://facebook.com'
    },
    {
      icon: skpe,
      link: 'https://skype.com'
    },
    {
      icon: link,
      link: 'https://instagram.com'
    },
  ]
  const Links = [
    {
      heading: 'Über atmosfair',
      link1: 'atmosfair-Organe',
      link2: 'Schirmherren',
      link3: 'Aufsichtsrat',
      link4: 'Fachbeirat',
      link5: 'Prominente Unterstützer',
      link6: 'Jobs',

    },
    {
      heading: 'Standards',
      link1: 'Emissionsberechnungen',
      link2: 'fairfuel Standard',
      link3: 'Aufsichtsrat',
      link4: 'Übersicht Paris',
      link5: 'Transparenz',
      link6: 'Wann ist CO₂-Kompensation sinnvoll?',

    },
    {
      heading: 'Unternehmen',
      link1: 'Impressum',
      link2: 'AGBs',
      link3: 'Datenschutz',
      link4: 'FAQ',
      link5: 'Presse & Materialien',
      link6: 'Links',

    },
    {
      heading: 'Kooperationen',
      link1: 'Green Planet Energy',
      link2: 'Schlagen Sie einen Projekt vor',


    },
  ]
  return (
    <div className='bg-[#091526] pb-5 pt-10'>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="flex flex-col gap-4 col-span  -2">
            <Image src={logo} alt='21' />
            <p className='text-base font-lato font-normal text-white block md:hidden'>
              Lorum ipsum Lorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsum
            </p>
            <div className='flex gap-[22px] '>
              {
                icons.map((icon, index) => (
                  <a className='block md:hidden' target='blank' key={index} href={icon.link}>
                    <Image width={24} height={24} src={icon.icon} alt='1' />
                  </a>
                ))
              }
            </div>
            <div className='flex items-center gap-2'>
              <Image src={mail} alt='4' />
              <a className='text-white font-lato font-medium font-base' href="mailto:info@atmosfair.de">info@atmosfair.de</a>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={tel} alt='5' />
              <a className='text-white font-lato font-medium font-base' href="tel:+49 (0) 30 120 84 80 – 0">+49 (0) 30 120 84 80 – 0</a>
            </div>
            <div className='flex gap-2'>
              <Image src={address} alt='6' />
              <a className='text-white font-lato font-medium font-base' href="/">atmosfair gGmbH Harzer Straße 3912059 Berlin</a>
            </div>

          </div>
          <div className="grid grid-cols-2 md-grid-cols-3  justify-between gap-[56px] lg:grid-cols-4">
            {
              Links.map((footer, index) => (
                <div key={index} className={`flex flex-col ${index === 0 ? 'lg:ps-[56px]' : ''}`}>
                  <h2 className='font-lato text-white font-bold text-[18px]'>{footer.heading}</h2>
                  <a className='mt-4 font-lato text-sm font-medium text-white' href="/">{footer.link1}</a>
                  <a className='mt-3 font-lato text-sm font-medium text-white' href="/">{footer.link2}</a>
                  <a className='mt-3 font-lato text-sm font-medium text-white' href="/">{footer.link3}</a>
                  <a className='mt-3 font-lato text-sm font-medium text-white' href="/">{footer.link4}</a>
                  <a className='mt-3 font-lato text-sm font-medium text-white' href="/">{footer.link5}</a>
                  <a className='mt-3 font-lato text-sm font-medium text-white' href="/">{footer.link6}</a>
                </div>
              ))
            }
          </div>
        </div>
        {/* ------------contact------------ */}
        <div className='flex flex-col gap-4 my-6'>
          <h2 className='block md:hidden font-lato text-[18px] text-white'>Kontakt</h2>
          {
            contact.map((items, index) => (
              <div key={index} className='py-3 px-4 block md:hidden rounded-[14px] bg-[#102541]' >
                <p className='font-base font-lato text-white'>{items.label}</p>
                <a className='font-base font-lato text-white font-medium' href={items.link} target='blank' key={index}>{items.text}</a>
              </div>
            ))
          }
        </div>
        <div className='bg-[#FAFAFA] h-[1px]'></div>
        <div className='flex justify-center md:justify-between mt-6'>
          <p className='font-medium font-lato text-sm text-center md:text-start text-[#F3F3F5]'>© 2024 atmosfair. All rights reserved.</p>
          <div className='flex items-center gap-[22px] '>

            {
              icons2.map((icon, index) => (
                <a className='hidden md:block' target='blank' key={index} href={icon.link}>
                  <Image width={40} height={40} src={icon.icon} alt='2' />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
