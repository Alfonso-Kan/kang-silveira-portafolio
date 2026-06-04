'use client'
import image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Developer } from './CustomDeveloper';
import { FaFilePdf } from 'react-icons/fa6';

interface INavBarComponentProps {
  className?: string
  id?: string
}

const ProfileComponent = (props: INavBarComponentProps) => {
  return (
    <div id='Profile' className={`${props.className} w-full h-screen flex flex-col justify-center`}>
      <div className='grid grid-cols-1 md:grid-cols-2 max-2-[1240] '>
        {/* SECCIÓN DEL MODELO 3D */}
        <div className='
      flex flex-row
      justify-center items-center
      max-h-[40vh] md:min-h-screen'>
          <Developer />
        </div>
        {/* SECCIÓN DE LOS TITULOS */}
        <div className='flex flex-col justify-center md:items-start w-full px-2'>
          <p className='text-6xl font-kang-pixels dark:text-white text-kang-gray'> Hola, mi nombre es: </p>
          <h1 className='font-kang-cracked text-kang-red-900 py-5 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap'>ALFONSO KANG</h1>
          <div className='text-xl sm:text-2xl dark:text-white text-kang-gray font-kang-pixels  py-1xl'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'soy Desarrollador Full-Stack...',
                4000,
                'soy Desarrollador Frontend...',
                4000,
                'soy Desarrollador Backend...',
                4000,
                'soy Estudiante Autodidacta...',
                4000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <a className='
          flex flex-row
          font-kang-pixels
        text-white
          dark:bg-transparent bg-kang-gray
          items-center justify-center
          text-4xl text-nowrap
          py-2 px-6
          md:w-[60%] my-4
          custom-button-hover
          rounded-2xl cursor-pointer'
          href='/Mi_CV.pdf'
          download="Mi_CV.pdf">Curriculum vitae <FaFilePdf className='text-3xl ml-2' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent