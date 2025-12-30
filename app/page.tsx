"use client"

import React, { useState } from 'react';

const EnterpriseArchitecture = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState('full'); // full, flow, agents

  const layers = [
    { id: 'clients', name: 'Clients', color: '#3B82F6' },
    { id: 'ingress', name: 'Ingress', color: '#6366F1' },
    { id: 'mesh', name: 'Service Mesh', color: '#8B5CF6' },
    { id: 'gateway', name: 'API Gateway', color: '#7C3AED' },
    { id: 'services', name: 'Microservices', color: '#10B981' },
    { id: 'ai', name: 'AI Agents', color: '#F59E0B' },
    { id: 'kafka', name: 'Kafka', color: '#F97316' },
    { id: 'cisco', name: 'Cisco', color: '#06B6D4' },
    { id: 'data', name: 'Data Layer', color: '#EF4444' },
    { id: 'observability', name: 'Observability', color: '#EC4899' },
  ];

  const services = [
    { id: 'user', name: 'User Service', namespace: 'auth', port: '8001', mcp: true },
    { id: 'workflow', name: 'SVW Workflow', namespace: 'core', port: '8002', mcp: true },
    { id: 'catalog', name: 'Service Catalog', namespace: 'core', port: '8003', mcp: true },
    { id: 'approval', name: 'Approval', namespace: 'core', port: '8004', mcp: true },
    { id: 'notification', name: 'Notification', namespace: 'comms', port: '8005', mcp: true },
    { id: 'inventory', name: 'Inventory', namespace: 'data', port: '8006', mcp: true },
    { id: 'iac', name: 'IaC Engine', namespace: 'iac', port: '8007', mcp: true },
    { id: 'scheduler', name: 'Scheduler', namespace: 'iac', port: '8008', mcp: true },
    { id: 'audit', name: 'Audit Log', namespace: 'data', port: '8009', mcp: true },
    { id: 'config', name: 'Config', namespace: 'infra', port: '8010', mcp: true },
    { id: 'file', name: 'File Service', namespace: 'data', port: '8011', mcp: true },
    { id: 'report', name: 'Reporting', namespace: 'data', port: '8012', mcp: true },
    { id: 'integration', name: 'Integration Hub', namespace: 'comms', port: '8013', mcp: true },
    { id: 'intersight', name: 'Cisco Intersight', namespace: 'cisco', port: '8014', mcp: true },
  ];

  const agents = [
    { id: 'orchestrator', name: 'Orchestrator Agent', color: '#F59E0B', connections: ['workflow', 'infra', 'support', 'cisco', 'iac', 'knowledge'] },
    { id: 'workflow', name: 'Workflow Agent', color: '#8B5CF6', connections: ['workflow', 'approval', 'scheduler'] },
    { id: 'infra', name: 'Infra Agent', color: '#EF4444', connections: ['iac', 'inventory', 'intersight', 'file'] },
    { id: 'support', name: 'Support Agent', color: '#10B981', connections: ['catalog', 'notification', 'audit', 'report'] },
    { id: 'cisco', name: 'Cisco Agent', color: '#06B6D4', connections: ['intersight'] },
    { id: 'iac', name: 'IaC Agent', color: '#F97316', connections: ['iac', 'file'] },
    { id: 'knowledge', name: 'Knowledge Agent', color: '#14B8A6', connections: [] },
  ];

  const getOpacity = (layerId) => {
    if (!selectedLayer) return 1;
    return selectedLayer === layerId ? 1 : 0.4;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 overflow-x-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          Advensis Enterprise Architecture v2.0
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Kubernetes • Istio • Multi-Agent AI • MCP • Kafka • Cisco Intersight • Neo4j
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center gap-2 mb-6">
        {['full', 'flow', 'agents'].map(mode => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === mode
              ? 'bg-purple-600 text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
          >
            {mode === 'full' ? '🏗️ Full View' : mode === 'flow' ? '🔄 Data Flow' : '🤖 AI Agents'}
          </button>
        ))}
      </div>

      {/* Layer Legend */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {layers.map(layer => (
          <button
            key={layer.id}
            onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedLayer === layer.id ? 'ring-2 ring-white scale-105' : 'opacity-80 hover:opacity-100'
              }`}
            style={{ backgroundColor: layer.color }}
          >
            {layer.name}
          </button>
        ))}
      </div>

      {viewMode === 'full' && (
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Client Layer */}
          <div style={{ opacity: getOpacity('clients') }} className="transition-opacity">
            <div className="text-center text-blue-400 text-xs font-semibold mb-2">CLIENT LAYER</div>
            <div className="flex justify-center gap-3 flex-wrap">
              {['🌐 Web App', '📱 Mobile', '💻 CLI/SDK', '🤖 AI Agents', '🔌 External API'].map((client, i) => (
                <div key={i} className="bg-blue-950/60 border border-blue-700/50 rounded-lg px-4 py-2 text-center text-sm">
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-slate-600">▼</div>

          {/* Ingress Layer */}
          <div style={{ opacity: getOpacity('ingress') }} className="transition-opacity">
            <div className="text-center text-indigo-400 text-xs font-semibold mb-2">KUBERNETES INGRESS</div>
            <div className="bg-indigo-950/60 border border-indigo-600/50 rounded-xl p-4 max-w-4xl mx-auto">
              <div className="text-center font-semibold text-indigo-300 mb-2">🚀 NGINX Ingress Controller</div>
              <div className="flex justify-center gap-2 flex-wrap text-xs">
                {['SSL/TLS', 'Rate Limit', 'WAF', 'Blue-Green Routing'].map((f, i) => (
                  <span key={i} className="bg-indigo-800/50 px-2 py-1 rounded">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-slate-600">▼</div>

          {/* Service Mesh Layer */}
          <div style={{ opacity: getOpacity('mesh') }} className="transition-opacity">
            <div className="text-center text-purple-400 text-xs font-semibold mb-2">SERVICE MESH (ISTIO)</div>
            <div className="bg-purple-950/60 border border-purple-600/50 rounded-xl p-4 max-w-5xl mx-auto">
              <div className="text-center font-semibold text-purple-300 mb-3">🕸️ Istio Control Plane</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-purple-800/40 rounded-lg p-2 text-center">
                  <div className="font-semibold">🔐 mTLS</div>
                  <div className="text-purple-400">Auto Encryption</div>
                </div>
                <div className="bg-purple-800/40 rounded-lg p-2 text-center">
                  <div className="font-semibold">🔀 Traffic Mgmt</div>
                  <div className="text-purple-400">Canary/Blue-Green</div>
                </div>
                <div className="bg-purple-800/40 rounded-lg p-2 text-center">
                  <div className="font-semibold">🔄 Circuit Breaker</div>
                  <div className="text-purple-400">Resilience</div>
                </div>
                <div className="bg-purple-800/40 rounded-lg p-2 text-center">
                  <div className="font-semibold">📊 Observability</div>
                  <div className="text-purple-400">Kiali + Jaeger</div>
                </div>
              </div>
              <div className="text-center mt-3 text-purple-400 text-xs">
                Every pod has Envoy sidecar proxy
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-slate-600">▼</div>

          {/* API Gateway */}
          <div style={{ opacity: getOpacity('gateway') }} className="transition-opacity">
            <div className="text-center text-violet-400 text-xs font-semibold mb-2">API GATEWAY (KONG)</div>
            <div className="bg-violet-950/60 border border-violet-600/50 rounded-xl p-4 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {['🔑 JWT Auth', '🔒 OAuth2/OIDC', '⚡ Rate Limit', '📝 Logging'].map((f, i) => (
                  <div key={i} className="bg-violet-800/40 rounded-lg p-2 text-center">{f}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-slate-600">▼</div>

          {/* Microservices + AI Layer */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Core Services */}
            <div style={{ opacity: getOpacity('services') }} className="transition-opacity">
              <div className="text-center text-green-400 text-xs font-semibold mb-2">
                MICROSERVICES (K8s Pods + MCP)
              </div>
              <div className="bg-slate-900/60 border border-green-600/30 rounded-xl p-3">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                      className={`cursor-pointer rounded-lg p-2 border transition-all hover:scale-102 ${selectedService?.id === service.id
                        ? 'border-green-400 bg-green-950/60'
                        : 'border-slate-700 bg-slate-800/40 hover:border-green-600/50'
                        }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-xs">🐳</span>
                        <span className="text-xs font-medium text-green-300 truncate">{service.name}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[10px] text-slate-500">:{service.port}</span>
                        {service.mcp && <span className="text-[10px] bg-amber-600/30 text-amber-300 px-1 rounded">MCP</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Agents */}
            <div style={{ opacity: getOpacity('ai') }} className="transition-opacity">
              <div className="text-center text-amber-400 text-xs font-semibold mb-2">
                MULTI-AGENT AI SYSTEM
              </div>
              <div className="bg-slate-900/60 border border-amber-600/30 rounded-xl p-3">
                <div className="space-y-2">
                  {/* Orchestrator */}
                  <div className="bg-amber-950/60 border border-amber-600/50 rounded-lg p-2 text-center">
                    <div className="font-semibold text-amber-300 text-sm">🎭 Orchestrator Agent</div>
                    <div className="text-[10px] text-amber-400">Task decomposition • Agent coordination</div>
                  </div>
                  {/* Other agents */}
                  <div className="grid grid-cols-3 gap-2">
                    {agents.filter(a => a.id !== 'orchestrator').map(agent => (
                      <div
                        key={agent.id}
                        className="rounded-lg p-2 text-center text-[10px]"
                        style={{ backgroundColor: `${agent.color}20`, borderColor: agent.color, borderWidth: 1 }}
                      >
                        <div className="font-semibold" style={{ color: agent.color }}>{agent.name}</div>
                      </div>
                    ))}
                  </div>
                  {/* LLM + Neo4j */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-slate-800/60 border border-slate-600 rounded-lg p-2 text-center">
                      <div className="text-xs font-semibold text-slate-300">🧠 Local LLM (vLLM)</div>
                      <div className="text-[10px] text-slate-500">Llama 3.1 • Mistral • CodeLlama</div>
                    </div>
                    <div className="bg-teal-950/60 border border-teal-600/50 rounded-lg p-2 text-center">
                      <div className="text-xs font-semibold text-teal-300">🕸️ Neo4j</div>
                      <div className="text-[10px] text-teal-500">Knowledge Graph • Agent Memory</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kafka Layer */}
          <div style={{ opacity: getOpacity('kafka') }} className="transition-opacity">
            <div className="text-center text-orange-400 text-xs font-semibold mb-2">EVENT STREAMING (KAFKA)</div>
            <div className="bg-orange-950/60 border border-orange-600/50 rounded-xl p-4 max-w-5xl mx-auto">
              <div className="flex justify-center gap-4 mb-3">
                {['Broker 1', 'Broker 2', 'Broker 3'].map((b, i) => (
                  <div key={i} className="bg-orange-800/40 rounded-lg px-3 py-1 text-xs">{b}</div>
                ))}
                <div className="bg-orange-700/40 rounded-lg px-3 py-1 text-xs">Schema Registry</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                {[
                  'workflow.events',
                  'audit.logs',
                  'cisco.intersight.*',
                  'ai.agent.messages',
                  'iac.execution.*',
                  'notification.*',
                  'catalog.request.*',
                  'system.metrics'
                ].map((topic, i) => (
                  <div key={i} className="bg-orange-900/40 rounded px-2 py-1 font-mono text-orange-300">{topic}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Cisco Intersight */}
          <div style={{ opacity: getOpacity('cisco') }} className="transition-opacity">
            <div className="text-center text-cyan-400 text-xs font-semibold mb-2">CISCO INTERSIGHT INTEGRATION</div>
            <div className="bg-cyan-950/60 border border-cyan-600/50 rounded-xl p-4 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {[
                  { icon: '🔐', name: 'API Auth', desc: 'Key + Secret' },
                  { icon: '📦', name: 'Inventory Sync', desc: 'Servers, Profiles' },
                  { icon: '⚙️', name: 'Profile Deploy', desc: 'Server Profiles' },
                  { icon: '🔧', name: 'Firmware Mgmt', desc: 'Upgrades' },
                  { icon: '🌐', name: 'Network Config', desc: 'VNICs, VLANs' },
                  { icon: '💾', name: 'Storage Policies', desc: 'SAN/NAS' },
                  { icon: '📡', name: 'Webhooks', desc: '→ Kafka' },
                  { icon: '🤖', name: 'MCP Server', desc: 'AI Access' },
                ].map((item, i) => (
                  <div key={i} className="bg-cyan-800/40 rounded-lg p-2 text-center">
                    <div className="font-semibold">{item.icon} {item.name}</div>
                    <div className="text-cyan-400 text-[10px]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div style={{ opacity: getOpacity('data') }} className="transition-opacity">
            <div className="text-center text-red-400 text-xs font-semibold mb-2">DATA PERSISTENCE</div>
            <div className="flex justify-center gap-3 flex-wrap">
              {[
                { icon: '🐘', name: 'PostgreSQL', desc: 'Primary DB', color: 'blue' },
                { icon: '🕸️', name: 'Neo4j', desc: 'Knowledge Graph', color: 'teal' },
                { icon: '📦', name: 'MinIO/S3', desc: 'Object Storage', color: 'orange' },
                { icon: '🔍', name: 'Elasticsearch', desc: 'Logs/Search', color: 'yellow' },
                { icon: '⚡', name: 'Redis', desc: 'Cache/PubSub', color: 'red' },
                { icon: '🔐', name: 'Vault', desc: 'Secrets', color: 'purple' },
              ].map((db, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-600 rounded-lg px-4 py-2 text-center">
                  <div className="text-lg">{db.icon}</div>
                  <div className="font-semibold text-sm">{db.name}</div>
                  <div className="text-[10px] text-slate-400">{db.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Observability */}
          <div style={{ opacity: getOpacity('observability') }} className="transition-opacity">
            <div className="text-center text-pink-400 text-xs font-semibold mb-2">OBSERVABILITY STACK</div>
            <div className="bg-pink-950/60 border border-pink-600/50 rounded-xl p-4 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: '📊', name: 'Prometheus', desc: 'Metrics' },
                  { icon: '📈', name: 'Grafana', desc: 'Dashboards' },
                  { icon: '🔎', name: 'Jaeger', desc: 'Tracing' },
                  { icon: '📋', name: 'Loki', desc: 'Logs' },
                ].map((tool, i) => (
                  <div key={i} className="bg-pink-800/40 rounded-lg p-2 text-center">
                    <div className="text-lg">{tool.icon}</div>
                    <div className="font-semibold text-sm">{tool.name}</div>
                    <div className="text-[10px] text-pink-400">{tool.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CI/CD */}
          <div className="bg-lime-950/60 border border-lime-600/50 rounded-xl p-4 max-w-5xl mx-auto">
            <div className="text-center text-lime-400 text-xs font-semibold mb-3">BLUE-GREEN CI/CD (ArgoCD + GitHub Actions)</div>
            <div className="flex justify-center items-center gap-2 flex-wrap text-xs">
              {['Commit', 'Build', 'Test', 'Scan', 'Push', 'ArgoCD Sync', 'Blue→Green'].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="bg-lime-800/40 rounded-lg px-3 py-1">{step}</div>
                  {i < 6 && <span className="text-lime-600">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* GitHub Pattern */}
          <div className="bg-slate-800/60 border border-slate-600 rounded-xl p-4 max-w-5xl mx-auto">
            <div className="text-center text-slate-300 text-xs font-semibold mb-3">
              📁 STRUCTURED POLY-REPO PATTERN (Recommended)
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono">
              {[
                '📦 advensis-platform (meta)',
                '📚 advensis-common-py',
                '📜 advensis-proto',
                '🎨 advensis-ui-components',
                '🔐 advensis-user-service',
                '🔄 advensis-workflow-engine',
                '📋 advensis-service-catalog',
                '✅ advensis-approval-service',
                '🔔 advensis-notification',
                '📦 advensis-inventory',
                '⚙️ advensis-iac-engine',
                '⏰ advensis-scheduler',
                '📝 advensis-audit-service',
                '🔗 advensis-integration-hub',
                '🌐 advensis-intersight',
                '🤖 advensis-ai-agents',
              ].map((repo, i) => (
                <div key={i} className="bg-slate-700/40 rounded px-2 py-1 text-slate-300">{repo}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewMode === 'flow' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
            <h3 className="text-center font-bold text-lg mb-6 text-slate-300">Request Flow Example: Deploy Server Profile</h3>
            <div className="space-y-3 text-sm">
              {[
                { step: 1, from: 'User/Agent', to: 'API Gateway', action: 'Request to deploy Cisco profile', color: 'blue' },
                { step: 2, from: 'Gateway', to: 'Workflow Service', action: 'Create workflow execution', color: 'purple' },
                { step: 3, from: 'Workflow', to: 'Approval Service', action: 'Request approval', color: 'amber' },
                { step: 4, from: 'Approval', to: 'Kafka', action: 'Publish approval.pending event', color: 'orange' },
                { step: 5, from: 'Notification', to: 'User', action: 'Send approval request email', color: 'green' },
                { step: 6, from: 'Approver', to: 'Approval Service', action: 'Approve request', color: 'green' },
                { step: 7, from: 'Workflow', to: 'Intersight Service', action: 'Deploy server profile via MCP', color: 'cyan' },
                { step: 8, from: 'Intersight', to: 'Cisco API', action: 'POST /server-profiles/deploy', color: 'cyan' },
                { step: 9, from: 'Intersight', to: 'Kafka', action: 'Publish cisco.profile.deployed event', color: 'orange' },
                { step: 10, from: 'Audit Service', to: 'Elasticsearch', action: 'Log audit trail', color: 'red' },
                { step: 11, from: 'Neo4j Sync', to: 'Neo4j', action: 'Update knowledge graph', color: 'teal' },
                { step: 12, from: 'Notification', to: 'User', action: 'Send completion notification', color: 'green' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-${item.color}-600`}>
                    {item.step}
                  </div>
                  <div className="flex-1 bg-slate-800/60 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-300">{item.from}</span>
                      <span className="text-slate-500">→</span>
                      <span className="font-semibold text-slate-300">{item.to}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{item.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewMode === 'agents' && (
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/60 border border-amber-600/30 rounded-xl p-6">
            <h3 className="text-center font-bold text-lg mb-6 text-amber-300">🤖 Multi-Agent AI Architecture</h3>

            {/* Orchestrator */}
            <div className="bg-amber-950/60 border border-amber-600 rounded-xl p-4 mb-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-1">🎭</div>
                <div className="font-bold text-amber-300">ORCHESTRATOR AGENT</div>
                <div className="text-xs text-amber-400 mt-1">Task Decomposition • Agent Selection • Result Aggregation</div>
              </div>
            </div>

            {/* Connection lines visual */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-amber-600/50"></div>
            </div>

            {/* Specialized Agents */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  name: 'Workflow Agent',
                  icon: '🔄',
                  color: '#8B5CF6',
                  mcpConnections: ['SVW Workflow', 'Approval', 'Scheduler'],
                  capabilities: ['Create workflow', 'Approve steps', 'Schedule jobs']
                },
                {
                  name: 'Infra Agent',
                  icon: '🏗️',
                  color: '#EF4444',
                  mcpConnections: ['IaC Engine', 'Inventory', 'File Service'],
                  capabilities: ['Run playbooks', 'Provision VMs', 'Manage files']
                },
                {
                  name: 'Support Agent',
                  icon: '🎧',
                  color: '#10B981',
                  mcpConnections: ['Service Catalog', 'Notification', 'Reporting'],
                  capabilities: ['Create tickets', 'Send alerts', 'Generate reports']
                },
                {
                  name: 'Cisco Agent',
                  icon: '🌐',
                  color: '#06B6D4',
                  mcpConnections: ['Cisco Intersight'],
                  capabilities: ['Deploy profiles', 'Manage firmware', 'Get inventory']
                },
                {
                  name: 'IaC Agent',
                  icon: '⚙️',
                  color: '#F97316',
                  mcpConnections: ['IaC Engine', 'File Service'],
                  capabilities: ['Ansible playbooks', 'Terraform modules', 'Config mgmt']
                },
                {
                  name: 'Knowledge Agent',
                  icon: '🧠',
                  color: '#14B8A6',
                  mcpConnections: ['Neo4j', 'Elasticsearch'],
                  capabilities: ['Semantic search', 'Context retrieval', 'Memory mgmt']
                },
              ].map((agent, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border"
                  style={{ backgroundColor: `${agent.color}10`, borderColor: `${agent.color}50` }}
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl">{agent.icon}</div>
                    <div className="font-bold" style={{ color: agent.color }}>{agent.name}</div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">MCP Connections</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.mcpConnections.map((conn, j) => (
                          <span key={j} className="text-[10px] bg-slate-800 rounded px-1 py-0.5">{conn}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Capabilities</div>
                      <div className="text-[10px] text-slate-400">
                        {agent.capabilities.join(' • ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LLM & Knowledge */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/60 border border-slate-600 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">🧠</div>
                  <div className="font-bold text-slate-300">Local LLM Server (vLLM)</div>
                  <div className="flex justify-center gap-2 mt-2 flex-wrap">
                    {['Llama 3.1 70B', 'Mistral 22B', 'CodeLlama 34B', 'Embeddings'].map((model, i) => (
                      <span key={i} className="text-[10px] bg-slate-700 rounded px-2 py-1">{model}</span>
                    ))}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2">VM with GPU • Claude API Fallback</div>
                </div>
              </div>
              <div className="bg-teal-950/60 border border-teal-600 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">🕸️</div>
                  <div className="font-bold text-teal-300">Neo4j Knowledge Graph</div>
                  <div className="text-[10px] text-teal-400 mt-2">
                    Entity nodes • Relationships • Vector embeddings • Agent memory
                  </div>
                  <div className="flex justify-center gap-1 mt-2 flex-wrap">
                    {['Users', 'Servers', 'Services', 'Workflows', 'Tickets'].map((node, i) => (
                      <span key={i} className="text-[10px] bg-teal-800/50 rounded px-2 py-1">{node}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Prompt Engine */}
            <div className="mt-4 bg-violet-950/60 border border-violet-600 rounded-xl p-4">
              <div className="text-center">
                <div className="font-bold text-violet-300">📝 Dynamic Prompt Engine</div>
                <div className="flex justify-center gap-3 mt-2 text-[10px]">
                  {['Template Store', 'Variable Injection', 'Context Window Mgmt', 'A/B Testing', 'Analytics'].map((f, i) => (
                    <span key={i} className="bg-violet-800/50 rounded px-2 py-1">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Service Detail */}
      {selectedService && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-slate-800 border border-green-600 rounded-xl p-4 shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-green-300">{selectedService.name}</h4>
              <div className="text-xs text-slate-400">Namespace: {selectedService.namespace}</div>
              <div className="text-xs text-slate-400">Port: {selectedService.port}</div>
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-slate-500 hover:text-white"
            >✕</button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-[10px] bg-slate-700 px-2 py-1 rounded">K8s Pod</span>
            <span className="text-[10px] bg-purple-700 px-2 py-1 rounded">Envoy Sidecar</span>
            {selectedService.mcp && <span className="text-[10px] bg-amber-600 px-2 py-1 rounded">MCP Server</span>}
            <span className="text-[10px] bg-slate-600 px-2 py-1 rounded">Fluentbit</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-8 text-slate-600 text-xs">
        Click layers to highlight • Switch views for different perspectives
      </div>
    </div>
  );
};

export default EnterpriseArchitecture;

