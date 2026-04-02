import React from 'react';
import Card from '../components/common/Card';

export default function FinancesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800">Gestión de Finanzas</h2>
      <Card>
        <p className="text-gray-600">Aquí irán las pestañas de Ventas, Gastos y Cajas.</p>
      </Card>
    </div>
  );
}