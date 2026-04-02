import React from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop (Fondo oscuro) */}
      <div 
        className="fixed inset-0 bg-gray-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Caja del Modal */}
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl z-10 flex flex-col max-h-[90vh]">
        {/* Cabecera */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo con scroll si el contenido es largo */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}