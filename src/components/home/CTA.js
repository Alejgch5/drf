import { Button } from "@headlessui/react";
import { useState } from 'react'
import ModalForm from "./ModalForm";


export default function CTA() {
  const [mostrarModal, setMostrarModal] = useState(false);


  return (
    <div className="bg-gray-50">
      <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">¿Listo para dar el siguiente paso?</span>
          <span className="block text-blue-button">Solicita tu asesoría gratuita hoy mismo.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              onClick={() => setMostrarModal(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-button px-5 py-3 text-base font-medium text-white hover:bg-black"
            >
              Empezar ahora
            </Button>

            <ModalForm visible={mostrarModal} onClose={() => setMostrarModal(false)} />

          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-button hover:bg-indigo-50"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}