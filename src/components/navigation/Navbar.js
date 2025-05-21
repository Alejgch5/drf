import { connect } from 'react-redux'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, Fragment, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'
import { Bars3Icon } from '@heroicons/react/24/outline'
import logo  from '../../assets/img/LOGO.png'

const solutions = [
    {
        name: 'Casos',
        description: 'Measure actions your users take',
        href: '/casos',
        icon: IconOne,
    },
    {
        name: 'Servicios',
        description: 'Create your own targeted content',
        href: '/servicios',
        icon: IconTwo,
    },
    {
        name: 'Blog',
        description: 'Keep track of your growth',
        href: '/blog',
        icon: IconThree,
    },
    {
        name: 'Contacto',
        description: 'Keep track of your growth',
        href: '/contacto',
        icon: IconThree,
    },
]

function Navbar() {

    const [loading, setLoading] = useState(true)

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(true)

    return (
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-0 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img
                            src={logo}
                            width={60}
                            height={60}
                            className=""
                        />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white-hover hover:border-blue-button transition duration-300 ease-in-out mx-4">Casos</NavLink>
                        <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white-hover hover:border-blue-button transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                        <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white-hover hover:border-blue-button transition duration-300 ease-in-out mx-4">Blog</NavLink>
                        <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white-hover hover:border-blue-button transition duration-300 ease-in-out mx-4">Contacto</NavLink>

                        <Link
                            to="/contacto"
                            className="inline-flex ml-12 items-center rounded-md border border-transparent bg-blue-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-button focus:ring-offset-2"
                        >
                            contrátame
                            <RingLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
                        </Link>
                    </div>
                </div>
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img
                            src={logo}
                            width={60}
                            height={60}
                            className=""
                        />
                    </Link>
                    <div className="lg:hidden flex justify-between items-center px-2">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <PopoverButton
                                        className={`
                                ${open ? '' : 'text-opacity-90'}
                                focus:ring-none focus:outline-none`}
                                    >
                                        {
                                            open ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>


                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                </svg>

                                        }
                                    </PopoverButton>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <PopoverPanel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                    {solutions.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-button focus-visible:ring-opacity-50"
                                                        >
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                                <item.icon aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    {item.icon}
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    {item.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="bg-gray-50 p-4">
                                                    <a
                                                        href="##"
                                                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-button focus-visible:ring-opacity-50"
                                                    >
                                                        <span className="flex items-center">
                                                            <span className="text-sm font-medium text-gray-900">
                                                                Documentation
                                                            </span>
                                                        </span>
                                                        <span className="block text-sm text-gray-500">
                                                            Start integrating products and tools
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)

function IconOne() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFFFFF" />
            <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#004B66"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#004B66"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#004B66"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconTwo() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFFFFF" />
            <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#004B66"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#004B66"
                strokeWidth="2"
            />
        </svg>
    )
}

function IconThree() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFFFFF" />
            <rect x="13" y="32" width="2" height="4" fill="#004B66" />
            <rect x="17" y="28" width="2" height="8" fill="#004B66" />
            <rect x="21" y="24" width="2" height="12" fill="#004B66" />
            <rect x="25" y="20" width="2" height="16" fill="#004B66" />
            <rect x="29" y="16" width="2" height="20" fill="#004B66" />
            <rect x="33" y="12" width="2" height="24" fill="#004B66" />
        </svg>
    )
}