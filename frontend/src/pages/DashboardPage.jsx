import React from 'react';
import Card from '../components/common/Card';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800">Salud Financiera</h2>
      <Card>
        <p className="text-gray-600">Aquí irá el semáforo y los indicadores principales.</p>
      </Card>
    </div>
  );
}