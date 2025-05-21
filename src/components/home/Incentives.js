import logo_react from '../../assets/img/react.png'
import logo_node from '../../assets/img/node.png'
import logo_tailwind from '../../assets/img/tailwind.png'
import logo_django from '../../assets/img/django.png'
import logo_firebase from '../../assets/img/firebase.png'
import logo_figma from '../../assets/img/figma.png'
const incentives = [
    {
        imageSrc: logo_react,
    },
    {

        imageSrc: logo_node,
    },
    {
        imageSrc: logo_tailwind ,
    }, {
        imageSrc: logo_django,
    }, {
        imageSrc: logo_firebase,
    }, {
        imageSrc: logo_figma,
    },
]

export default function Incentives() {
    return (
        <div className="bg-white">
            <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                            Construimos nuestro negocio sobre la base del servicio al cliente.
                        </h2>
                        <p className="mt-4 text-gray-500">
                            En nuestra empresa de software, utilizamos tecnologías modernas y escalables para desarrollar soluciones a la medida de cada cliente. Trabajamos con metodologías ágiles que nos permiten entender a fondo sus necesidades y adaptarnos rápidamente a los cambios. Desde sistemas web y móviles hasta integraciones con inteligencia artificial, nuestro enfoque es crear herramientas eficientes, seguras y fáciles de usar que impulsen el crecimiento de su negocio.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:flex-shrink-0">
                                    <img className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain" src={incentive.imageSrc} alt="" />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}