"use client"

import React, { useState } from 'react';

const AdvensisRoadmapPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const team = [
    { name: 'Tamim', role: 'Lead Architect', avatar: '👨‍💻', responsibilities: ['Requirement Analysis', 'Database Design', 'Features Design', 'Mock', 'Backend Architecture', 'Complex Business Logic', 'Infrastructure Management'], color: '#8B5CF6' },
    { name: 'Chandra', role: 'Business Analyst', avatar: '📊', responsibilities: ['Requirement Analysis', 'Database Design', 'Features Design', 'Mock'], color: '#3B82F6' },
    { name: 'Arif', role: 'UX Designer', avatar: '🎨', responsibilities: ['Converting Mock to UX', 'User Experience Design', 'Design System'], color: '#EC4899' },
    { name: 'Jahid', role: 'Frontend Lead', avatar: '⚛️', responsibilities: ['API Integration', 'Frontend Business Logic', 'State Management'], color: '#10B981' },
    { name: 'Emon', role: 'Frontend Developer', avatar: '🖥️', responsibilities: ['Converting UX to Frontend Code', 'Component Development', 'Responsive Design'], color: '#F59E0B' },
    { name: 'Jana', role: 'Backend Developer', avatar: '⚙️', responsibilities: ['Creating Microservices', 'Application Layer', 'Business Layer'], color: '#EF4444' },
    { name: 'Dheeraz', role: 'Backend Developer', avatar: '🔧', responsibilities: ['Creating Microservices', 'Application Layer', 'Business Layer'], color: '#06B6D4' },
  ];

  const phases = [
    {
      id: 1,
      title: 'Infrastructure & Architecture',
      duration: '4-6 weeks',
      owner: 'Tamim',
      color: '#8B5CF6',
      tasks: [
        'Kubernetes cluster setup',
        'Istio Service Mesh deployment',
        'Security layer implementation',
        'Centralized logging (ELK/Loki)',
        'Blue-Green CI/CD pipeline',
        'ArgoCD GitOps setup'
      ]
    },
    {
      id: 2,
      title: 'Permission SDK',
      duration: '2-3 weeks',
      owner: 'Tamim + Jana',
      color: '#3B82F6',
      tasks: [
        'Design permission model',
        'Build Python SDK package',
        'JWT + RBAC integration',
        'Service-to-service auth',
        'SDK documentation',
        'Integration tests'
      ]
    },
    {
      id: 3,
      title: 'MCP Servers',
      duration: '4-5 weeks',
      owner: 'Jana + Dheeraz',
      color: '#10B981',
      tasks: [
        'MCP base class library',
        'Per-service MCP implementation',
        'Tool definitions per service',
        'Testing & validation',
        'Documentation'
      ]
    },
    {
      id: 4,
      title: 'Multi-Agent System',
      duration: '3-4 weeks',
      owner: 'Tamim',
      color: '#F59E0B',
      tasks: [
        'Agency library setup',
        'Agent definitions',
        'MCP client connections',
        'Orchestrator agent',
        'Neo4j knowledge graph',
        'Dynamic prompt engine'
      ]
    },
    {
      id: 5,
      title: 'Cisco Intersight Service',
      duration: '3-4 weeks',
      owner: 'Tamim + Dheeraz',
      color: '#06B6D4',
      tasks: [
        'Intersight SDK integration',
        'API authentication layer',
        'Resource modules',
        'Inventory sync',
        'MCP server for Intersight',
        'Webhook handlers'
      ]
    },
    {
      id: 6,
      title: 'Service Business Logic',
      duration: 'Ongoing',
      owner: 'Jana + Dheeraz',
      color: '#EF4444',
      tasks: [
        'Refactor existing services',
        'Add Kafka integration',
        'Implement event sourcing',
        'Add observability',
        'Performance optimization'
      ]
    }
  ];

  const slides = [
    // Slide 0: Title
    {
      id: 'title',
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Advensis Microservices
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 mb-8">Enterprise Upgrade Roadmap</h2>
          <div className="flex gap-3 flex-wrap justify-center text-sm">
            {['Kubernetes', 'Service Mesh', 'Multi-Agent AI', 'MCP', 'Cisco Intersight'].map((tag, i) => (
              <span key={i} className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2">{tag}</span>
            ))}
          </div>
          <div className="mt-12 text-slate-500 text-sm">
            Version 2.0 | Q1-Q2 2025
          </div>
        </div>
      )
    },
    // Slide 1: Team
    {
      id: 'team',
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-center mb-8">👥 Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 hover:border-opacity-100 transition-all cursor-pointer"
                style={{ borderColor: member.color }}
                onClick={() => setExpandedSection(expandedSection === member.name ? null : member.name)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{member.avatar}</div>
                  <div className="font-bold text-lg" style={{ color: member.color }}>{member.name}</div>
                  <div className="text-slate-400 text-sm">{member.role}</div>
                </div>
                {expandedSection === member.name && (
                  <div className="mt-3 pt-3 border-t border-slate-700">
                    <div className="text-xs text-slate-500 uppercase mb-2">Responsibilities</div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {member.responsibilities.map((r, j) => (
                        <li key={j}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-slate-500 text-sm">
            Click on team members to see responsibilities
          </div>
        </div>
      )
    },
    // Slide 2: Workflow
    {
      id: 'workflow',
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-center mb-8">🔄 Team Workflow</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Flow diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Requirements */}
                <div className="bg-purple-950/60 border border-purple-600 rounded-xl p-4 w-full md:w-48">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📋</div>
                    <div className="font-bold text-purple-300">Requirements</div>
                    <div className="text-xs text-purple-400 mt-2">Tamim + Chandra</div>
                    <div className="text-[10px] text-slate-500 mt-1">Analysis, DB Design, Features</div>
                  </div>
                </div>

                <div className="text-slate-600 text-2xl hidden md:block">→</div>

                {/* UX Design */}
                <div className="bg-pink-950/60 border border-pink-600 rounded-xl p-4 w-full md:w-48">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="font-bold text-pink-300">UX Design</div>
                    <div className="text-xs text-pink-400 mt-2">Arif</div>
                    <div className="text-[10px] text-slate-500 mt-1">Mock → UX</div>
                  </div>
                </div>

                <div className="text-slate-600 text-2xl hidden md:block">→</div>

                {/* Frontend */}
                <div className="bg-green-950/60 border border-green-600 rounded-xl p-4 w-full md:w-48">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚛️</div>
                    <div className="font-bold text-green-300">Frontend</div>
                    <div className="text-xs text-green-400 mt-2">Jahid + Emon</div>
                    <div className="text-[10px] text-slate-500 mt-1">UX → Code + Logic</div>
                  </div>
                </div>

                <div className="text-slate-600 text-2xl hidden md:block">→</div>

                {/* Backend */}
                <div className="bg-red-950/60 border border-red-600 rounded-xl p-4 w-full md:w-48">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="font-bold text-red-300">Backend</div>
                    <div className="text-xs text-red-400 mt-2">Jana + Dheeraz</div>
                    <div className="text-[10px] text-slate-500 mt-1">Services + Logic</div>
                  </div>
                </div>
              </div>

              {/* Tamim oversight */}
              <div className="mt-6 bg-violet-950/60 border border-violet-600 rounded-xl p-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl mb-2">👨‍💻</div>
                  <div className="font-bold text-violet-300">Architecture & Infrastructure</div>
                  <div className="text-xs text-violet-400 mt-2">Tamim</div>
                  <div className="text-[10px] text-slate-500 mt-1">Oversees all layers • Complex logic • DevOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Roadmap Overview
    {
      id: 'roadmap',
      content: (
        <div className="h-full">
          <h2 className="text-3xl font-bold text-center mb-8">🗺️ Upgrade Roadmap</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className="rounded-xl p-4 border cursor-pointer transition-all hover:scale-102"
                  style={{
                    backgroundColor: `${phase.color}15`,
                    borderColor: `${phase.color}50`
                  }}
                  onClick={() => setExpandedSection(expandedSection === phase.id ? null : phase.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold" style={{ color: phase.color }}>
                      {phase.id}
                    </span>
                    <span className="text-xs bg-slate-800 rounded-full px-2 py-1">{phase.duration}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: phase.color }}>{phase.title}</h3>
                  <div className="text-xs text-slate-400">Owner: {phase.owner}</div>

                  {expandedSection === phase.id && (
                    <div className="mt-3 pt-3 border-t border-slate-700">
                      <ul className="text-xs text-slate-400 space-y-1">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }}></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4 text-slate-500 text-sm">
              Click on phases to see detailed tasks
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Phase 1 - Infrastructure
    {
      id: 'phase1',
      content: (
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl font-bold text-purple-400">01</span>
            <h2 className="text-2xl font-bold">Infrastructure & Architecture</h2>
          </div>
          <div className="text-center text-slate-400 mb-6">Owner: <span className="text-purple-400 font-semibold">Tamim</span> | Duration: 4-6 weeks</div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {/* Kubernetes */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">☸️</span> Kubernetes Setup
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Cluster Architecture</div>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• 3 Master nodes (HA control plane)</li>
                    <li>• 5+ Worker nodes (auto-scaling)</li>
                    <li>• Dedicated node pools per workload</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Namespaces</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['advensis-auth', 'advensis-core', 'advensis-iac', 'advensis-ai', 'advensis-cisco'].map((ns, i) => (
                      <span key={i} className="text-[10px] bg-slate-700 rounded px-2 py-1">{ns}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Mesh */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🕸️</span> Istio Service Mesh
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Features</div>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• mTLS encryption (automatic)</li>
                    <li>• Traffic management (canary, blue-green)</li>
                    <li>• Circuit breakers & retries</li>
                    <li>• Distributed tracing (Jaeger)</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Envoy Sidecar</div>
                  <div className="text-xs mt-1">Auto-injected in every pod</div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔐</span> Security Layer
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Components</div>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• HashiCorp Vault (secrets management)</li>
                    <li>• Network Policies (pod-to-pod)</li>
                    <li>• OPA Gatekeeper (policy enforcement)</li>
                    <li>• Trivy (image scanning)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Logging */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span> Centralized Logging
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="font-semibold text-slate-300">Stack</div>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Fluentbit (DaemonSet collector)</li>
                    <li>• Kafka (log streaming)</li>
                    <li>• Elasticsearch (storage)</li>
                    <li>• Grafana/Kibana (visualization)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CI/CD */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 md:col-span-2">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔄</span> Blue-Green CI/CD Pipeline
              </h3>
              <div className="flex items-center justify-center gap-2 flex-wrap text-sm py-4">
                {[
                  { icon: '📝', label: 'Commit' },
                  { icon: '🔍', label: 'Lint' },
                  { icon: '🧪', label: 'Test' },
                  { icon: '🏗️', label: 'Build' },
                  { icon: '🔒', label: 'Scan' },
                  { icon: '📦', label: 'Push ECR' },
                  { icon: '🚀', label: 'ArgoCD' },
                  { icon: '🔵🟢', label: 'Blue→Green' },
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-slate-700 rounded-lg px-3 py-2 text-center">
                      <div className="text-lg">{step.icon}</div>
                      <div className="text-xs">{step.label}</div>
                    </div>
                    {i < 7 && <span className="text-slate-600">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-center text-xs text-slate-500 mt-2">
                GitHub Actions → ArgoCD GitOps → Istio Traffic Shift
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Phase 2 - Permission SDK
    {
      id: 'phase2',
      content: (
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl font-bold text-blue-400">02</span>
            <h2 className="text-2xl font-bold">Permission SDK</h2>
          </div>
          <div className="text-center text-slate-400 mb-6">Owner: <span className="text-blue-400 font-semibold">Tamim + Jana</span> | Duration: 2-3 weeks</div>

          <div className="max-w-5xl mx-auto">
            {/* SDK Architecture */}
            <div className="bg-slate-800/60 rounded-xl p-6 border border-blue-600/30 mb-4">
              <h3 className="font-bold text-lg mb-4 text-blue-300">📦 SDK Architecture</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl">🔑</div>
                    <div className="font-semibold text-slate-300">Authentication</div>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• JWT token validation</li>
                    <li>• Token refresh handling</li>
                    <li>• Service account auth</li>
                    <li>• API key support</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl">👮</div>
                    <div className="font-semibold text-slate-300">Authorization</div>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• RBAC (Role-Based)</li>
                    <li>• ABAC (Attribute-Based)</li>
                    <li>• Resource permissions</li>
                    <li>• Tenant isolation</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl">🔗</div>
                    <div className="font-semibold text-slate-300">Integration</div>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Django middleware</li>
                    <li>• FastAPI dependency</li>
                    <li>• Decorator support</li>
                    <li>• gRPC interceptor</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-400">Usage Example</span>
                <span className="text-xs bg-blue-600 rounded px-2 py-1">Python</span>
              </div>
              <pre className="text-xs text-slate-300 overflow-x-auto">
                {`from advensis_permission import PermissionSDK, require_permission

# Initialize SDK
sdk = PermissionSDK(
    user_service_url="http://user-service:8001",
    cache_backend="redis://redis:6379"
)

# Decorator usage
@require_permission("workflow:execute")
async def execute_workflow(request, workflow_id: str):
    # User permission already validated
    return await workflow_service.execute(workflow_id)

# Manual check
async def custom_handler(request):
    user = await sdk.get_current_user(request)
    
    if await sdk.has_permission(user, "server:deploy"):
        await deploy_server()
    
    if await sdk.has_role(user, "admin"):
        await admin_action()

# Resource-level permission
@require_permission("ticket:read", resource="ticket_id")
async def get_ticket(request, ticket_id: str):
    # Checks if user can access THIS specific ticket
    return await ticket_service.get(ticket_id)`}
              </pre>
            </div>

            {/* SDK Package Structure */}
            <div className="mt-4 bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h4 className="font-semibold text-slate-300 mb-3">📁 Package Structure</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="text-slate-500 mb-2"># advensis-permission-sdk</div>
                  <div>advensis_permission/</div>
                  <div className="pl-4">├── __init__.py</div>
                  <div className="pl-4">├── sdk.py <span className="text-slate-600"># Main SDK class</span></div>
                  <div className="pl-4">├── decorators.py</div>
                  <div className="pl-4">├── middleware/</div>
                  <div className="pl-8">├── django.py</div>
                  <div className="pl-8">└── fastapi.py</div>
                  <div className="pl-4">├── models.py</div>
                  <div className="pl-4">├── cache.py</div>
                  <div className="pl-4">└── exceptions.py</div>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-3">
                  <div className="text-slate-500 mb-2"># Installation</div>
                  <div className="text-green-400">pip install advensis-permission</div>
                  <div className="mt-3 text-slate-500"># Or from private PyPI</div>
                  <div className="text-green-400">pip install --index-url \</div>
                  <div className="text-green-400 pl-4">https://pypi.advensis.internal/ \</div>
                  <div className="text-green-400 pl-4">advensis-permission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Phase 3 - MCP Servers
    {
      id: 'phase3',
      content: (
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl font-bold text-green-400">03</span>
            <h2 className="text-2xl font-bold">MCP Servers for All Services</h2>
          </div>
          <div className="text-center text-slate-400 mb-6">Owner: <span className="text-green-400 font-semibold">Jana + Dheeraz</span> | Duration: 4-5 weeks</div>

          <div className="max-w-5xl mx-auto">
            {/* MCP Overview */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-green-600/30 mb-4">
              <h3 className="font-bold text-lg mb-3 text-green-300">🔌 What is MCP?</h3>
              <p className="text-sm text-slate-400 mb-4">
                <strong className="text-green-300">Model Context Protocol (MCP)</strong> is Anthropic's standard for connecting AI models to external tools and data sources.
                Each service exposes an MCP server that AI agents can query.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-slate-900/60 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🛠️</div>
                  <div className="font-semibold text-sm">Tools</div>
                  <div className="text-xs text-slate-500">Actions agents can execute</div>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">📚</div>
                  <div className="font-semibold text-sm">Resources</div>
                  <div className="text-xs text-slate-500">Data agents can read</div>
                </div>
                <div className="bg-slate-900/60 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">📝</div>
                  <div className="font-semibold text-sm">Prompts</div>
                  <div className="text-xs text-slate-500">Pre-defined templates</div>
                </div>
              </div>
            </div>

            {/* MCP Per Service */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 mb-4">
              <h3 className="font-bold text-lg mb-3 text-slate-300">📋 MCP Tools Per Service</h3>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                {[
                  { service: 'User Service', tools: ['get_user', 'list_users', 'check_permission', 'get_roles', 'create_user'] },
                  { service: 'SVW Workflow', tools: ['list_workflows', 'get_execution', 'trigger_workflow', 'get_step_status', 'cancel_workflow'] },
                  { service: 'Service Catalog', tools: ['list_services', 'get_service', 'search_catalog', 'get_service_form'] },
                  { service: 'Approval Service', tools: ['get_pending', 'approve', 'reject', 'get_history', 'escalate'] },
                  { service: 'Notification', tools: ['send_email', 'send_slack', 'send_webhook', 'get_status'] },
                  { service: 'Inventory', tools: ['get_server', 'list_assets', 'search_cmdb', 'get_relationships'] },
                  { service: 'IaC Engine', tools: ['run_playbook', 'run_terraform', 'get_execution_log', 'get_output'] },
                  { service: 'Cisco Intersight', tools: ['get_servers', 'deploy_profile', 'get_alarms', 'upgrade_firmware'] },
                ].map((svc, i) => (
                  <div key={i} className="bg-slate-900/60 rounded-lg p-3">
                    <div className="font-semibold text-green-300 mb-2">{svc.service}</div>
                    <div className="flex flex-wrap gap-1">
                      {svc.tools.map((tool, j) => (
                        <span key={j} className="bg-slate-700 rounded px-2 py-0.5 font-mono">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-400">MCP Server Implementation</span>
                <span className="text-xs bg-green-600 rounded px-2 py-1">Python</span>
              </div>
              <pre className="text-xs text-slate-300 overflow-x-auto">
                {`from advensis_mcp import MCPServer, tool, resource

class WorkflowMCPServer(MCPServer):
    """MCP Server for SVW Workflow Service"""
    
    def __init__(self, workflow_service):
        super().__init__(name="workflow-mcp", version="1.0.0")
        self.workflow_service = workflow_service
    
    @tool(
        name="trigger_workflow",
        description="Trigger a workflow execution",
        parameters={
            "workflow_id": {"type": "string", "description": "Workflow ID"},
            "inputs": {"type": "object", "description": "Input parameters"}
        }
    )
    async def trigger_workflow(self, workflow_id: str, inputs: dict):
        execution = await self.workflow_service.trigger(
            workflow_id=workflow_id,
            inputs=inputs
        )
        return {"execution_id": execution.id, "status": execution.status}
    
    @tool(name="get_execution_status")
    async def get_status(self, execution_id: str):
        return await self.workflow_service.get_execution(execution_id)
    
    @resource(uri="workflow://list")
    async def list_workflows(self):
        return await self.workflow_service.list_all()

# Run server
server = WorkflowMCPServer(workflow_service)
server.run(host="0.0.0.0", port=9100)`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    // Slide 7: Phase 4 - Multi-Agent System
    {
      id: 'phase4',
      content: (
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl font-bold text-amber-400">04</span>
            <h2 className="text-2xl font-bold">Multi-Agent AI System</h2>
          </div>
          <div className="text-center text-slate-400 mb-6">Owner: <span className="text-amber-400 font-semibold">Tamim</span> | Duration: 3-4 weeks</div>

          <div className="max-w-5xl mx-auto">
            {/* Agent Architecture */}
            <div className="bg-amber-950/30 rounded-xl p-4 border border-amber-600/30 mb-4">
              <h3 className="font-bold text-lg mb-4 text-amber-300 text-center">🤖 Agent Hierarchy</h3>

              {/* Orchestrator */}
              <div className="bg-amber-900/40 rounded-xl p-4 mb-4 max-w-md mx-auto border border-amber-600">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎭</div>
                  <div className="font-bold text-amber-300">Orchestrator Agent</div>
                  <div className="text-xs text-amber-400 mt-1">Task decomposition • Agent coordination • Result aggregation</div>
                </div>
              </div>

              {/* Specialized Agents */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: 'Workflow Agent', icon: '🔄', color: '#8B5CF6', mcp: ['workflow', 'approval', 'scheduler'] },
                  { name: 'Infra Agent', icon: '🏗️', color: '#EF4444', mcp: ['iac', 'inventory', 'file'] },
                  { name: 'Support Agent', icon: '🎧', color: '#10B981', mcp: ['catalog', 'notification', 'report'] },
                  { name: 'Cisco Agent', icon: '🌐', color: '#06B6D4', mcp: ['intersight'] },
                  { name: 'IaC Agent', icon: '⚙️', color: '#F97316', mcp: ['iac', 'file'] },
                  { name: 'Knowledge Agent', icon: '🧠', color: '#14B8A6', mcp: ['neo4j'] },
                ].map((agent, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 border"
                    style={{ backgroundColor: `${agent.color}15`, borderColor: `${agent.color}50` }}
                  >
                    <div className="text-center mb-2">
                      <span className="text-2xl">{agent.icon}</span>
                      <div className="font-semibold text-sm" style={{ color: agent.color }}>{agent.name}</div>
                    </div>
                    <div className="text-[10px] text-slate-500">MCP: {agent.mcp.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agency Library */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 mb-4">
              <h3 className="font-bold text-lg mb-3 text-slate-300">📚 Agency Library Setup</h3>
              <p className="text-sm text-slate-400 mb-3">
                Using <strong className="text-amber-300">Agency</strong> library for multi-agent orchestration with MCP integration.
              </p>
              <pre className="text-xs text-slate-300 bg-slate-900 rounded-lg p-3 overflow-x-auto">
                {`from agency_swarm import Agency, Agent
from advensis_mcp import MCPClient

# Define agents with MCP connections
workflow_agent = Agent(
    name="WorkflowAgent",
    description="Handles workflow operations",
    tools=[
        MCPClient("http://workflow-mcp:9100"),
        MCPClient("http://approval-mcp:9100"),
    ],
    instructions="You manage workflow executions..."
)

cisco_agent = Agent(
    name="CiscoAgent", 
    description="Manages Cisco Intersight infrastructure",
    tools=[MCPClient("http://intersight-mcp:9100")],
    instructions="You handle Cisco server operations..."
)

# Create agency with communication flows
agency = Agency(
    [
        orchestrator,                    # Entry point
        [orchestrator, workflow_agent],  # Orchestrator can talk to Workflow
        [orchestrator, cisco_agent],     # Orchestrator can talk to Cisco
        [workflow_agent, cisco_agent],   # Workflow can delegate to Cisco
    ],
    shared_instructions="You are part of Advensis IT automation..."
)

# Run
agency.run_demo()  # Gradio UI
# or
response = agency.get_completion("Deploy a new UCS server")`}
              </pre>
            </div>

            {/* Knowledge Graph */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-teal-950/40 rounded-xl p-4 border border-teal-600/30">
                <h4 className="font-bold text-teal-300 mb-3">🕸️ Neo4j Knowledge Graph</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Entity nodes (Users, Servers, Services)</li>
                  <li>• Relationship edges (owns, manages, depends_on)</li>
                  <li>• Vector embeddings for semantic search</li>
                  <li>• Agent conversation memory</li>
                </ul>
              </div>
              <div className="bg-violet-950/40 rounded-xl p-4 border border-violet-600/30">
                <h4 className="font-bold text-violet-300 mb-3">📝 Dynamic Prompt Engine</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Template versioning</li>
                  <li>• Variable injection</li>
                  <li>• A/B testing prompts</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Phase 5 - Cisco Intersight
    {
      id: 'phase5',
      content: (
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl font-bold text-cyan-400">05</span>
            <h2 className="text-2xl font-bold">Cisco Intersight Service</h2>
          </div>
          <div className="text-center text-slate-400 mb-6">Owner: <span className="text-cyan-400 font-semibold">Tamim + Dheeraz</span> | Duration: 3-4 weeks</div>

          <div className="max-w-5xl mx-auto">
            {/* Service Architecture */}
            <div className="bg-cyan-950/30 rounded-xl p-4 border border-cyan-600/30 mb-4">
              <h3 className="font-bold text-lg mb-4 text-cyan-300 text-center">🏗️ Service Architecture</h3>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                {[
                  { icon: '🔐', name: 'Auth Module', desc: 'API Key + Secret signing' },
                  { icon: '📦', name: 'Compute Module', desc: 'Server management' },
                  { icon: '⚙️', name: 'Profiles Module', desc: 'Server profiles' },
                  { icon: '🔧', name: 'Firmware Module', desc: 'Upgrades' },
                  { icon: '🌐', name: 'Network Module', desc: 'VNICs, VLANs' },
                  { icon: '💾', name: 'Storage Module', desc: 'SAN/NAS policies' },
                  { icon: '📡', name: 'Webhooks', desc: 'Event handling' },
                  { icon: '🔄', name: 'Sync Module', desc: 'Inventory sync' },
                ].map((mod, i) => (
                  <div key={i} className="bg-cyan-900/30 rounded-lg p-3 text-center">
                    <div className="text-xl">{mod.icon}</div>
                    <div className="font-semibold text-sm text-cyan-300">{mod.name}</div>
                    <div className="text-[10px] text-slate-500">{mod.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Structure */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
                <h4 className="font-semibold text-slate-300 mb-3">📁 Service Structure</h4>
                <pre className="text-xs text-slate-400 font-mono">
                  {`advensis-intersight-service/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── servers.py
│   │   │   ├── profiles.py
│   │   │   └── firmware.py
│   ├── services/
│   │   ├── intersight_client.py
│   │   ├── compute_service.py
│   │   ├── profile_service.py
│   │   └── sync_service.py
│   ├── auth/
│   │   ├── signer.py
│   │   └── credentials.py
│   ├── mcp/
│   │   ├── server.py
│   │   └── tools/
│   └── kafka/
│       ├── producers.py
│       └── consumers.py
├── kubernetes/
├── Dockerfile
└── pyproject.toml`}
                </pre>
              </div>

              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
                <h4 className="font-semibold text-slate-300 mb-3">🔐 Intersight Auth</h4>
                <pre className="text-xs text-slate-300 bg-slate-900 rounded-lg p-3 overflow-x-auto">
                  {`from intersight_auth import IntersightAuth
import requests

class IntersightClient:
    BASE_URL = "https://intersight.com/api/v1"
    
    def __init__(self, api_key_id: str, 
                 api_secret_path: str):
        self.auth = IntersightAuth(
            api_key_id=api_key_id,
            secret_key_path=api_secret_path
        )
    
    def get_servers(self):
        url = f"{self.BASE_URL}/compute/PhysicalSummaries"
        headers = self.auth.get_auth_headers(
            method="GET", 
            url=url
        )
        response = requests.get(url, headers=headers)
        return response.json()
    
    def deploy_profile(self, server_moid: str, 
                       profile_moid: str):
        # Deploy server profile
        ...`}
                </pre>
              </div>
            </div>

            {/* Data Flow */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
              <h4 className="font-semibold text-slate-300 mb-3">🔄 Data Flow</h4>
              <div className="flex items-center justify-center gap-2 flex-wrap text-xs py-2">
                {[
                  { label: 'Intersight API', bg: 'cyan' },
                  { label: '→', bg: 'none' },
                  { label: 'Intersight Service', bg: 'green' },
                  { label: '→', bg: 'none' },
                  { label: 'Kafka Events', bg: 'orange' },
                  { label: '→', bg: 'none' },
                  { label: 'Inventory + Neo4j', bg: 'purple' },
                ].map((item, i) => (
                  item.bg === 'none' ?
                    <span key={i} className="text-slate-600">→</span> :
                    <span key={i} className={`bg-${item.bg}-600/30 border border-${item.bg}-600/50 rounded-lg px-3 py-2`}>{item.label}</span>
                ))}
              </div>
              <div className="text-center text-slate-500 text-xs mt-2">
                Webhooks from Intersight → Kafka topic → Consumers update CMDB + Knowledge Graph
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: Timeline
    {
      id: 'timeline',
      content: (
        <div className="h-full overflow-y-auto">
          <h2 className="text-3xl font-bold text-center mb-8">📅 Implementation Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

              {/* Timeline items */}
              {[
                { week: 'Week 1-2', phase: 'K8s + Istio Setup', owner: 'Tamim', color: '#8B5CF6' },
                { week: 'Week 3-4', phase: 'Security + Logging', owner: 'Tamim', color: '#8B5CF6' },
                { week: 'Week 5-6', phase: 'CI/CD Pipeline', owner: 'Tamim', color: '#8B5CF6' },
                { week: 'Week 7-8', phase: 'Permission SDK', owner: 'Tamim + Jana', color: '#3B82F6' },
                { week: 'Week 9-10', phase: 'MCP Base Library', owner: 'Jana + Dheeraz', color: '#10B981' },
                { week: 'Week 11-13', phase: 'MCP per Service', owner: 'Jana + Dheeraz', color: '#10B981' },
                { week: 'Week 14-15', phase: 'Agency Setup', owner: 'Tamim', color: '#F59E0B' },
                { week: 'Week 16-17', phase: 'Agent Implementation', owner: 'Tamim', color: '#F59E0B' },
                { week: 'Week 18-20', phase: 'Intersight Service', owner: 'Tamim + Dheeraz', color: '#06B6D4' },
                { week: 'Ongoing', phase: 'Service Business Logic', owner: 'Jana + Dheeraz', color: '#EF4444' },
              ].map((item, i) => (
                <div key={i} className="relative pl-20 pb-6">
                  <div
                    className="absolute left-6 w-4 h-4 rounded-full border-2 bg-slate-900"
                    style={{ borderColor: item.color }}
                  ></div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: item.color }}>{item.week}</span>
                      <span className="text-xs text-slate-500">{item.owner}</span>
                    </div>
                    <div className="font-semibold text-slate-300 mt-1">{item.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Slide 10: Summary
    {
      id: 'summary',
      content: (
        <div className="h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">🎯 Summary</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <div className="font-bold text-xl text-slate-300 mb-2">Infrastructure</div>
              <div className="text-sm text-slate-400">K8s + Istio + Blue-Green CI/CD</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-3">🔌</div>
              <div className="font-bold text-xl text-slate-300 mb-2">MCP Ecosystem</div>
              <div className="text-sm text-slate-400">14 Services with MCP Servers</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-3">🤖</div>
              <div className="font-bold text-xl text-slate-300 mb-2">AI Agents</div>
              <div className="text-sm text-slate-400">7 Specialized Agents + Orchestrator</div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-6 max-w-2xl">
            <div className="text-center">
              <div className="font-bold text-xl mb-2">🚀 Let's Build The Future!</div>
              <div className="text-sm opacity-90">
                From 14 microservices to an enterprise-grade, AI-powered platform
              </div>
            </div>
          </div>

          <div className="mt-8 text-slate-500 text-sm">
            Advensis Microservices v2.0 | 2025
          </div>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    setExpandedSection(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    setExpandedSection(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <div className="text-sm font-semibold text-slate-400">
            Advensis Roadmap
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSlide(i); setExpandedSection(null); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-purple-500 w-4' : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="pt-16 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto h-full py-8">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${currentSlide === 0
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            ← Previous
          </button>

          <div className="text-sm text-slate-500 capitalize">
            {slides[currentSlide].id.replace(/([0-9])/g, ' $1')}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${currentSlide === slides.length - 1
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-500'
              }`}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 text-slate-600 text-xs">
        Use arrow keys or click to navigate
      </div>
    </div>
  );
};

export default AdvensisRoadmapPresentation;
