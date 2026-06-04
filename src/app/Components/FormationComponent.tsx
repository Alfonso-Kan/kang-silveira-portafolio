'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useState } from 'react';
import { Arrow } from './CustomArrows'
import { ToolTip } from './CustomToolTip';
import { FaHtml5, FaCss3, FaBootstrap, FaSass, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiRedux, SiCsharp, SiDotnet, SiDocker } from "react-icons/si";

interface IFormationComponent {
  id?: string
  className?: string
}

const FormationComponent = (props: IFormationComponent) => {
  const [currentIndex, setCurrentIndex] = useState(0); //Estado para rastrear el idice de la imagen seleccionada

  const FormationList = [
    {
      key: 1,
      title: 'Responsive Web Design',
      img: '/images/first-certification.png',
      tech: [
        { icon: <FaHtml5 />, name: 'HTML', position: 'bottom' },
        { icon: <FaCss3 />, name: 'CSS', position: 'top' }
      ],
      description: `
      Adquiri habilidades fundamentales en HTML
      y CSS para construir paginas web adaptables. Desde la creacion basica de paginas hasta
      tecnicas modernas como el uso de variables CSS, aprendi a crear sitios web que se ajustan
      a diferentes dispositivos y siguen las mejores practicas de accesibilidad...
      `,
      url: 'https://freecodecamp.org/certification/ALFONSO_JESUS_KAN_SILVEIRA/responsive-web-design'
    },
    {
      key: 2,
      title: 'Legacy JavaScript Algorithms and Data Structures',
      img: '/images/second-certification.png',
      tech: [
        { icon: <SiJavascript />, name: 'JavaScript', position: 'bottom' }
      ],
      description: `
      Aprendi los fundamentos esenciales, desde variables y bucles hasta manipulacion del DOM.
      Explore conceptos avanzados como Programacion Orientada a Objetos y Funcional, asi como
      tecnicas para trabajar con almacenamiento local y obtener datos de APIs. Estas habilidades
      me permiten crear aplicaciones web interactivas y eficientes...
      `,
      url: 'https://freecodecamp.org/certification/ALFONSO_JESUS_KAN_SILVEIRA/javascript-algorithms-and-data-structures'
    },
    {
      key: 3,
      title: 'Front End Development Libraries Certification',
      img: '/images/third-certification.png',
      tech: [
        {icon: <FaBootstrap />, name: 'Bootstrap', position: 'bottom' },
        {icon: <FaSass />, name: 'Sass', position: 'top' },
        {icon: <FaReact />, name: 'React', position: 'bottom' },
        {icon: <SiRedux />, name: 'Redux', position: 'top' }
      ],
      description: `
      Amplie mis habilidades al aprender las bibliotecas mas populares del sector, como
      Bootstrap para estilizar sitios web y Sass para agregar logica a los estilos CSS.
      Tambien desarrolle aplicaciones como un carrito de compras usando React y Redux,
      explorando nuevas tecnicas para proyectos mas complejos.
      `,
      url: 'https://freecodecamp.org/certification/ALFONSO_JESUS_KAN_SILVEIRA/front-end-development-libraries'
    }, 
    {
      key: 4,
      title: 'Fundational C# with Microsoft',
      img: '/images/fourth-certification.png',
      tech: [
        {icon: <SiCsharp />, name: 'C#', position: 'bottom'} ,
        {icon: <SiDotnet />, name: ".NET", position: 'top'}
      ],
      description: `
      Aprendi los conceptos fundamentales de la programacion en C#, incluyendo variables,
      tipos de datos, estructuras de control y principios de programacion orientada a objetos.
      A traves de ejercicios practicos y proyectos, desarrolle habilidades para aplicar C# en el
      desarrollo de software. Mejore mis capacidades para solucionar problemas y depurar aplicaciones
      de consola en C#, identificando y corrigiendo errores en el codigo para asegurar un funcionamiento
      optimo de las aplicaciones...
      `,
      url: 'https://www.freecodecamp.org/certification/ALFONSO_JESUS_KAN_SILVEIRA/foundational-c-sharp-with-microsoft'
    },
    {
      key: 5,
      title: 'Curso de Docker, Completo desde 0 a Experto',
      img: '/images/docker-certificate.png',
      tech: [
        {icon: <SiDocker />, name: 'Docker', position: 'bottom'}
      ],
      description: `
      Adquiri conocimientos fundamentales y practicos en Docker y Docker Compose para la creacion, administracion y despliegue de contenedores. Aprendi manejo de imagenes, redes, volumenes, variables de entorno, gestion de recursos y puertos. Tambien desarrolle habilidades para construir entornos multicontenedor con Docker Compose, conectar servicios, persistir informacion y desplegar soluciones como bases de datos, servidores web y aplicaciones.
      `,
      url: 'https://www.udemy.com/certificate/UC-5bf2b7d0-43f3-4c1d-9350-a1cbedae05b6/'
    }
  ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    afterChange: (index: number) => setCurrentIndex(index) //Actualizar currentIndex después del cambio de imagen
  }

  return (
    <section
    id='Formation'
    className={`${props.className}
    grid grid-cols-1 lg:grid-cols-2
    min-h-screen 
    items-center justify-center
    py-14 z-10 
    `}>
      <div className={`flex items-center justify-center w-full`}>
        <div className="w-3/4 lg:w-full ">
          <Slider {...settings}>
            {FormationList.map(form => (
              <div key={form.key} className='w-9 flex items-center justify-center'>
                <img src={form.img} alt={form.title} />
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* Descripción de la certificación*/}
      {
        FormationList.map((form, index) => (
          <div key={form.key} className={`flex justify-center items-center w-full ${index === currentIndex ? '' : 'hidden'}`}>
            <div className="w-3/4 p-6 bg-kang-gray-900 border-none rounded-lg">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight dark:text-blue-600 text-blue-800 font-kang-invasion">{form.title}</h5>
              {/* tecos de las tecnologías */}
              <div className='flex flex-row py-2 dark:text-white text-kang-gray text-3xl justify-start'>{form.tech.map((tech, index) => (
                <div key={index} className='dark:hover:text-blue-600 hover:text-blue-800 p-0 border-none my-5 mx-2 sm:mx-4'>
                  <ToolTip color='blue' content={tech.name} position={tech.position}>
                    {tech.icon}
                  </ToolTip>
                </div>
              ))}</div>
              <p className="mb-3 font-normal dark:text-white text-kang-gray text-2xl md:text-4xl font-kang-pixels leading-7">{form.description}</p>
              <a href={form.url} target='_blank' className="inline-flex font-medium items-center justify-around border-2 dark:border-blue-600 border-blue-800 py-1 px-2 dark:text-blue-600 text-blue-800 dark:hover:bg-blue-600 hover:bg-blue-800 rounded-xl dark:hover:text-white hover:text-white">
                <p className=' font-kang-invasion text-xl mr-2'>Ver mas</p> <FaExternalLinkAlt />
              </a>
            </div>

          </div>
        ))

      }
    </section>
  )
}

export default FormationComponent
