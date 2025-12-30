"use client"

import { useState } from 'react';

const MicroservicesArchitecture = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);

  // Core microservices - typical enterprise setup
  const services = [
    { id: 'user', name: 'User Service', color: '#3B82F6', desc: 'Authentication, Authorization, JWT tokens, User CRUD', port: '8001' },
    { id: 'workflow', name: 'SVW Workflow', color: '#8B5CF6', desc: 'Workflow orchestration, Loops, Conditions, API calls, IaC tools', port: '8002' },
    { id: 'catalog', name: 'Service Catalog', color: '#EC4899', desc: 'IT Service Management, Service definitions', port: '8003' },
    { id: 'approval', name: 'Approval Service', color: '#F59E0B', desc: 'Multi-level approvals, Workflow triggers', port: '8004' },
    { id: 'notification', name: 'Notification', color: '#10B981', desc: 'Email, SMS, Push notifications, Webhooks', port: '8005' },
    { id: 'inventory', name: 'Inventory', color: '#6366F1', desc: 'Asset management, CMDB, Resource tracking', port: '8006' },
    { id: 'iac', name: 'IaC Engine', color: '#EF4444', desc: 'Ansible Runner, Terraform execution, S3 storage', port: '8007' },
    { id: 'scheduler', name: 'Scheduler', color: '#14B8A6', desc: 'Celery tasks, Cron jobs, Delayed execution', port: '8008' },
    { id: 'audit', name: 'Audit Log', color: '#F97316', desc: 'Activity logging, Compliance, Trail records', port: '8009' },
    { id: 'config', name: 'Config Service', color: '#84CC16', desc: 'Centralized configuration, Feature flags', port: '8010' },
    { id: 'file', name: 'File Service', color: '#06B6D4', desc: 'S3 integration, File uploads, Artifacts', port: '8011' },
    { id: 'report', name: 'Reporting', color: '#A855F7', desc: 'Analytics, Dashboards, PDF generation', port: '8012' },
    { id: 'integration', name: 'Integration Hub', color: '#F43F5E', desc: 'Third-party APIs, External systems', port: '8013' },
  ];

  const layers = [
    { id: 'client', name: 'Client Layer', color: '#1E40AF' },
    { id: 'gateway', name: 'API Gateway', color: '#7C3AED' },
    { id: 'services', name: 'Microservices', color: '#059669' },
    { id: 'data', name: 'Data Layer', color: '#DC2626' },
    { id: 'infra', name: 'Infrastructure', color: '#6B7280' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Advensis Microservices Architecture
        </h1>
        <p className="text-gray-400 mt-2">14 Services | Poly-Repo | Docker Deployment | JWT Auth</p>
      </div>

      {/* Layer Legend */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {layers.map(layer => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeLayer === layer.id
              ? 'ring-2 ring-white scale-105'
              : 'opacity-70 hover:opacity-100'
              }`}
            style={{ backgroundColor: layer.color }}
          >
            {layer.name}
          </button>
        ))}
      </div>

      {/* Architecture Diagram */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Client Layer */}
        <div className={`transition-opacity ${activeLayer && activeLayer !== 'client' ? 'opacity-60' : ''}`}>
          <div className="text-center mb-2 text-blue-400 font-semibold text-sm">CLIENT LAYER</div>
          <div className="flex justify-center gap-4">
            {['Web App (React)', 'Mobile App', 'CLI Tools', 'Third-Party'].map((client, i) => (
              <div key={i} className="bg-blue-900/50 border border-blue-700 rounded-lg px-6 py-3 text-center">
                <div className="text-2xl mb-1">{['🌐', '📱', '💻', '🔌'][i]}</div>
                <div className="text-sm font-medium">{client}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <div className="text-gray-500 text-2xl">▼</div>
        </div>

        {/* API Gateway Layer */}
        <div className={`transition-opacity ${activeLayer && activeLayer !== 'gateway' ? 'opacity-60' : ''}`}>
          <div className="text-center mb-2 text-purple-400 font-semibold text-sm">API GATEWAY LAYER</div>
          <div className="bg-gradient-to-r from-purple-900/60 to-violet-900/60 border-2 border-purple-500 rounded-xl p-6 mx-auto max-w-4xl">
            <div className="text-center">
              <div className="text-xl font-bold text-purple-300 mb-3">🚪 API Gateway (Kong / Nginx / Custom)</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-purple-800/50 rounded-lg p-2">
                  <div className="font-semibold">🔐 JWT Auth</div>
                  <div className="text-xs text-gray-400">Token validation</div>
                </div>
                <div className="bg-purple-800/50 rounded-lg p-2">
                  <div className="font-semibold">⚡ Rate Limiting</div>
                  <div className="text-xs text-gray-400">Throttling</div>
                </div>
                <div className="bg-purple-800/50 rounded-lg p-2">
                  <div className="font-semibold">🔀 Load Balancing</div>
                  <div className="text-xs text-gray-400">Round-robin</div>
                </div>
                <div className="bg-purple-800/50 rounded-lg p-2">
                  <div className="font-semibold">📊 Request Logging</div>
                  <div className="text-xs text-gray-400">Tracing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <div className="text-gray-500 text-2xl">▼</div>
        </div>

        {/* Microservices Layer */}
        <div className={`transition-opacity ${activeLayer && activeLayer !== 'services' ? 'opacity-60' : ''}`}>
          <div className="text-center mb-2 text-green-400 font-semibold text-sm">MICROSERVICES LAYER (Docker Containers)</div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                className={`cursor-pointer rounded-xl p-4 border-2 transition-all hover:scale-105 ${selectedService?.id === service.id
                  ? 'ring-2 ring-white shadow-lg shadow-white/20'
                  : 'hover:shadow-lg'
                  }`}
                style={{
                  backgroundColor: `${service.color}20`,
                  borderColor: service.color
                }}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">🐳</div>
                  <div className="font-semibold text-sm" style={{ color: service.color }}>
                    {service.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">:{service.port}</div>
                </div>
              </div>
            ))}
            {/* 14th service placeholder */}
            <div className="rounded-xl p-4 border-2 border-dashed border-gray-600 bg-gray-800/30 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-lg mb-1">➕</div>
                <div className="text-sm">Service 14</div>
                <div className="text-xs">(Custom)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Detail Panel */}
        {selectedService && (
          <div
            className="rounded-xl p-4 border-2 mx-auto max-w-2xl"
            style={{
              backgroundColor: `${selectedService.color}15`,
              borderColor: selectedService.color
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg" style={{ color: selectedService.color }}>
                  {selectedService.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{selectedService.desc}</p>
              </div>
              <div className="text-right text-sm">
                <div className="text-gray-500">Port</div>
                <div className="font-mono font-bold">{selectedService.port}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Poly-Repo</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Docker Container</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">REST API</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
            </div>
          </div>
        )}

        {/* Communication Layer */}
        <div className="flex justify-center items-center gap-4 py-4">
          <div className="flex-1 border-t border-dashed border-gray-600"></div>
          <div className="flex gap-3">
            <div className="bg-orange-900/50 border border-orange-600 rounded-lg px-4 py-2 text-sm">
              <span className="text-orange-400">🐰 RabbitMQ</span>
              <div className="text-xs text-gray-400">Async Messages</div>
            </div>
            <div className="bg-red-900/50 border border-red-600 rounded-lg px-4 py-2 text-sm">
              <span className="text-red-400">📡 Redis</span>
              <div className="text-xs text-gray-400">Cache & Pub/Sub</div>
            </div>
            <div className="bg-green-900/50 border border-green-600 rounded-lg px-4 py-2 text-sm">
              <span className="text-green-400">🌿 Celery</span>
              <div className="text-xs text-gray-400">Task Queue</div>
            </div>
          </div>
          <div className="flex-1 border-t border-dashed border-gray-600"></div>
        </div>

        {/* Data Layer */}
        <div className={`transition-opacity ${activeLayer && activeLayer !== 'data' ? 'opacity-60' : ''}`}>
          <div className="text-center mb-2 text-red-400 font-semibold text-sm">DATA LAYER</div>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-blue-900/40 border border-blue-600 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl mb-1">🐘</div>
              <div className="font-semibold text-blue-400">PostgreSQL</div>
              <div className="text-xs text-gray-400">Primary DB (per service)</div>
            </div>
            <div className="bg-green-900/40 border border-green-600 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl mb-1">🍃</div>
              <div className="font-semibold text-green-400">MongoDB</div>
              <div className="text-xs text-gray-400">Document Store</div>
            </div>
            <div className="bg-orange-900/40 border border-orange-600 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl mb-1">📦</div>
              <div className="font-semibold text-orange-400">MinIO / S3</div>
              <div className="text-xs text-gray-400">Object Storage</div>
            </div>
            <div className="bg-purple-900/40 border border-purple-600 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl mb-1">🔍</div>
              <div className="font-semibold text-purple-400">Elasticsearch</div>
              <div className="text-xs text-gray-400">Search & Logs</div>
            </div>
          </div>
        </div>

        {/* Infrastructure Layer */}
        <div className={`transition-opacity ${activeLayer && activeLayer !== 'infra' ? 'opacity-60' : ''}`}>
          <div className="text-center mb-2 text-gray-400 font-semibold text-sm mt-6">INFRASTRUCTURE LAYER</div>
          <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
              <div>
                <div className="text-2xl mb-1">🐳</div>
                <div className="font-semibold">Docker</div>
                <div className="text-xs text-gray-500">Containerization</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🎼</div>
                <div className="font-semibold">Docker Compose</div>
                <div className="text-xs text-gray-500">Orchestration</div>
              </div>
              <div>
                <div className="text-2xl mb-1">📊</div>
                <div className="font-semibold">Prometheus</div>
                <div className="text-xs text-gray-500">Metrics</div>
              </div>
              <div>
                <div className="text-2xl mb-1">📈</div>
                <div className="font-semibold">Grafana</div>
                <div className="text-xs text-gray-500">Dashboards</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🔧</div>
                <div className="font-semibold">Portainer</div>
                <div className="text-xs text-gray-500">Management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Poly-Repo Structure */}
        <div className="mt-8 bg-gray-900/50 border border-gray-700 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4 text-center text-gray-300">📂 Poly-Repo Structure</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-sm">
            {[
              'advensis-gateway',
              'advensis-user-service',
              'advensis-workflow',
              'advensis-catalog',
              'advensis-approval',
              'advensis-notification',
              'advensis-inventory',
              'advensis-iac-engine',
              'advensis-scheduler',
              'advensis-audit',
              'advensis-config',
              'advensis-file-service',
              'advensis-reporting',
              'advensis-integration',
            ].map((repo, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-800 rounded px-3 py-2">
                <span className="text-yellow-500">📁</span>
                <span className="text-gray-400 text-xs truncate">{repo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Network Diagram */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span>All services connected via Docker Network: <code className="text-green-400">advensis-network</code></span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-600 text-sm">
        Click on any service to see details • Click layer buttons to highlight
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;
