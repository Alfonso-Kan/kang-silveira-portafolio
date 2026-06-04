'use client'
import { useState } from 'react'
import { Drone } from "./CustomDrone"
import { ToolTip } from "./CustomToolTip"
import { SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiDocker, SiPython, SiDjango, SiCsharp, SiGit, SiReact } from "react-icons/si"
import { FaReact, FaVuejs } from "react-icons/fa6"
import { TbBrandNextjs } from "react-icons/tb"
import { MdClose } from "react-icons/md"

interface IHistoryComponent {
  className?: string
  id?: string
}

interface ICompany {
  id: 'tekylab' | 'visa'
  name: string
  position: string
  date: string
  logo: string
  description: string
  techs: { icon: React.ReactNode, name: string, position: 'top' | 'bottom' }[]
}

const HistoryComponent = (props: IHistoryComponent) => {
  const [activeCompany, setActiveCompany] = useState<'tekylab' | 'visa' | null>(null)

  const companies: ICompany[] = [
    {
      id: 'tekylab',
      name: 'TekyLab',
      position: 'Software Developer (Entry Level)',
      date: 'Nov 2023 - May 2024',
      logo: '/images/experience.png',
      description: `Durante mi tiempo en TekyLab, tuve el privilegio de formar parte de un equipo colaborativo y multidisciplinario dedicado al desarrollo de soluciones innovadoras. Como miembro de este equipo, trabajé en una variedad de proyectos utilizando tecnologías de vanguardia.

Desarrollé landing pages utilizando Next.js, React y Tailwind CSS, y construí componentes de UI con C# y Blazor. Durante este tiempo, no solo tuve la oportunidad de aplicar mis habilidades técnicas, sino también de crecer profesionalmente al enfrentar desafíos complejos y aprender nuevas tecnologías y metodologías de desarrollo.`,
      techs: [
        { icon: <SiTypescript />, name: 'TypeScript', position: 'bottom' },
        { icon: <SiJavascript />, name: 'JavaScript', position: 'top' },
        { icon: <FaReact />, name: 'React', position: 'bottom' },
        { icon: <FaVuejs />, name: 'Vue', position: 'top' },
        { icon: <SiTailwindcss />, name: 'TailwindCSS', position: 'bottom' },
        { icon: <TbBrandNextjs />, name: 'Next.js', position: 'top' },
        { icon: <SiNodedotjs />, name: 'Node.js', position: 'bottom' },
        { icon: <SiCsharp />, name: 'C#', position: 'top' },
      ]
    },
    {
      id: 'visa',
      name: 'Visa Logística Aduanera SC',
      position: 'Full Stack Developer',
      date: 'Jul 2024 - Actualidad',
      logo: '/images/visa-logo.png',
      description: `Como Full Stack Developer en Visa Logística Aduanera, he trabajado en el desarrollo y mantenimiento de aplicaciones web utilizando React, así como en el diseño de bases de datos y construcción de APIs REST con Django.

Implementé soluciones de web scraping utilizando Selenium y construí soluciones RPA para automatizar reportes logísticos. También administré bases de datos relacionales y no relacionales, utilicé Git para control de versiones y colaboración, y proporcioné depuración y soporte técnico.`,
      techs: [
        { icon: <FaReact />, name: 'React', position: 'bottom' },
        { icon: <SiPython />, name: 'Python', position: 'top' },
        { icon: <SiDjango />, name: 'Django', position: 'bottom' },
        { icon: <SiJavascript />, name: 'JavaScript', position: 'top' },
        { icon: <SiTailwindcss />, name: 'TailwindCSS', position: 'bottom' },
        { icon: <SiDocker />, name: 'Docker', position: 'top' },
        { icon: <SiGit />, name: 'Git', position: 'bottom' },
        { icon: <SiReact />, name: 'React Native (en proceso)', position: 'top' },
      ]
    }
  ]

  const activeCompanyData = companies.find(c => c.id === activeCompany)

  return (
    <section id="History" className={`${props.className} relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 md:py-24`}>
      <div className="absolute inset-0 w-full h-full">
        <Drone />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-kang-red-900 via-kang-red-900 to-transparent" />

          {companies.map((company, index) => (
            <div key={company.id} className={`relative flex flex-col md:flex-row items-start mb-16 md:mb-28 last:mb-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                <div className="inline-block cursor-pointer group" onClick={() => setActiveCompany(company.id)}>
                  <div className="flex flex-col items-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-[3px] border-kang-red-900 shadow-lg shadow-kang-red-900/30 mb-3"
                    />
                    <p className="text-sm md:text-base font-kang-pixels dark:text-gray-300 text-gray-600">{company.date}</p>
                    <h3 className="text-xl md:text-2xl font-kang-invasion text-kang-red-900">{company.name}</h3>
                    <p className="text-sm md:text-base font-kang-pixels dark:text-white text-kang-gray">{company.position}</p>
                    <p className="text-xs font-kang-pixels dark:text-blue-600 text-blue-800 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click para ver más</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-2 w-[18px] h-[18px] bg-kang-red-900 rounded-full border-[3px] border-white dark:border-kang-gray z-10 shadow-md cursor-pointer hover:scale-125 transition-transform" onClick={() => setActiveCompany(company.id)} />

              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>

      {activeCompanyData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setActiveCompany(null)}>
          <div className="bg-white dark:bg-kang-gray rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <img
                  src={activeCompanyData.logo}
                  alt={activeCompanyData.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-kang-red-900"
                />
                <div>
                  <h2 className="text-2xl font-kang-invasion text-kang-red-900">{activeCompanyData.name}</h2>
                  <p className="text-base font-kang-pixels dark:text-white text-kang-gray">{activeCompanyData.position}</p>
                  <p className="text-sm font-kang-pixels dark:text-gray-400 text-gray-600">{activeCompanyData.date}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveCompany(null)}
                className="text-2xl dark:text-white text-kang-gray hover:text-kang-red-900 transition-colors p-1"
              >
                <MdClose />
              </button>
            </div>

            <div className="p-6">
              <p className="text-base md:text-lg font-kang-pixels dark:text-white text-kang-gray leading-relaxed whitespace-pre-line">
                {activeCompanyData.description}
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-kang-invasion text-kang-red-900 mb-4">Tecnologías utilizadas</h3>
                <div className="flex flex-wrap gap-4">
                  {activeCompanyData.techs.map((tech, i) => (
                    <div key={i} className="dark:text-white text-kang-gray dark:hover:text-kang-red-900 hover:text-kang-red-900 text-3xl">
                      <ToolTip color="red" content={tech.name} position={tech.position}>
                        {tech.icon}
                      </ToolTip>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HistoryComponent
