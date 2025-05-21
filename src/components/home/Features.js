import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: ' Desarrollo a medida',
    description: 'Creamos aplicaciones web, móviles y sistemas adaptados exactamente a tus necesidades.',
  },
  { name: 'Interfaz moderna y adaptable', description: 'Diseñamos interfaces atractivas, intuitivas y responsivas para brindar la mejor experiencia de usuario.' },
  {
    name: 'Integración de APIs y servicios',
    description: 'Conectamos tu software con las herramientas y plataformas que ya usas, mejorando la eficiencia.',
  },
  { name: 'Escalabilidad asegurada', description: 'Desarrollamos con tecnologías robustas que crecen contigo.' },
  { name: 'Automatización de procesos', description: 'Digitalizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente importa.' },
  { name: 'Soporte y mantenimiento', description: 'Te ofrecemos asistencia técnica continua, actualizaciones y mejoras evolutivas.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-blue-button">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Plataforma integral para desarrollo de software</p>
          <p className="mt-4 text-lg text-gray-500">
            Creamos soluciones a medida que impulsan tu negocio. Desde la planificación hasta el despliegue, te acompañamos en todo el proceso con tecnología de vanguardia y un equipo experto.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}