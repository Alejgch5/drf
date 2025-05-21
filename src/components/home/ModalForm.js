import { useEffect, useRef } from 'react'
export default function ModalForm({ visible, onClose }) {
    const modalRef = useRef();
    // Cierra al presionar la tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);



    if (!visible) return null;

    // Maneja el clic fuera del modal
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            id="contactModal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative mx-4 sm:mx-auto"
            >
                {/* Botón cerrar */}
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Título */}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contáctanos</h2>

                {/* Formulario */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-button focus:border-blue-button"
                            placeholder="Tu nombre" required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-button focus:border-blue-button"
                            placeholder="tu@correo.com" required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mensaje
                        </label>
                        <textarea
                            rows="4"
                            className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-button focus:border-blue-button"
                            placeholder="Cuéntanos sobre tu proyecto" required
                        ></textarea>
                    </div>

                    {/* Botón de enviar */}
                    <button
                        type="submit"
                        className="w-full bg-blue-button hover:bg-black text-white font-semibold py-2 px-4 rounded-2xl shadow"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
