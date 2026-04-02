import React from 'react';

export default function Input({ 
  label, 
  id, 
  type = 'text', 
  error, 
  className = '', 
  ...props 
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`px-3 py-2 bg-white border rounded-lg shadow-xs outline-none transition-colors
          focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          disabled:bg-gray-50 disabled:text-gray-500
          ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}