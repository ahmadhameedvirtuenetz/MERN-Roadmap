import { useState } from 'react';

// ============ ICONS ============
const Icons = {
  ChevronRight: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>,
  ChevronDown: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>,
  Check: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  Book: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Code: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>,
  Database: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  Server: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  Globe: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Rocket: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
  External: ({ className }) => <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Menu: ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Copy: ({ className }) => <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Terminal: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  Zap: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Clock: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Users: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Briefcase: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Target: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Award: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  GitBranch: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
  Shield: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Cloud: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  Layers: ({ className }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
};

// ============ CODE BLOCK COMPONENT ============
const CodeBlock = ({ code, language = 'javascript', title }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
          <span className="text-sm text-slate-400 font-mono">{title}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-400">{language}</span>
          </div>
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyCode}
          className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          {copied ? <Icons.Check className="w-4 h-4 text-green-400" /> : <Icons.Copy className="w-4 h-4 text-slate-400" />}
        </button>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-slate-300 font-mono whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  );
};

// ============ CALLOUT COMPONENT ============
const Callout = ({ type = 'info', title, children }) => {
  const styles = {
    info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: '💡', titleColor: 'text-blue-400' },
    warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: '⚠️', titleColor: 'text-amber-400' },
    success: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: '✅', titleColor: 'text-emerald-400' },
    tip: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: '🚀', titleColor: 'text-purple-400' },
    error: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: '❌', titleColor: 'text-red-400' },
  };
  const s = styles[type];

  return (
    <div className={`my-4 p-4 rounded-xl ${s.bg} border ${s.border}`}>
      <div className={`font-semibold ${s.titleColor} flex items-center gap-2 mb-2`}>
        <span>{s.icon}</span> {title}
      </div>
      <div className="text-slate-300 text-sm">{children}</div>
    </div>
  );
};

// ============ RESOURCE LINK COMPONENT ============
const ResourceLink = ({ href, title, description, type = 'docs' }) => {
  const typeStyles = {
    docs: { color: 'text-blue-400', bg: 'bg-blue-500/10', label: 'Official Docs' },
    tutorial: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Tutorial' },
    video: { color: 'text-red-400', bg: 'bg-red-500/10', label: 'Video' },
    tool: { color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'Tool' },
    article: { color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Article' },
  };
  const style = typeStyles[type];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group"
    >
      <Icons.External className={`w-4 h-4 ${style.color} mt-0.5 shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">{title}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${style.bg} ${style.color}`}>{style.label}</span>
        </div>
        {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
      </div>
    </a>
  );
};

// ============ LEARNING RESOURCES BOX ============
const LearningResources = ({ title = "Learning Resources", children }) => (
  <div className="my-6 p-5 rounded-xl bg-slate-800/20 border border-slate-700/50">
    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
      <Icons.Book className="w-5 h-5 text-cyan-400" />
      {title}
    </h3>
    <div className="grid gap-2">
      {children}
    </div>
  </div>
);

// ============ MERN ARCHITECTURE DIAGRAM ============
const MERNArchitectureDiagram = () => (
  <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50">
    <h3 className="text-xl font-bold text-white text-center mb-6">MERN Stack Architecture</h3>

    {/* Main Architecture Flow */}
    <div className="relative">
      {/* Client Layer */}
      <div className="flex justify-center mb-4">
        <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/20">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <div>
              <div className="text-white font-bold">Client (Browser)</div>
              <div className="text-blue-200 text-xs">User Interface</div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
          <div className="text-cyan-400 text-xs font-medium px-2 py-1 rounded bg-slate-800/80">HTTP Requests</div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-400"></div>
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {/* React Frontend */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-md p-4 rounded-xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <span className="text-2xl font-black text-cyan-400">R</span>
            </div>
            <div>
              <div className="text-white font-bold">React.js</div>
              <div className="text-cyan-400 text-xs">Frontend Library</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Components</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">State/Hooks</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Virtual DOM</div>
          </div>
        </div>
      </div>

      {/* Arrow Down with API Label */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-slate-400"></div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/80 border border-slate-600">
            <span className="text-slate-300 text-xs font-medium">REST API / JSON</span>
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-slate-400 to-slate-500"></div>
          <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {/* Node.js + Express Backend */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-lg p-4 rounded-xl bg-gradient-to-r from-slate-600/20 to-slate-500/20 border border-slate-500/30">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-lime-500/20 flex items-center justify-center">
                <span className="text-2xl font-black text-lime-400">N</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Node.js</div>
                <div className="text-lime-400 text-xs">Runtime</div>
              </div>
            </div>
            <div className="text-slate-500 text-2xl">+</div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-slate-500/20 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-300">E</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Express.js</div>
                <div className="text-slate-400 text-xs">Framework</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Routes</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Controllers</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Middleware</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Auth</div>
          </div>
        </div>
      </div>

      {/* Arrow Down with Mongoose Label */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-gradient-to-b from-slate-500 to-emerald-500"></div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/80 border border-emerald-600/50">
            <span className="text-emerald-400 text-xs font-medium">Mongoose ODM</span>
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600"></div>
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {/* MongoDB Database */}
      <div className="flex justify-center">
        <div className="w-full max-w-md p-4 rounded-xl bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <span className="text-2xl font-black text-emerald-400">M</span>
            </div>
            <div>
              <div className="text-white font-bold">MongoDB</div>
              <div className="text-emerald-400 text-xs">NoSQL Database</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Collections</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">Documents</div>
            <div className="p-2 rounded bg-slate-800/50 text-center text-slate-400">BSON Data</div>
          </div>
        </div>
      </div>
    </div>

    {/* Data Flow Legend */}
    <div className="mt-6 pt-4 border-t border-slate-700/50">
      <div className="flex flex-wrap justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-slate-400">Frontend (React)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-500"></div>
          <span className="text-slate-400">Backend (Node/Express)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-slate-400">Database (MongoDB)</span>
        </div>
      </div>
    </div>
  </div>
);

// ============ DATA FLOW DIAGRAM ============
const DataFlowDiagram = () => (
  <div className="my-8 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
    <h3 className="text-lg font-bold text-white text-center mb-6">Request-Response Cycle</h3>

    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Step 1 */}
      <div className="flex-1 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2">1</div>
        <div className="text-blue-400 font-semibold text-sm">User Action</div>
        <div className="text-slate-500 text-xs mt-1">Click, Submit, Navigate</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:block">
        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>
      <div className="md:hidden">
        <svg className="w-8 h-8 text-slate-600 rotate-90" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>

      {/* Step 2 */}
      <div className="flex-1 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
        <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center mx-auto mb-2">2</div>
        <div className="text-cyan-400 font-semibold text-sm">React</div>
        <div className="text-slate-500 text-xs mt-1">Fetch API / Axios</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:block">
        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>
      <div className="md:hidden">
        <svg className="w-8 h-8 text-slate-600 rotate-90" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>

      {/* Step 3 */}
      <div className="flex-1 p-4 rounded-xl bg-slate-500/10 border border-slate-500/30 text-center">
        <div className="w-8 h-8 rounded-full bg-slate-500 text-white font-bold flex items-center justify-center mx-auto mb-2">3</div>
        <div className="text-slate-300 font-semibold text-sm">Express API</div>
        <div className="text-slate-500 text-xs mt-1">Process Request</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:block">
        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>
      <div className="md:hidden">
        <svg className="w-8 h-8 text-slate-600 rotate-90" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 17l5-5-5-5v10z"/>
        </svg>
      </div>

      {/* Step 4 */}
      <div className="flex-1 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto mb-2">4</div>
        <div className="text-emerald-400 font-semibold text-sm">MongoDB</div>
        <div className="text-slate-500 text-xs mt-1">CRUD Operations</div>
      </div>
    </div>

    {/* Return Flow */}
    <div className="mt-4 flex items-center justify-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span className="text-purple-400 text-sm font-medium">JSON Response returns to React → UI Updates</span>
      </div>
    </div>
  </div>
);

// ============ SECTION HEADER COMPONENT ============
const SectionHeader = ({ title, subtitle, gradient = "from-cyan-400 to-blue-500" }) => (
  <div className="mb-8">
    <h1 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {title}
    </h1>
    {subtitle && <p className="text-slate-400 mt-2 text-lg">{subtitle}</p>}
  </div>
);

// ============ CONCEPT CARD COMPONENT ============
const ConceptCard = ({ title, description, icon, color = "cyan" }) => {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400",
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    emerald: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    amber: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400",
  };

  return (
    <div className={`p-5 rounded-xl bg-gradient-to-br ${colors[color]} border`}>
      <div className="flex items-start gap-4">
        {icon && <div className="text-2xl">{icon}</div>}
        <div>
          <h4 className="font-bold text-white mb-2">{title}</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// ============ TECHNOLOGY STACK COMPONENT ============
const TechStackBadge = ({ name, version, color, description }) => (
  <div className="group relative">
    <div
      className="px-4 py-2 rounded-lg border transition-all hover:scale-105 cursor-pointer"
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}40`
      }}
    >
      <span className="font-semibold text-sm" style={{ color }}>{name}</span>
      {version && <span className="text-slate-500 text-xs ml-2">v{version}</span>}
    </div>
    {description && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
        {description}
      </div>
    )}
  </div>
);

// ============ DOCUMENTATION DATA ============
const docData = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      icon: Icons.Book,
      color: '#06B6D4',
    },
    {
      id: 'roadmap',
      title: 'Learning Roadmap',
      icon: Icons.Target,
      color: '#F43F5E',
    },
    {
      id: 'phase1',
      title: 'Phase 1: Foundations',
      icon: Icons.Layers,
      color: '#6366F1',
      subsections: ['html-css', 'javascript-fundamentals', 'es6-features', 'git-github']
    },
    {
      id: 'phase2',
      title: 'Phase 2: Node.js & Express',
      icon: Icons.Server,
      color: '#22C55E',
      subsections: ['nodejs-basics', 'npm-modules', 'express-basics', 'rest-api', 'middleware']
    },
    {
      id: 'phase3',
      title: 'Phase 3: React.js',
      icon: Icons.Globe,
      color: '#3B82F6',
      subsections: ['react-fundamentals', 'react-hooks', 'state-management', 'react-router']
    },
    {
      id: 'phase4',
      title: 'Phase 4: MongoDB',
      icon: Icons.Database,
      color: '#10B981',
      subsections: ['mongodb-basics', 'mongoose-odm', 'crud-operations', 'aggregation']
    },
    {
      id: 'phase5',
      title: 'Phase 5: Integration & Auth',
      icon: Icons.Shield,
      color: '#8B5CF6',
      subsections: ['fullstack-integration', 'jwt-auth', 'security-best-practices']
    },
    {
      id: 'phase6',
      title: 'Phase 6: Deployment',
      icon: Icons.Cloud,
      color: '#F59E0B',
      subsections: ['deployment-basics', 'ci-cd', 'cloud-services']
    },
    {
      id: 'career',
      title: 'Career Guide',
      icon: Icons.Briefcase,
      color: '#EC4899',
      subsections: ['projects', 'portfolio', 'interview-prep']
    }
  ]
};

// ============ OVERVIEW CONTENT ============
const OverviewContent = () => (
  <div className="space-y-8">
    <div className="text-center py-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="text-cyan-400 text-sm font-medium">Professional Developer Roadmap 2025</span>
      </div>
      <h1 className="text-5xl font-black text-white mb-4">
        MERN Stack <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Documentation</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto">
        Complete professional guide to becoming a full-stack developer with MongoDB, Express.js, React, and Node.js
      </p>
    </div>

    {/* What is MERN Stack */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">What is the MERN Stack?</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        The MERN stack is a collection of technologies that enable developers to build full-stack web applications using JavaScript throughout the entire development process. Each letter represents a core technology that handles a specific layer of the application architecture:
      </p>
      <ul className="space-y-3 text-slate-300">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
          <span><strong className="text-emerald-400">MongoDB</strong> serves as the database layer, storing application data in flexible, JSON-like documents rather than traditional table-based relational databases.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-slate-400 mt-2 shrink-0"></span>
          <span><strong className="text-slate-300">Express.js</strong> is the backend web application framework running on top of Node.js, handling HTTP requests, routing, and middleware integration.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></span>
          <span><strong className="text-blue-400">React</strong> powers the frontend, providing a component-based architecture for building dynamic, interactive user interfaces with efficient DOM updates.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-lime-400 mt-2 shrink-0"></span>
          <span><strong className="text-lime-400">Node.js</strong> provides the runtime environment that executes JavaScript code on the server, enabling the same language to be used across the entire stack.</span>
        </li>
      </ul>
    </div>

    {/* MERN Stack Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { letter: 'M', name: 'MongoDB', color: '#10B981', desc: 'NoSQL Database', details: 'Document-based database storing JSON-like BSON documents with flexible schemas' },
        { letter: 'E', name: 'Express.js', color: '#64748B', desc: 'Backend Framework', details: 'Minimal, flexible Node.js web framework for building APIs and web applications' },
        { letter: 'R', name: 'React', color: '#3B82F6', desc: 'Frontend Library', details: 'Component-based JavaScript library for building interactive user interfaces' },
        { letter: 'N', name: 'Node.js', color: '#84CC16', desc: 'Runtime Environment', details: 'JavaScript runtime built on Chrome V8 engine for server-side development' }
      ].map((tech) => (
        <div key={tech.letter} className="group p-5 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all cursor-pointer hover:scale-105">
          <span className="text-4xl font-black" style={{ color: tech.color }}>{tech.letter}</span>
          <p className="font-bold text-white mt-2">{tech.name}</p>
          <p className="text-sm text-slate-500">{tech.desc}</p>
          <p className="text-xs text-slate-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{tech.details}</p>
        </div>
      ))}
    </div>

    {/* MERN Architecture Diagram */}
    <MERNArchitectureDiagram />

    {/* Data Flow Diagram */}
    <DataFlowDiagram />

    {/* Technology Versions */}
    <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
      <h2 className="text-xl font-bold text-white mb-4">Recommended Technology Versions</h2>
      <div className="flex flex-wrap gap-3">
        <TechStackBadge name="Node.js" version="20 LTS" color="#84CC16" description="JavaScript runtime" />
        <TechStackBadge name="Express.js" version="4.18+" color="#64748B" description="Web framework" />
        <TechStackBadge name="React" version="18.2+" color="#61DAFB" description="UI library" />
        <TechStackBadge name="MongoDB" version="7.0+" color="#10B981" description="Database" />
        <TechStackBadge name="Mongoose" version="8.0+" color="#880000" description="MongoDB ODM" />
        <TechStackBadge name="Vite" version="5.0+" color="#646CFF" description="Build tool" />
        <TechStackBadge name="Tailwind CSS" version="3.4+" color="#38BDF8" description="CSS framework" />
      </div>
    </div>

    {/* How MERN Works Together - Enhanced */}
    <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">How the Stack Works Together</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Understanding how these technologies communicate is essential for building MERN applications. Here's the typical data flow:
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
          <div>
            <p className="font-medium text-white">User Interaction (React)</p>
            <p className="text-sm text-slate-400">The user interacts with the React frontend—clicking buttons, submitting forms, or navigating pages.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50">
          <div className="w-10 h-10 rounded-lg bg-slate-500/20 flex items-center justify-center text-slate-300 font-bold">2</div>
          <div>
            <p className="font-medium text-white">API Request (Express/Node)</p>
            <p className="text-sm text-slate-400">React sends HTTP requests to the Express.js API endpoints running on the Node.js server.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</div>
          <div>
            <p className="font-medium text-white">Database Operations (MongoDB)</p>
            <p className="text-sm text-slate-400">Express processes the request and performs CRUD operations on MongoDB through Mongoose ODM.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">4</div>
          <div>
            <p className="font-medium text-white">Response & UI Update</p>
            <p className="text-sm text-slate-400">Data flows back through Express to React, which updates the UI using its virtual DOM for efficient rendering.</p>
          </div>
        </div>
      </div>
    </div>

    <Callout type="info" title="Why Choose MERN Stack?">
      <p className="mb-3">The MERN stack offers several compelling advantages for modern web development:</p>
      <ul className="space-y-2">
        <li><strong>Single Language:</strong> JavaScript everywhere means developers can work across the entire stack without context switching between languages.</li>
        <li><strong>JSON Data Flow:</strong> Data flows naturally as JSON from database to frontend, eliminating complex data transformations.</li>
        <li><strong>Rich Ecosystem:</strong> Access to npm, the world's largest software registry with over 2 million packages.</li>
        <li><strong>Industry Adoption:</strong> Used by Netflix, Uber, Airbnb, and thousands of startups worldwide.</li>
      </ul>
    </Callout>

    {/* Key Benefits */}
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { icon: Icons.Code, title: 'Single Language', desc: 'JavaScript everywhere - frontend, backend, and database queries' },
        { icon: Icons.Zap, title: 'High Performance', desc: 'Non-blocking I/O and event-driven architecture for scalable apps' },
        { icon: Icons.Users, title: 'Large Community', desc: 'Extensive libraries, tools, and community support available' }
      ].map((benefit, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <benefit.icon className="w-8 h-8 text-cyan-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
          <p className="text-sm text-slate-400">{benefit.desc}</p>
        </div>
      ))}
    </div>

    {/* Prerequisites */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Icons.Check className="w-5 h-5 text-emerald-400" /> Prerequisites
        </h3>
        <ul className="space-y-2">
          {[
            'Basic understanding of how the web works (HTTP, client-server)',
            'HTML5 & semantic markup',
            'CSS3 (Flexbox, Grid, responsive design)',
            'JavaScript fundamentals (variables, functions, loops)',
            'Basic command line/terminal usage'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Icons.Terminal className="w-5 h-5 text-blue-400" /> Required Tools
        </h3>
        <ul className="space-y-2">
          {[
            { name: 'VS Code', desc: 'Code editor with extensions' },
            { name: 'Node.js (LTS)', desc: 'JavaScript runtime' },
            { name: 'Git & GitHub', desc: 'Version control system' },
            { name: 'MongoDB Compass', desc: 'Database GUI tool' },
            { name: 'Postman / Thunder Client', desc: 'API testing tool' },
            { name: 'Browser DevTools', desc: 'Chrome/Firefox developer tools' }
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
              <span><strong>{item.name}</strong> - {item.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Learning Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: '6', label: 'Learning Phases', color: 'text-cyan-400' },
        { value: '23+', label: 'Core Topics', color: 'text-blue-400' },
        { value: '50+', label: 'Code Examples', color: 'text-purple-400' },
        { value: '10+', label: 'Project Ideas', color: 'text-emerald-400' }
      ].map((stat, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 text-center">
          <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
          <div className="text-sm text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Understanding Web Development - Theory Section */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30">
      <h2 className="text-2xl font-bold text-white mb-4">Understanding Web Development</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Before diving into the MERN stack, it's essential to understand how the web works. When you visit a website, your browser (the <strong className="text-cyan-400">client</strong>) sends a request to a <strong className="text-cyan-400">server</strong>. The server processes this request and sends back a response—usually HTML, CSS, and JavaScript files that your browser renders into the page you see.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-slate-800/50">
          <h4 className="font-semibold text-blue-400 mb-2">Frontend (Client-Side)</h4>
          <p className="text-sm text-slate-400">
            Everything the user sees and interacts with in their browser. This includes the layout (HTML), styling (CSS), and interactivity (JavaScript). React handles this layer in MERN.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Backend (Server-Side)</h4>
          <p className="text-sm text-slate-400">
            The server logic that processes requests, handles business logic, authenticates users, and communicates with databases. Node.js and Express handle this in MERN.
          </p>
        </div>
      </div>

      <h3 className="font-semibold text-white mb-3 mt-6">The Client-Server Model Explained</h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-3">
        Think of a restaurant: you (the client) place an order with the waiter (the API), who takes it to the kitchen (the server). The kitchen prepares your food (processes the request, maybe fetches data from a database), and the waiter brings it back to you (the response). In web development:
      </p>
      <ul className="space-y-2 text-sm text-slate-300">
        <li className="flex items-start gap-2">
          <span className="text-cyan-400 mt-1">•</span>
          <span><strong>HTTP Request:</strong> Your browser asks for something (GET a webpage, POST form data, PUT updates, DELETE items)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-cyan-400 mt-1">•</span>
          <span><strong>Server Processing:</strong> The server receives the request, runs code, maybe queries a database</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-cyan-400 mt-1">•</span>
          <span><strong>HTTP Response:</strong> The server sends back data (HTML page, JSON data, error message, etc.)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-cyan-400 mt-1">•</span>
          <span><strong>Browser Rendering:</strong> Your browser takes the response and displays it to the user</span>
        </li>
      </ul>
    </div>

    {/* What is an API - Theory */}
    <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">What is an API?</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        <strong className="text-cyan-400">API</strong> (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. In the context of MERN, your React frontend communicates with your Express backend through a <strong>REST API</strong>.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        Think of an API like a menu at a restaurant. The menu tells you what dishes are available and how to order them. You don't need to know how the kitchen prepares the food—you just need to know what to ask for. Similarly, an API tells your frontend what data is available and how to request it.
      </p>

      <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
        <h4 className="font-semibold text-amber-400 mb-2">REST API Basics</h4>
        <p className="text-sm text-slate-400 mb-3">
          REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods to perform operations:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="p-2 rounded bg-emerald-500/20 text-center">
            <span className="font-bold text-emerald-400">GET</span>
            <p className="text-slate-500">Retrieve data</p>
          </div>
          <div className="p-2 rounded bg-blue-500/20 text-center">
            <span className="font-bold text-blue-400">POST</span>
            <p className="text-slate-500">Create new data</p>
          </div>
          <div className="p-2 rounded bg-amber-500/20 text-center">
            <span className="font-bold text-amber-400">PUT</span>
            <p className="text-slate-500">Update data</p>
          </div>
          <div className="p-2 rounded bg-red-500/20 text-center">
            <span className="font-bold text-red-400">DELETE</span>
            <p className="text-slate-500">Remove data</p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Real-World Example">
        When you check the weather on your phone, the app sends a GET request to a weather API like <code className="text-cyan-400">api.weather.com/forecast?city=mumbai</code>. The server responds with JSON data containing temperature, humidity, etc. Your app then displays this data in a nice format.
      </Callout>
    </div>

    {/* Database Concepts - Theory */}
    <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">Understanding Databases</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        A <strong className="text-cyan-400">database</strong> is an organized collection of data that can be easily accessed, managed, and updated. Applications need databases to persist data—without them, all data would be lost when the server restarts.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <h4 className="font-semibold text-blue-400 mb-2">SQL Databases (Relational)</h4>
          <p className="text-sm text-slate-400 mb-2">
            Store data in tables with rows and columns, like a spreadsheet. Data is structured with strict schemas. Examples: MySQL, PostgreSQL, SQLite.
          </p>
          <p className="text-xs text-slate-500">Best for: Complex relationships, financial data, strict data integrity</p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">NoSQL Databases (Non-Relational)</h4>
          <p className="text-sm text-slate-400 mb-2">
            Store data in flexible formats like documents (JSON), key-value pairs, or graphs. MongoDB is a document database—it stores data as JSON-like objects.
          </p>
          <p className="text-xs text-slate-500">Best for: Flexible schemas, rapid development, scalability</p>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed">
        MongoDB was chosen for the MERN stack because it stores data in a format (BSON/JSON) that JavaScript naturally works with. This means data flows seamlessly between your frontend, backend, and database without transformation.
      </p>
    </div>

    {/* Official Learning Resources */}
    <LearningResources title="Official Documentation & Learning Resources">
      <ResourceLink
        href="https://developer.mozilla.org/en-US/docs/Learn"
        title="MDN Web Docs - Learn Web Development"
        description="The best free resource for learning HTML, CSS, and JavaScript fundamentals"
        type="docs"
      />
      <ResourceLink
        href="https://www.freecodecamp.org/learn"
        title="freeCodeCamp - Full Stack Curriculum"
        description="Free interactive coding lessons and certifications"
        type="tutorial"
      />
      <ResourceLink
        href="https://react.dev/learn"
        title="React Official Tutorial"
        description="Official React documentation with interactive examples"
        type="docs"
      />
      <ResourceLink
        href="https://nodejs.org/en/learn"
        title="Node.js Official Learning Path"
        description="Official Node.js guides and documentation"
        type="docs"
      />
      <ResourceLink
        href="https://expressjs.com/en/starter/installing.html"
        title="Express.js Getting Started"
        description="Official Express.js documentation and guides"
        type="docs"
      />
      <ResourceLink
        href="https://www.mongodb.com/docs/manual/tutorial/getting-started/"
        title="MongoDB Getting Started"
        description="Official MongoDB documentation and tutorials"
        type="docs"
      />
      <ResourceLink
        href="https://www.youtube.com/watch?v=7CqJlxBYj-M"
        title="MERN Stack Crash Course (Traversy Media)"
        description="Complete MERN project tutorial on YouTube"
        type="video"
      />
      <ResourceLink
        href="https://roadmap.sh/full-stack"
        title="Full Stack Developer Roadmap"
        description="Visual roadmap for full-stack development skills"
        type="article"
      />
    </LearningResources>
  </div>
);

// ============ ROADMAP CONTENT ============
const RoadmapContent = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">MERN Stack Learning Roadmap</h1>
      <p className="text-slate-400">A structured 6-phase path from beginner to professional full-stack developer.</p>
    </div>

    <Callout type="tip" title="Learning Timeline">
      For beginners, completing the full roadmap typically takes 3-6 months with consistent daily practice.
      Experienced developers may progress faster in 1-3 months. Focus on building projects at each phase to solidify your understanding.
    </Callout>

    {/* Visual Roadmap */}
    <div className="space-y-4">
      {[
        {
          phase: 1,
          title: 'Web Foundations',
          color: '#6366F1',
          duration: 'Foundation',
          topics: ['HTML5 & Semantic Markup', 'CSS3 & Responsive Design', 'JavaScript ES6+ Features', 'Git & Version Control'],
          outcome: 'Build static websites and understand web fundamentals'
        },
        {
          phase: 2,
          title: 'Node.js & Express.js',
          color: '#22C55E',
          duration: 'Backend',
          topics: ['Node.js Core Modules', 'NPM & Package Management', 'Express.js Framework', 'REST API Development', 'Middleware & Routing'],
          outcome: 'Create backend servers and RESTful APIs'
        },
        {
          phase: 3,
          title: 'React.js',
          color: '#3B82F6',
          duration: 'Frontend',
          topics: ['Components & JSX', 'Hooks (useState, useEffect)', 'State Management', 'React Router', 'API Integration'],
          outcome: 'Build dynamic, interactive user interfaces'
        },
        {
          phase: 4,
          title: 'MongoDB',
          color: '#10B981',
          duration: 'Database',
          topics: ['MongoDB Basics', 'Mongoose ODM', 'CRUD Operations', 'Schema Design', 'Aggregation Framework'],
          outcome: 'Design and manage NoSQL databases'
        },
        {
          phase: 5,
          title: 'Integration & Security',
          color: '#8B5CF6',
          duration: 'Full-Stack',
          topics: ['Frontend-Backend Connection', 'JWT Authentication', 'Password Hashing', 'CORS & Security', 'Error Handling'],
          outcome: 'Build secure, full-stack applications'
        },
        {
          phase: 6,
          title: 'Deployment & DevOps',
          color: '#F59E0B',
          duration: 'Production',
          topics: ['Environment Variables', 'Cloud Deployment', 'CI/CD Basics', 'Performance Optimization', 'Monitoring'],
          outcome: 'Deploy and maintain production applications'
        }
      ].map((item) => (
        <div key={item.phase} className="relative">
          <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg shrink-0"
              style={{ backgroundColor: item.color }}
            >
              {item.phase}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">{item.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.topics.map((topic, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400">
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <strong className="text-slate-300">Outcome:</strong> {item.outcome}
              </p>
            </div>
          </div>
          {item.phase < 6 && (
            <div className="absolute left-7 top-full h-4 w-0.5 bg-slate-700"></div>
          )}
        </div>
      ))}
    </div>

    {/* Skills Matrix */}
    <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
      <h3 className="text-lg font-bold text-white mb-4">Skills You'll Acquire</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-emerald-400 mb-2">Technical Skills</h4>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>• Full-stack JavaScript development</li>
            <li>• RESTful API design and implementation</li>
            <li>• Database design and optimization</li>
            <li>• Authentication and authorization</li>
            <li>• Cloud deployment and DevOps basics</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-2">Professional Skills</h4>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>• Version control with Git</li>
            <li>• Code review and collaboration</li>
            <li>• Debugging and problem-solving</li>
            <li>• Documentation writing</li>
            <li>• Agile development practices</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// ============ PHASE 1 CONTENT ============
const Phase1Content = ({ subsection }) => {
  const content = {
    'html-css': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">HTML & CSS Fundamentals</h1>
        <p className="text-slate-400">The building blocks of every web page - structure and styling.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">What You'll Learn</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            HTML (HyperText Markup Language) defines the structure and content of web pages, while CSS (Cascading Style Sheets) controls their visual presentation. Together, they form the foundation of every website you'll build with the MERN stack. React components ultimately render HTML, and understanding these fundamentals will make you a better React developer.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">HTML5 Semantic Elements</h2>
        <p className="text-slate-300 mb-4">
          Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Instead of using generic <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">&lt;div&gt;</code> elements for everything, semantic elements like <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">&lt;header&gt;</code>, <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">&lt;nav&gt;</code>, <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">&lt;main&gt;</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">&lt;article&gt;</code> communicate the purpose of each section.
        </p>
        <Callout type="tip" title="Why Semantic HTML Matters">
          Semantic HTML improves accessibility for screen readers, helps search engines understand your content (SEO), makes your code more readable, and provides better hooks for CSS styling.
        </Callout>

        <CodeBlock title="Semantic HTML Structure" language="html" code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My MERN App</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h1>Welcome to My App</h1>
      <section>
        <h2>Features</h2>
        <p>Discover what makes our app special.</p>
      </section>
    </article>

    <aside>
      <h3>Related Links</h3>
      <!-- Sidebar content -->
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 My MERN App. All rights reserved.</p>
  </footer>
</body>
</html>`} />

        <h2 className="text-xl font-semibold text-white mt-8">CSS Flexbox</h2>
        <p className="text-slate-300">Flexbox is a one-dimensional layout method for arranging items in rows or columns.</p>

        <CodeBlock title="Flexbox Layout" language="css" code={`/* Container properties */
.flex-container {
  display: flex;
  flex-direction: row;      /* row | column | row-reverse | column-reverse */
  justify-content: center;  /* flex-start | flex-end | center | space-between | space-around */
  align-items: center;      /* flex-start | flex-end | center | stretch | baseline */
  flex-wrap: wrap;          /* nowrap | wrap | wrap-reverse */
  gap: 1rem;                /* spacing between items */
}

/* Item properties */
.flex-item {
  flex-grow: 1;     /* how much item should grow */
  flex-shrink: 0;   /* how much item should shrink */
  flex-basis: 200px; /* initial size before growing/shrinking */
  /* Shorthand: flex: 1 0 200px; */
}

/* Common patterns */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  max-width: 400px;
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">CSS Grid</h2>
        <p className="text-slate-300">CSS Grid is a two-dimensional layout system for complex layouts.</p>

        <CodeBlock title="CSS Grid Layout" language="css" code={`/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-rows: auto;
  gap: 1rem;
}

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Named grid areas */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Spanning columns/rows */
.featured-item {
  grid-column: span 2;  /* spans 2 columns */
  grid-row: span 2;     /* spans 2 rows */
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Responsive Design</h2>

        <CodeBlock title="Media Queries" language="css" code={`/* Mobile-first approach */
.container {
  padding: 1rem;
  max-width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}

/* Common breakpoints:
   - 640px  (sm) - Mobile landscape
   - 768px  (md) - Tablet
   - 1024px (lg) - Desktop
   - 1280px (xl) - Large desktop
*/`} />

        <Callout type="tip" title="Best Practice">
          Always use a mobile-first approach. Start with styles for mobile devices and add complexity for larger screens using min-width media queries.
        </Callout>

        {/* Box Model Theory */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-8">
          <h3 className="font-semibold text-white mb-3">Understanding the CSS Box Model</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Every HTML element is a rectangular box. The <strong className="text-cyan-400">CSS Box Model</strong> describes how these boxes are sized and spaced. Understanding this concept is crucial for creating precise layouts.
          </p>
          <div className="grid md:grid-cols-4 gap-3 text-center text-sm">
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30">
              <span className="font-semibold text-red-400">Margin</span>
              <p className="text-xs text-slate-500 mt-1">Space outside the border</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <span className="font-semibold text-amber-400">Border</span>
              <p className="text-xs text-slate-500 mt-1">Edge around padding</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <span className="font-semibold text-emerald-400">Padding</span>
              <p className="text-xs text-slate-500 mt-1">Space inside border</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <span className="font-semibold text-blue-400">Content</span>
              <p className="text-xs text-slate-500 mt-1">Actual content area</p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Common Beginner Mistakes">
          <ul className="space-y-1">
            <li>• Forgetting to add <code className="text-cyan-400">box-sizing: border-box</code> (makes width/height include padding and border)</li>
            <li>• Using IDs (#) for styling instead of classes (.) - IDs are too specific</li>
            <li>• Not using semantic HTML elements (using div for everything)</li>
            <li>• Forgetting the viewport meta tag for responsive design</li>
          </ul>
        </Callout>

        <LearningResources title="HTML & CSS Learning Resources">
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
            title="MDN HTML Guide"
            description="Comprehensive HTML tutorial from basics to advanced"
            type="docs"
          />
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
            title="MDN CSS Guide"
            description="Complete CSS learning path with examples"
            type="docs"
          />
          <ResourceLink
            href="https://web.dev/learn/css/"
            title="Google's Learn CSS"
            description="Modern CSS course by Google Chrome team"
            type="tutorial"
          />
          <ResourceLink
            href="https://flexboxfroggy.com/"
            title="Flexbox Froggy"
            description="Interactive game to learn CSS Flexbox"
            type="tutorial"
          />
          <ResourceLink
            href="https://cssgridgarden.com/"
            title="Grid Garden"
            description="Interactive game to learn CSS Grid"
            type="tutorial"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=G3e-cpL7ofc"
            title="HTML & CSS Full Course (SuperSimpleDev)"
            description="6+ hour comprehensive course for beginners"
            type="video"
          />
        </LearningResources>
      </div>
    ),

    'javascript-fundamentals': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">JavaScript Fundamentals</h1>
        <p className="text-slate-400">Core JavaScript concepts every developer must master.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">The Language of the Web</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            JavaScript is the programming language that powers interactivity on the web. In the MERN stack, JavaScript is unique because it runs everywhere: in the browser (React), on the server (Node.js), and even in database queries (MongoDB). Mastering JavaScript fundamentals is essential because every other technology in the stack builds upon it.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            This section covers the core concepts you'll use daily: variables for storing data, functions for organizing logic, arrays and objects for structuring information, and the methods that manipulate them.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">Variables & Data Types</h2>
        <p className="text-slate-300 mb-4">
          Variables are containers that store data values. JavaScript has three ways to declare variables: <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">const</code> for values that won't change, <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">let</code> for values that will change, and <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">var</code> (legacy, avoid in modern code). JavaScript is dynamically typed, meaning variables can hold any type of data.
        </p>

        <CodeBlock title="Variables and Types" language="javascript" code={`// Primitive Types
const string = "Hello, World!";
const number = 42;
const decimal = 3.14;
const boolean = true;
const nothing = null;
const notDefined = undefined;
const uniqueId = Symbol('id');
const bigNumber = 9007199254740991n; // BigInt

// Reference Types
const array = [1, 2, 3, 4, 5];
const object = { name: 'John', age: 30 };
const func = function() { return 'Hello'; };

// Type checking
console.log(typeof string);    // "string"
console.log(typeof number);    // "number"
console.log(typeof boolean);   // "boolean"
console.log(typeof object);    // "object"
console.log(typeof array);     // "object" (arrays are objects)
console.log(Array.isArray(array)); // true`} />

        <h2 className="text-xl font-semibold text-white mt-8">Functions</h2>

        <CodeBlock title="Function Types" language="javascript" code={`// Function Declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression
const greetExpression = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow Function
const greetArrow = (name) => \`Hello, \${name}!\`;

// Default Parameters
function createUser(name, role = 'user', active = true) {
  return { name, role, active };
}

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher-Order Functions
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling with args: \${args}\`);
    const result = fn(...args);
    console.log(\`Result: \${result}\`);
    return result;
  };
}

const loggedSum = withLogging(sum);
loggedSum(1, 2, 3); // Logs the call and result`} />

        <h2 className="text-xl font-semibold text-white mt-8">Array Methods</h2>

        <CodeBlock title="Essential Array Methods" language="javascript" code={`const users = [
  { id: 1, name: 'Alice', age: 25, role: 'admin' },
  { id: 2, name: 'Bob', age: 30, role: 'user' },
  { id: 3, name: 'Charlie', age: 35, role: 'user' },
  { id: 4, name: 'Diana', age: 28, role: 'admin' }
];

// map - Transform each element
const names = users.map(user => user.name);
// ['Alice', 'Bob', 'Charlie', 'Diana']

// filter - Keep elements that pass a test
const admins = users.filter(user => user.role === 'admin');
// [{ id: 1, name: 'Alice'... }, { id: 4, name: 'Diana'... }]

// find - Get first matching element
const bob = users.find(user => user.name === 'Bob');
// { id: 2, name: 'Bob', age: 30, role: 'user' }

// findIndex - Get index of first match
const bobIndex = users.findIndex(user => user.name === 'Bob');
// 1

// some - Check if any element passes test
const hasAdmin = users.some(user => user.role === 'admin');
// true

// every - Check if all elements pass test
const allAdults = users.every(user => user.age >= 18);
// true

// reduce - Accumulate to single value
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// 118

// sort - Sort elements (mutates array)
const sortedByAge = [...users].sort((a, b) => a.age - b.age);

// Chaining methods
const adminNames = users
  .filter(user => user.role === 'admin')
  .map(user => user.name)
  .sort();
// ['Alice', 'Diana']`} />

        <h2 className="text-xl font-semibold text-white mt-8">Objects & Classes</h2>

        <CodeBlock title="Objects and Classes" language="javascript" code={`// Object literal
const user = {
  name: 'John',
  email: 'john@example.com',
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Object destructuring
const { name, email } = user;

// Spread operator
const updatedUser = { ...user, age: 30 };

// Class syntax
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  static createGuest() {
    return new User('Guest', 'guest@example.com');
  }
}

// Inheritance
class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email);
    this.permissions = permissions;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

const admin = new Admin('Alice', 'alice@example.com', ['read', 'write', 'delete']);
console.log(admin.greet()); // "Hello, I'm Alice"
console.log(admin.hasPermission('write')); // true`} />

        <Callout type="info" title="Key Concept">
          JavaScript uses prototypal inheritance. Classes are syntactic sugar over the prototype-based inheritance system. Understanding prototypes helps when debugging and working with older codebases.
        </Callout>

        {/* Scope and Hoisting Theory */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-8">
          <h3 className="font-semibold text-white mb-3">Understanding Scope & Hoisting</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            <strong className="text-cyan-400">Scope</strong> determines where variables can be accessed in your code. JavaScript has three types of scope:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• <strong>Global Scope:</strong> Variables declared outside any function are accessible everywhere</li>
            <li>• <strong>Function Scope:</strong> Variables declared with <code className="text-cyan-400">var</code> inside a function are only accessible within that function</li>
            <li>• <strong>Block Scope:</strong> Variables declared with <code className="text-cyan-400">let</code>/<code className="text-cyan-400">const</code> inside curly braces are only accessible within that block</li>
          </ul>
          <p className="text-slate-300 text-sm leading-relaxed mt-3">
            <strong className="text-cyan-400">Hoisting</strong> is JavaScript's behavior of moving declarations to the top of their scope before execution. <code className="text-cyan-400">var</code> declarations are hoisted and initialized as <code className="text-cyan-400">undefined</code>, while <code className="text-cyan-400">let</code>/<code className="text-cyan-400">const</code> are hoisted but not initialized (temporal dead zone).
          </p>
        </div>

        {/* Synchronous vs Asynchronous */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">Synchronous vs Asynchronous Code</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            JavaScript is <strong>single-threaded</strong>, meaning it can only do one thing at a time. However, it handles asynchronous operations (like API calls, file reading, timers) using the <strong className="text-cyan-400">Event Loop</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-slate-900/50">
              <h4 className="font-medium text-blue-400 text-sm mb-1">Synchronous</h4>
              <p className="text-xs text-slate-500">Code runs line by line. Each line waits for the previous one to complete.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50">
              <h4 className="font-medium text-emerald-400 text-sm mb-1">Asynchronous</h4>
              <p className="text-xs text-slate-500">Some operations run in the background. Callbacks/Promises handle results later.</p>
            </div>
          </div>
        </div>

        <LearningResources title="JavaScript Learning Resources">
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            title="MDN JavaScript Guide"
            description="Comprehensive JavaScript documentation and tutorials"
            type="docs"
          />
          <ResourceLink
            href="https://javascript.info/"
            title="JavaScript.info"
            description="Modern JavaScript tutorial from basics to advanced"
            type="tutorial"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=hdI2bqOjy3c"
            title="JavaScript Crash Course (Traversy Media)"
            description="Complete JavaScript fundamentals in one video"
            type="video"
          />
          <ResourceLink
            href="https://eloquentjavascript.net/"
            title="Eloquent JavaScript (Free Book)"
            description="Free online book covering JavaScript in depth"
            type="article"
          />
          <ResourceLink
            href="https://www.jschallenger.com/"
            title="JS Challenger"
            description="Practice JavaScript with coding challenges"
            type="tutorial"
          />
        </LearningResources>
      </div>
    ),

    'es6-features': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">ES6+ Features</h1>
        <p className="text-slate-400">Modern JavaScript features essential for MERN development.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30">
          <h3 className="font-semibold text-white mb-3">Modern JavaScript (ECMAScript 2015+)</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            ES6 (ECMAScript 2015) was a major update to JavaScript that introduced features now considered essential for modern development. React, Node.js, and most modern JavaScript tooling rely heavily on these features. Understanding them is critical for reading and writing MERN applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {['Arrow Functions', 'Destructuring', 'Spread/Rest', 'Modules', 'Classes', 'Promises', 'Template Literals', 'let/const'].map((feature) => (
              <span key={feature} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 text-center">{feature}</span>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">let and const</h2>
        <p className="text-slate-300 mb-4">
          Before ES6, <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">var</code> was the only way to declare variables. ES6 introduced <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">let</code> and <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">const</code> with block scoping, which prevents many common bugs related to variable hoisting and scope leakage.
        </p>

        <CodeBlock title="Block Scoping" language="javascript" code={`// const - cannot be reassigned (use for constants and objects)
const API_URL = 'https://api.example.com';
const config = { theme: 'dark' };

// Objects/arrays declared with const can be mutated
config.theme = 'light'; // ✅ This works
// config = {}; // ❌ Error: Assignment to constant variable

// let - can be reassigned, block-scoped
let count = 0;
count = 1; // ✅ This works

// Block scoping demonstration
function example() {
  if (true) {
    var varVariable = 'var is function-scoped';
    let letVariable = 'let is block-scoped';
    const constVariable = 'const is block-scoped';
  }

  console.log(varVariable);   // ✅ 'var is function-scoped'
  // console.log(letVariable);  // ❌ ReferenceError
  // console.log(constVariable); // ❌ ReferenceError
}

// Temporal Dead Zone (TDZ)
// console.log(x); // ❌ ReferenceError (TDZ)
let x = 10;`} />

        <h2 className="text-xl font-semibold text-white mt-8">Arrow Functions</h2>

        <CodeBlock title="Arrow Functions" language="javascript" code={`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalents
const add1 = (a, b) => { return a + b; };
const add2 = (a, b) => a + b;  // Implicit return
const double = n => n * 2;      // Single param, no parentheses needed

// Returning objects (wrap in parentheses)
const createUser = (name, age) => ({ name, age });

// Arrow functions in callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Lexical 'this' binding
class Counter {
  constructor() {
    this.count = 0;
  }

  // ❌ Regular function loses 'this' context
  startBroken() {
    setInterval(function() {
      this.count++; // 'this' is undefined or window
    }, 1000);
  }

  // ✅ Arrow function preserves 'this'
  start() {
    setInterval(() => {
      this.count++; // 'this' refers to Counter instance
    }, 1000);
  }
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Destructuring</h2>

        <CodeBlock title="Destructuring" language="javascript" code={`// Object Destructuring
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  address: { city: 'New York', country: 'USA' }
};

// Basic
const { name, email } = user;

// With default values
const { phone = 'N/A' } = user;

// Renaming
const { name: userName, email: userEmail } = user;

// Nested destructuring
const { address: { city, country } } = user;

// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
const [primary, ...rest] = colors; // rest = ['green', 'blue']
const [, , lastColor] = colors;    // Skip elements

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1

// Function parameters
function createProfile({ name, age, role = 'user' }) {
  return { name, age, role, createdAt: new Date() };
}

const profile = createProfile({ name: 'Jane', age: 25 });`} />

        <h2 className="text-xl font-semibold text-white mt-8">Spread & Rest Operators</h2>

        <CodeBlock title="Spread and Rest" language="javascript" code={`// SPREAD (...) - Expands elements

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const cloned = [...arr1];            // Shallow copy

// Objects
const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { theme: 'light' };
const settings = { ...defaults, ...userPrefs }; // { theme: 'light', lang: 'en' }

// Function arguments
const nums = [1, 2, 3];
Math.max(...nums); // Same as Math.max(1, 2, 3)

// REST (...) - Collects elements

// Function parameters
function logAll(first, ...rest) {
  console.log('First:', first);
  console.log('Rest:', rest);
}
logAll(1, 2, 3, 4); // First: 1, Rest: [2, 3, 4]

// Destructuring with rest
const { id, ...userData } = { id: 1, name: 'John', email: 'john@test.com' };
// userData = { name: 'John', email: 'john@test.com' }`} />

        <h2 className="text-xl font-semibold text-white mt-8">Template Literals</h2>

        <CodeBlock title="Template Literals" language="javascript" code={`const name = 'John';
const age = 30;

// String interpolation
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line strings
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;

// Expressions
const price = 99.99;
const tax = 0.1;
const receipt = \`Total: $\${(price * (1 + tax)).toFixed(2)}\`;

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const value = values[i] ? \`<strong>\${values[i]}</strong>\` : '';
    return acc + str + value;
  }, '');
}

const result = highlight\`Hello \${name}, you are \${age}!\`;
// "Hello <strong>John</strong>, you are <strong>30</strong>!"`} />

        <h2 className="text-xl font-semibold text-white mt-8">Modules (import/export)</h2>

        <CodeBlock title="ES6 Modules" language="javascript" code={`// ========== utils.js ==========
// Named exports
export const PI = 3.14159;
export const formatDate = (date) => date.toLocaleDateString();

export function calculateArea(radius) {
  return PI * radius * radius;
}

// Default export (one per file)
export default class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
}

// ========== app.js ==========
// Import default
import Calculator from './utils.js';

// Import named exports
import { PI, formatDate, calculateArea } from './utils.js';

// Import with alias
import { calculateArea as getArea } from './utils.js';

// Import all as namespace
import * as Utils from './utils.js';
console.log(Utils.PI); // 3.14159

// Dynamic imports (code splitting)
async function loadModule() {
  const module = await import('./heavy-module.js');
  module.doSomething();
}`} />

        <Callout type="tip" title="Best Practice">
          Use named exports for utility functions and constants. Reserve default exports for the main functionality of a module (like a class or primary component).
        </Callout>

        {/* Promises and Async/Await Theory */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-8">
          <h3 className="font-semibold text-white mb-3">Promises & Async/Await</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            <strong className="text-cyan-400">Promises</strong> represent a value that may not be available yet but will be at some point. They have three states: <strong>pending</strong>, <strong>fulfilled</strong>, or <strong>rejected</strong>.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            <strong className="text-cyan-400">Async/await</strong> is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code. Use <code className="text-cyan-400">async</code> before a function and <code className="text-cyan-400">await</code> before a Promise.
          </p>
        </div>

        <LearningResources title="ES6+ Learning Resources">
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            title="MDN JavaScript Modules"
            description="Official guide to ES6 modules"
            type="docs"
          />
          <ResourceLink
            href="https://github.com/lukehoban/es6features"
            title="ES6 Features Overview"
            description="Comprehensive list of ES6 features with examples"
            type="article"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=NCwa_xi0Uuc"
            title="ES6 JavaScript Tutorial (Programming with Mosh)"
            description="1-hour crash course on ES6 features"
            type="video"
          />
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"
            title="MDN Asynchronous JavaScript"
            description="Learn Promises, async/await, and callbacks"
            type="docs"
          />
        </LearningResources>
      </div>
    ),

    'git-github': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Git & GitHub</h1>
        <p className="text-slate-400">Version control essentials for collaborative development.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30">
          <h3 className="font-semibold text-white mb-3">What is Version Control?</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            <strong className="text-cyan-400">Version control</strong> is a system that records changes to files over time so you can recall specific versions later. Think of it like a "save game" feature—you can go back to any previous save point if something goes wrong.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            <strong className="text-cyan-400">Git</strong> is the most widely used version control system. It's distributed, meaning every developer has the full history of the project locally. <strong className="text-cyan-400">GitHub</strong> is a platform that hosts Git repositories online, enabling collaboration.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-orange-400 font-semibold text-sm">Working Directory</span>
              <p className="text-xs text-slate-500 mt-1">Your local files</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-amber-400 font-semibold text-sm">Staging Area</span>
              <p className="text-xs text-slate-500 mt-1">Changes ready to commit</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-emerald-400 font-semibold text-sm">Repository</span>
              <p className="text-xs text-slate-500 mt-1">Committed history</p>
            </div>
          </div>
        </div>

        <Callout type="info" title="Why Git is Essential">
          Every professional development team uses version control. It allows you to: track every change ever made, revert mistakes, work on features in isolation (branches), collaborate without overwriting others' work, and maintain a complete project history.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Essential Git Commands</h2>

        <CodeBlock title="Git Basics" language="bash" code={`# Configure Git (first time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize a repository
git init

# Clone an existing repository
git clone https://github.com/username/repo.git

# Check status
git status

# Stage changes
git add filename.js       # Stage specific file
git add .                 # Stage all changes

# Commit changes
git commit -m "Add user authentication feature"

# View commit history
git log
git log --oneline         # Compact view

# Push to remote
git push origin main

# Pull latest changes
git pull origin main`} />

        <h2 className="text-xl font-semibold text-white mt-8">Branching & Merging</h2>

        <CodeBlock title="Branch Operations" language="bash" code={`# List branches
git branch                # Local branches
git branch -a             # All branches (including remote)

# Create and switch to new branch
git checkout -b feature/user-auth
# Or using newer syntax:
git switch -c feature/user-auth

# Switch between branches
git checkout main
git switch main

# Merge branch into main
git checkout main
git merge feature/user-auth

# Delete branch (after merging)
git branch -d feature/user-auth

# Push new branch to remote
git push -u origin feature/user-auth`} />

        <h2 className="text-xl font-semibold text-white mt-8">Common Workflows</h2>

        <CodeBlock title="Feature Branch Workflow" language="bash" code={`# 1. Start from updated main branch
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Make changes and commit
git add .
git commit -m "Implement new feature"

# 4. Push feature branch
git push -u origin feature/new-feature

# 5. Create Pull Request on GitHub
# (Done through GitHub web interface)

# 6. After PR is approved and merged, clean up
git checkout main
git pull origin main
git branch -d feature/new-feature`} />

        <h2 className="text-xl font-semibold text-white mt-8">Useful Git Commands</h2>

        <CodeBlock title="Advanced Commands" language="bash" code={`# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git checkout -- .
git restore .             # Newer syntax

# Stash changes temporarily
git stash
git stash pop             # Restore stashed changes
git stash list            # View all stashes

# View differences
git diff                  # Unstaged changes
git diff --staged         # Staged changes
git diff main feature     # Between branches

# Rebase (cleaner history)
git checkout feature
git rebase main

# Interactive rebase (squash commits)
git rebase -i HEAD~3      # Last 3 commits

# Cherry-pick specific commit
git cherry-pick <commit-hash>`} />

        <h2 className="text-xl font-semibold text-white mt-8">.gitignore</h2>

        <CodeBlock title=".gitignore for MERN Projects" language="text" code={`# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.*.local

# Build output
dist/
build/

# IDE/Editor
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Testing
coverage/

# Misc
*.bak
*.tmp`} />

        <Callout type="warning" title="Important">
          Never commit sensitive information like API keys, passwords, or .env files to version control. Always add them to .gitignore before your first commit.
        </Callout>

        {/* Git Workflow Theory */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-8">
          <h3 className="font-semibold text-white mb-3">Common Git Workflow</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Most teams follow a branch-based workflow. Here's a typical pattern:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">1</span>
              <span className="text-slate-300"><strong>Pull latest:</strong> <code className="text-cyan-400">git pull origin main</code></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">2</span>
              <span className="text-slate-300"><strong>Create branch:</strong> <code className="text-cyan-400">git checkout -b feature/new-feature</code></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">3</span>
              <span className="text-slate-300"><strong>Make changes:</strong> Write code, test it</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">4</span>
              <span className="text-slate-300"><strong>Commit:</strong> <code className="text-cyan-400">git add . && git commit -m "message"</code></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">5</span>
              <span className="text-slate-300"><strong>Push & PR:</strong> <code className="text-cyan-400">git push origin feature/new-feature</code></span>
            </div>
          </div>
        </div>

        <LearningResources title="Git & GitHub Learning Resources">
          <ResourceLink
            href="https://git-scm.com/book/en/v2"
            title="Pro Git Book (Free)"
            description="The official Git book - comprehensive and free"
            type="docs"
          />
          <ResourceLink
            href="https://learngitbranching.js.org/"
            title="Learn Git Branching"
            description="Interactive visual tutorial for Git branching"
            type="tutorial"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=RGOj5yH7evk"
            title="Git and GitHub Crash Course"
            description="Complete Git tutorial for beginners (freeCodingCamp)"
            type="video"
          />
          <ResourceLink
            href="https://docs.github.com/en/get-started"
            title="GitHub Docs - Getting Started"
            description="Official GitHub documentation and guides"
            type="docs"
          />
          <ResourceLink
            href="https://ohmygit.org/"
            title="Oh My Git!"
            description="Open source game to learn Git"
            type="tutorial"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['html-css'];
};

// Export the main component at the end of the file
export default function MERNDocumentation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleSectionClick = (section) => {
    if (section.subsections) {
      toggleSection(section.id);
      if (!expandedSections[section.id]) {
        setActiveSection(section.id);
        setActiveSubsection(section.subsections[0]);
      }
    } else {
      setActiveSection(section.id);
      setActiveSubsection(null);
    }
    setMobileMenuOpen(false);
  };

  const handleSubsectionClick = (sectionId, subsection) => {
    setActiveSection(sectionId);
    setActiveSubsection(subsection);
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewContent />;
      case 'roadmap':
        return <RoadmapContent />;
      case 'phase1':
        return <Phase1Content subsection={activeSubsection} />;
      case 'phase2':
        return <Phase2Content subsection={activeSubsection} />;
      case 'phase3':
        return <Phase3Content subsection={activeSubsection} />;
      case 'phase4':
        return <Phase4Content subsection={activeSubsection} />;
      case 'phase5':
        return <Phase5Content subsection={activeSubsection} />;
      case 'phase6':
        return <Phase6Content subsection={activeSubsection} />;
      case 'career':
        return <CareerContent subsection={activeSubsection} />;
      default:
        return <OverviewContent />;
    }
  };

  const Sidebar = () => (
    <nav className="space-y-1">
      {docData.sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => handleSectionClick(section)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
              activeSection === section.id
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <section.icon className="w-5 h-5" style={{ color: section.color }} />
            <span className="flex-1 text-sm font-medium">{section.title}</span>
            {section.subsections && (
              expandedSections[section.id]
                ? <Icons.ChevronDown className="w-4 h-4" />
                : <Icons.ChevronRight className="w-4 h-4" />
            )}
          </button>

          {section.subsections && expandedSections[section.id] && (
            <div className="ml-8 mt-1 space-y-1">
              {section.subsections.map((sub) => (
                <button
                  key={sub}
                  onClick={() => handleSubsectionClick(section.id, sub)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSubsection === sub
                      ? 'text-white bg-slate-700/50'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
                  }`}
                >
                  {sub.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg">MERN Docs</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-800"
          >
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-72 h-full bg-slate-900 p-4 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 h-screen sticky top-0 bg-slate-900/50 border-r border-slate-800 overflow-y-auto">
          <div className="p-6">
            <h1 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icons.Book className="w-6 h-6 text-cyan-400" />
              MERN Docs
            </h1>
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

// ============ PHASE 2 CONTENT: NODE.JS & EXPRESS ============
const Phase2Content = ({ subsection }) => {
  const content = {
    'nodejs-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Node.js Fundamentals</h1>
        <p className="text-slate-400">Server-side JavaScript runtime for building scalable network applications.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-lime-500/10 to-emerald-500/10 border border-lime-500/30">
          <h3 className="font-semibold text-white mb-3">Understanding Node.js</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Node.js revolutionized JavaScript by taking it beyond the browser. Built on Chrome's V8 JavaScript engine, Node.js allows you to run JavaScript on the server, enabling full-stack JavaScript development. This is what makes the MERN stack possible—the same language from database to user interface.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Node.js uses an <strong>event-driven, non-blocking I/O model</strong>. Instead of waiting for operations like reading files or database queries to complete (blocking), Node.js registers callbacks and continues executing other code. When the operation finishes, the callback is executed. This makes Node.js highly efficient for I/O-heavy applications like web servers.
          </p>
        </div>

        <Callout type="info" title="When to Use Node.js">
          Node.js excels at real-time applications (chat, gaming), API servers, microservices, and streaming applications. It's less suited for CPU-intensive tasks like video encoding or complex calculations where other languages may perform better.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Creating Your First Server</h2>

        <CodeBlock title="Basic HTTP Server" language="javascript" code={`const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/') {
    res.end(JSON.stringify({ message: 'Welcome to the API' }));
  } else if (req.url === '/users') {
    res.end(JSON.stringify({ users: ['John', 'Jane', 'Bob'] }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`} />

        <h2 className="text-xl font-semibold text-white mt-8">File System Module</h2>

        <CodeBlock title="fs Module" language="javascript" code={`const fs = require('fs');
const fsPromises = require('fs').promises;

// Synchronous (blocking)
const data = fs.readFileSync('config.json', 'utf8');

// Asynchronous with callback
fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});

// Async/await (recommended)
async function readConfig() {
  try {
    const data = await fsPromises.readFile('config.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Common operations
await fsPromises.writeFile('output.txt', 'Hello World');
await fsPromises.mkdir('uploads', { recursive: true });
await fsPromises.unlink('temp.txt'); // Delete file
const files = await fsPromises.readdir('./');`} />

        <h2 className="text-xl font-semibold text-white mt-8">Path Module</h2>

        <CodeBlock title="path Module" language="javascript" code={`const path = require('path');

// Join path segments
const filePath = path.join(__dirname, 'uploads', 'image.png');

// Get parts of a path
console.log(path.dirname(filePath));   // Directory
console.log(path.basename(filePath));  // Filename
console.log(path.extname(filePath));   // Extension (.png)

// Parse into object
const parsed = path.parse(filePath);
// { root, dir, base, ext, name }

// Resolve absolute path
const absolute = path.resolve('src', 'index.js');`} />

        <h2 className="text-xl font-semibold text-white mt-8">Environment Variables</h2>

        <CodeBlock title="Environment Variables" language="javascript" code={`// Access environment variables
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

// Using dotenv package
// npm install dotenv
require('dotenv').config();

// .env file:
// PORT=3000
// DATABASE_URL=mongodb://localhost:27017/mydb
// JWT_SECRET=your-secret-key

// Config pattern
const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d'
  }
};

module.exports = config;`} />

        <Callout type="warning" title="Security">
          Never commit .env files to version control. Add .env to your .gitignore and create a .env.example with placeholder values.
        </Callout>

        {/* Event Loop Theory */}
        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 mt-8">
          <h3 className="font-semibold text-white mb-3">The Node.js Event Loop</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            The <strong className="text-cyan-400">Event Loop</strong> is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It works by offloading operations to the system kernel whenever possible.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <div className="p-3 rounded-lg bg-slate-900/50">
              <h4 className="font-medium text-emerald-400 text-sm mb-1">Call Stack</h4>
              <p className="text-xs text-slate-500">Executes synchronous code line by line</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50">
              <h4 className="font-medium text-blue-400 text-sm mb-1">Callback Queue</h4>
              <p className="text-xs text-slate-500">Holds callbacks from async operations</p>
            </div>
          </div>
        </div>

        <LearningResources title="Node.js Learning Resources">
          <ResourceLink
            href="https://nodejs.org/en/learn"
            title="Node.js Official Learn"
            description="Official getting started guide and tutorials"
            type="docs"
          />
          <ResourceLink
            href="https://nodejs.dev/en/learn/"
            title="Node.js Introduction"
            description="Comprehensive introduction to Node.js"
            type="docs"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=TlB_eWDSMt4"
            title="Node.js Crash Course (Traversy Media)"
            description="Complete Node.js tutorial for beginners"
            type="video"
          />
          <ResourceLink
            href="https://nodeschool.io/"
            title="NodeSchool"
            description="Interactive Node.js learning workshops"
            type="tutorial"
          />
        </LearningResources>
      </div>
    ),

    'npm-modules': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">NPM & Package Management</h1>
        <p className="text-slate-400">Managing dependencies and creating Node.js projects.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Essential Commands</h2>

        <CodeBlock title="NPM Commands" language="bash" code={`# Initialize project
npm init
npm init -y  # Skip questions

# Install packages
npm install express           # Production dependency
npm install nodemon -D        # Dev dependency
npm install                   # Install all from package.json

# Install specific version
npm install express@4.18.0
npm install express@^4.0.0    # Any 4.x version

# Global installation
npm install -g nodemon

# Update & remove
npm update express
npm uninstall express

# View packages
npm list --depth=0
npm outdated

# Security
npm audit
npm audit fix`} />

        <h2 className="text-xl font-semibold text-white mt-8">package.json</h2>

        <CodeBlock title="package.json" language="json" code={`{
  "name": "mern-app",
  "version": "1.0.0",
  "description": "Full-stack MERN application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "client": "npm start --prefix client",
    "build": "npm run build --prefix client"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Creating Modules</h2>

        <CodeBlock title="Custom Modules" language="javascript" code={`// utils/helpers.js
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US');
};

const generateId = () => Math.random().toString(36).substr(2, 9);

module.exports = { formatDate, generateId };

// utils/validators.js
const isValidEmail = (email) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
};

module.exports = { isValidEmail };

// app.js - Usage
const { formatDate, generateId } = require('./utils/helpers');
const { isValidEmail } = require('./utils/validators');`} />
      </div>
    ),

    'express-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Express.js Basics</h1>
        <p className="text-slate-400">Fast, minimalist web framework for Node.js.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">What is Express.js?</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Express.js is a minimal and flexible Node.js web application framework. While you could build a web server using Node.js's built-in <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">http</code> module, Express simplifies common tasks like routing, middleware integration, and request/response handling.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Think of Express as the "E" in MERN—it sits between your React frontend and MongoDB database, handling API requests, authentication, and business logic. Express doesn't enforce a specific application structure, giving you the freedom to organize your code as you see fit.
          </p>
        </div>

        <Callout type="tip" title="Express Philosophy">
          Express follows the Unix philosophy of "do one thing well." It provides a thin layer of fundamental web application features without obscuring Node.js features. You add functionality through middleware—small, composable functions that process requests.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Setting Up Express</h2>
        <p className="text-slate-300 mb-4">
          Let's create a basic Express server. First, initialize your project and install Express:
        </p>
        <CodeBlock title="Installation" language="bash" code={`# Initialize a new Node.js project
npm init -y

# Install Express
npm install express

# Install common middleware
npm install cors dotenv`} />

        <CodeBlock title="Express Setup" language="javascript" code={`const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`} />

        <h2 className="text-xl font-semibold text-white mt-8">Routing</h2>

        <CodeBlock title="Express Routing" language="javascript" code={`// Route parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

// Query strings: /search?q=john&limit=10
app.get('/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  res.json({ query: q, limit: parseInt(limit) });
});

// Multiple params: /posts/:postId/comments/:commentId
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.json({ postId, commentId });
});

// Using Router (modular routes)
// routes/users.js
const router = express.Router();

router.get('/', (req, res) => res.json({ users: [] }));
router.get('/:id', (req, res) => res.json({ user: req.params.id }));
router.post('/', (req, res) => res.status(201).json(req.body));

module.exports = router;

// server.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);`} />
      </div>
    ),

    'rest-api': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Building REST APIs</h1>
        <p className="text-slate-400">Create RESTful APIs following best practices.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">Understanding REST Architecture</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods to perform operations on resources, which are identified by URLs. This is how your React frontend communicates with your Express backend.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-emerald-400 font-bold">GET</span>
              <p className="text-xs text-slate-400 mt-1">Read/Retrieve</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
              <span className="text-blue-400 font-bold">POST</span>
              <p className="text-xs text-slate-400 mt-1">Create</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center">
              <span className="text-amber-400 font-bold">PUT/PATCH</span>
              <p className="text-xs text-slate-400 mt-1">Update</p>
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
              <span className="text-red-400 font-bold">DELETE</span>
              <p className="text-xs text-slate-400 mt-1">Remove</p>
            </div>
          </div>
        </div>

        <Callout type="info" title="RESTful URL Design">
          Resources should be nouns (not verbs): <code className="text-cyan-400">/api/users</code> not <code className="text-cyan-400">/api/getUsers</code>. Use plural nouns for collections and IDs for specific resources: <code className="text-cyan-400">/api/users/:id</code>
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Complete CRUD Example</h2>

        <CodeBlock title="CRUD API" language="javascript" code={`// controllers/userController.js
let users = [];
let nextId = 1;

// GET /api/users
exports.getUsers = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const start = (page - 1) * limit;
  const end = page * limit;

  res.json({
    data: users.slice(start, end),
    total: users.length,
    page: parseInt(page),
    totalPages: Math.ceil(users.length / limit)
  });
};

// GET /api/users/:id
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
};

// POST /api/users
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  const user = { id: nextId++, name, email, createdAt: new Date() };
  users.push(user);
  res.status(201).json(user);
};

// PUT /api/users/:id
exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[index] = { ...users[index], ...req.body, updatedAt: new Date() };
  res.json(users[index]);
};

// DELETE /api/users/:id
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(index, 1);
  res.status(204).send();
};`} />

        <h2 className="text-xl font-semibold text-white mt-8">Routes Setup</h2>

        <CodeBlock title="Routes" language="javascript" code={`// routes/users.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;`} />
      </div>
    ),

    'middleware': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Express Middleware</h1>
        <p className="text-slate-400">Functions that execute during the request-response cycle.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Middleware Types</h2>

        <CodeBlock title="Middleware Examples" language="javascript" code={`// Application-level middleware
app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

// Route-specific middleware
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  next();
};

app.post('/users', validateUser, (req, res) => {
  // Only runs if validation passes
  res.json({ message: 'User created' });
});

// Error-handling middleware (4 params)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});`} />

        <h2 className="text-xl font-semibold text-white mt-8">Authentication Middleware</h2>

        <CodeBlock title="Auth Middleware" language="javascript" code={`const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

// Usage
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin area' });
});`} />

        <h2 className="text-xl font-semibold text-white mt-8">Async Error Handler</h2>

        <CodeBlock title="Async Handler" language="javascript" code={`// Wrapper for async route handlers
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage - no try/catch needed
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
  }
}

// Usage
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  res.json(user);
}));`} />

        <LearningResources title="Express.js & REST API Resources">
          <ResourceLink
            href="https://expressjs.com/en/guide/routing.html"
            title="Express.js Official Guide"
            description="Official Express documentation and tutorials"
            type="docs"
          />
          <ResourceLink
            href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
            title="MDN Express/Node Tutorial"
            description="Complete server-side programming with Express"
            type="docs"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=SccSCuHhOw0"
            title="Express.js Crash Course (Traversy Media)"
            description="Complete Express tutorial for beginners"
            type="video"
          />
          <ResourceLink
            href="https://restfulapi.net/"
            title="RESTful API Tutorial"
            description="Learn REST API design principles and best practices"
            type="article"
          />
          <ResourceLink
            href="https://www.postman.com/"
            title="Postman"
            description="Essential tool for testing your APIs"
            type="tool"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['nodejs-basics'];
};

// ============ PHASE 3 CONTENT: REACT.JS ============
const Phase3Content = ({ subsection }) => {
  const content = {
    'react-fundamentals': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Fundamentals</h1>
        <p className="text-slate-400">Build interactive user interfaces with components.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
          <h3 className="font-semibold text-white mb-3">Thinking in React</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            React is a JavaScript library for building user interfaces. Unlike traditional web development where you manipulate the DOM directly, React uses a declarative approach: you describe what the UI should look like for a given state, and React efficiently updates the DOM when that state changes.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            The key concept in React is the <strong>component</strong>—a self-contained piece of UI that can be reused throughout your application. Components can be as simple as a button or as complex as an entire page. They receive data through <strong>props</strong> (read-only inputs) and manage their own <strong>state</strong> (dynamic data that can change).
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-blue-400 font-semibold text-sm">Components</span>
              <p className="text-xs text-slate-500 mt-1">Reusable UI pieces</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-emerald-400 font-semibold text-sm">Props</span>
              <p className="text-xs text-slate-500 mt-1">Data passed down</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 text-center">
              <span className="text-purple-400 font-semibold text-sm">State</span>
              <p className="text-xs text-slate-500 mt-1">Dynamic data</p>
            </div>
          </div>
        </div>

        {/* React Component Lifecycle Diagram */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white text-center mb-6">React Component Lifecycle</h3>

          <div className="flex flex-col items-center gap-4">
            {/* Mount Phase */}
            <div className="w-full max-w-md">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Mounting</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="w-20 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-1">
                      <span className="text-emerald-400 text-xs font-mono">render()</span>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z"/>
                  </svg>
                  <div className="text-center">
                    <div className="w-24 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-1">
                      <span className="text-emerald-400 text-xs font-mono">useEffect()</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-center mt-2">Component is created and added to DOM</p>
              </div>
            </div>

            {/* Arrow */}
            <svg className="w-6 h-6 text-slate-600 rotate-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>

            {/* Update Phase */}
            <div className="w-full max-w-md">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Updating</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="px-3 py-2 rounded-lg bg-blue-500/20">
                    <span className="text-blue-400 text-xs font-mono">setState()</span>
                  </div>
                  <span className="text-slate-500">or</span>
                  <div className="px-3 py-2 rounded-lg bg-blue-500/20">
                    <span className="text-blue-400 text-xs font-mono">New Props</span>
                  </div>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z"/>
                  </svg>
                  <div className="px-3 py-2 rounded-lg bg-blue-500/20">
                    <span className="text-blue-400 text-xs font-mono">Re-render</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-center mt-2">Component re-renders when state or props change</p>
              </div>
            </div>

            {/* Arrow */}
            <svg className="w-6 h-6 text-slate-600 rotate-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>

            {/* Unmount Phase */}
            <div className="w-full max-w-md">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Unmounting</span>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <div className="flex items-center justify-center">
                  <div className="px-4 py-2 rounded-lg bg-red-500/20">
                    <span className="text-red-400 text-xs font-mono">useEffect cleanup</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 text-center mt-2">Component is removed from DOM, cleanup runs</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">JSX Syntax</h2>
        <p className="text-slate-300 mb-4">
          JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It's not HTML—it's syntactic sugar that gets transformed into JavaScript function calls. JSX makes React components more readable by keeping markup and logic together.
        </p>

        <CodeBlock title="JSX Basics" language="jsx" code={`function Welcome() {
  const name = 'John';
  const isLoggedIn = true;

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>

      {/* Conditional rendering */}
      {isLoggedIn && <p>Welcome back!</p>}

      {/* Ternary */}
      <span>{isLoggedIn ? 'Logout' : 'Login'}</span>

      {/* Inline styles */}
      <p style={{ color: 'blue', fontSize: '16px' }}>
        Styled text
      </p>
    </div>
  );
}

// JSX Rules:
// 1. Return single root element (use <> </> for fragments)
// 2. className instead of class
// 3. camelCase attributes (onClick, onChange)
// 4. Self-close empty tags: <img />, <input />`} />

        <h2 className="text-xl font-semibold text-white mt-8">Components & Props</h2>

        <CodeBlock title="Components" language="jsx" code={`// Functional Component with props
function UserCard({ name, email, avatar, onDelete }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

// With default props
function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Rendering lists
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}  // Required unique key
          name={user.name}
          email={user.email}
          avatar={user.avatar}
          onDelete={() => console.log('Delete', user.id)}
        />
      ))}
    </div>
  );
}`} />

        <Callout type="info" title="Key Prop">
          When rendering lists, always provide a unique key prop. This helps React efficiently update the DOM.
        </Callout>
      </div>
    ),

    'react-hooks': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Hooks</h1>
        <p className="text-slate-400">Use state and lifecycle features in functional components.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">Understanding Hooks</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Hooks are functions that let you "hook into" React features from functional components. Before Hooks (introduced in React 16.8), you needed class components to use state and lifecycle methods. Hooks let you use these features with simpler, more readable code.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            The two most important Hooks are <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">useState</code> for managing component state and <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">useEffect</code> for side effects like data fetching. You can also create custom Hooks to reuse stateful logic across components.
          </p>
        </div>

        <Callout type="warning" title="Rules of Hooks">
          <ul className="space-y-1">
            <li>Only call Hooks at the top level of your component (not inside loops, conditions, or nested functions)</li>
            <li>Only call Hooks from React function components or custom Hooks</li>
            <li>Hook names must start with "use" (e.g., useAuth, useFetch)</li>
          </ul>
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">useState</h2>
        <p className="text-slate-300 mb-4">
          <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-400 text-sm">useState</code> returns a pair: the current state value and a function to update it. When you call the setter function, React re-renders the component with the new state.
        </p>

        <CodeBlock title="useState Hook" language="jsx" code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
}

// Object state
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">useEffect</h2>

        <CodeBlock title="useEffect Hook" language="jsx" code={`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await fetch(\`/api/users/\${userId}\`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [userId]); // Re-run when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
}

// Effect patterns
useEffect(() => {
  // Runs once on mount
  return () => {
    // Cleanup on unmount
  };
}, []);

useEffect(() => {
  // Runs when 'value' changes
}, [value]);

useEffect(() => {
  // Runs on every render (rarely needed)
});`} />

        <h2 className="text-xl font-semibold text-white mt-8">Custom Hooks</h2>

        <CodeBlock title="Custom Hooks" language="jsx" code={`// useFetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function Users() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <ul>{users?.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`} />
      </div>
    ),

    'state-management': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">State Management</h1>
        <p className="text-slate-400">Managing global state with Context API.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Context API</h2>

        <CodeBlock title="Creating Context" language="jsx" code={`// context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setUser(data.user);
    localStorage.setItem('token', data.token);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);`} />

        <h2 className="text-xl font-semibold text-white mt-8">Using Context</h2>

        <CodeBlock title="Using Context" language="jsx" code={`// App.jsx
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Components using context
function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

function Login() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
    </form>
  );
}`} />
      </div>
    ),

    'react-router': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Router</h1>
        <p className="text-slate-400">Client-side routing for single-page applications.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Basic Setup</h2>

        <CodeBlock title="Router Setup" language="jsx" code={`// npm install react-router-dom
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Route Parameters & Navigation</h2>

        <CodeBlock title="Dynamic Routes" language="jsx" code={`import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get('tab') || 'profile';

  return (
    <div>
      <h1>User {id}</h1>
      <p>Tab: {tab}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/users')}>All Users</button>
    </div>
  );
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Protected Routes</h2>

        <CodeBlock title="Protected Routes" language="jsx" code={`import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}

// Usage
<Routes>
  <Route path="/login" element={<Login />} />

  {/* Protected routes */}
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
</Routes>`} />

        <LearningResources title="React Learning Resources">
          <ResourceLink
            href="https://react.dev/learn"
            title="React Official Tutorial"
            description="The best place to start - official React documentation"
            type="docs"
          />
          <ResourceLink
            href="https://react.dev/reference/react"
            title="React API Reference"
            description="Complete reference for all React hooks and APIs"
            type="docs"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=bMknfKXIFA8"
            title="React Course (freeCodeCamp)"
            description="Complete React tutorial for beginners"
            type="video"
          />
          <ResourceLink
            href="https://reactrouter.com/en/main/start/tutorial"
            title="React Router Tutorial"
            description="Official React Router documentation and examples"
            type="docs"
          />
          <ResourceLink
            href="https://beta.reactjs.org/learn/thinking-in-react"
            title="Thinking in React"
            description="Learn the React mental model and component design"
            type="article"
          />
          <ResourceLink
            href="https://react.gg/"
            title="React.gg"
            description="Visual, interactive React learning platform"
            type="tutorial"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['react-fundamentals'];
};

// ============ PHASE 4 CONTENT: MONGODB ============
const Phase4Content = ({ subsection }) => {
  const content = {
    'mongodb-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">MongoDB Basics</h1>
        <p className="text-slate-400">Document-based NoSQL database for modern applications.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
          <h3 className="font-semibold text-white mb-3">Why MongoDB for MERN?</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents called BSON (Binary JSON). This design aligns perfectly with JavaScript—data flows as JSON from your React frontend, through your Express API, and into MongoDB without transformation.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Unlike relational databases (MySQL, PostgreSQL) that use tables with rigid schemas, MongoDB collections can contain documents with different structures. This flexibility is powerful for rapid development and evolving requirements, though it requires careful design to maintain data integrity.
          </p>
        </div>

        <Callout type="info" title="When to Choose MongoDB">
          MongoDB excels when you need: flexible schemas for evolving data models, horizontal scaling across servers, JSON-native storage for JavaScript applications, or rapid prototyping. Consider SQL databases when you need complex joins, strict data integrity, or ACID transactions across multiple tables.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Key Concepts</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-300">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-2 text-left">SQL</th>
                <th className="px-4 py-2 text-left">MongoDB</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700"><td className="px-4 py-2">Database</td><td className="px-4 py-2">Database</td></tr>
              <tr className="border-b border-slate-700"><td className="px-4 py-2">Table</td><td className="px-4 py-2">Collection</td></tr>
              <tr className="border-b border-slate-700"><td className="px-4 py-2">Row</td><td className="px-4 py-2">Document</td></tr>
              <tr className="border-b border-slate-700"><td className="px-4 py-2">Column</td><td className="px-4 py-2">Field</td></tr>
              <tr><td className="px-4 py-2">Primary Key</td><td className="px-4 py-2">_id (ObjectId)</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">Document Structure</h2>

        <CodeBlock title="MongoDB Document" language="javascript" code={`// MongoDB document example
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "gaming", "coding"],
  "createdAt": ISODate("2025-01-15T10:30:00Z")
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">MongoDB Shell Commands</h2>

        <CodeBlock title="Basic Commands" language="javascript" code={`// Show databases
show dbs

// Use/create database
use myapp

// Show collections
show collections

// Insert document
db.users.insertOne({
  name: "John",
  email: "john@example.com"
})

// Insert multiple
db.users.insertMany([
  { name: "Jane", email: "jane@example.com" },
  { name: "Bob", email: "bob@example.com" }
])

// Find all
db.users.find()

// Find with filter
db.users.find({ name: "John" })

// Find one
db.users.findOne({ email: "john@example.com" })`} />
      </div>
    ),

    'mongoose-odm': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Mongoose ODM</h1>
        <p className="text-slate-400">Elegant MongoDB object modeling for Node.js.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Connection Setup</h2>

        <CodeBlock title="MongoDB Connection" language="javascript" code={`const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Options are mostly deprecated in Mongoose 6+
    });
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;

// server.js
const connectDB = require('./config/db');
connectDB();`} />

        <h2 className="text-xl font-semibold text-white mt-8">Defining Schemas</h2>

        <CodeBlock title="Mongoose Schema" language="javascript" code={`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false  // Don't include in queries by default
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  avatar: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt
});

// Pre-save middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Instance method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Static method
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

module.exports = mongoose.model('User', userSchema);`} />
      </div>
    ),

    'crud-operations': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">CRUD Operations</h1>
        <p className="text-slate-400">Create, Read, Update, Delete with Mongoose.</p>

        <CodeBlock title="CRUD with Mongoose" language="javascript" code={`const User = require('./models/User');

// CREATE
const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

// READ
const getUsers = async (query = {}) => {
  const users = await User.find(query)
    .select('-password')
    .sort({ createdAt: -1 })
    .limit(10);
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

// UPDATE
const updateUser = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true }
  );
  return user;
};

// DELETE
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

// Query operators
const advancedQueries = async () => {
  // Comparison
  await User.find({ age: { $gt: 18, $lt: 65 } });

  // Logical
  await User.find({ $or: [{ role: 'admin' }, { isActive: true }] });

  // Array contains
  await User.find({ hobbies: { $in: ['coding', 'gaming'] } });

  // Text search (requires index)
  await User.find({ $text: { $search: 'john' } });

  // Pagination
  const page = 1, limit = 10;
  await User.find()
    .skip((page - 1) * limit)
    .limit(limit);
};`} />
      </div>
    ),

    'aggregation': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Aggregation Framework</h1>
        <p className="text-slate-400">Advanced data processing and analysis.</p>

        <CodeBlock title="Aggregation Pipeline" language="javascript" code={`// Basic aggregation
const stats = await User.aggregate([
  // Stage 1: Filter
  { $match: { isActive: true } },

  // Stage 2: Group and calculate
  { $group: {
    _id: '$role',
    count: { $sum: 1 },
    avgAge: { $avg: '$age' }
  }},

  // Stage 3: Sort
  { $sort: { count: -1 } }
]);

// Lookup (join)
const usersWithPosts = await User.aggregate([
  { $lookup: {
    from: 'posts',
    localField: '_id',
    foreignField: 'author',
    as: 'posts'
  }},
  { $addFields: {
    postCount: { $size: '$posts' }
  }}
]);

// Unwind arrays
const postsByTag = await Post.aggregate([
  { $unwind: '$tags' },
  { $group: {
    _id: '$tags',
    count: { $sum: 1 }
  }},
  { $sort: { count: -1 } },
  { $limit: 10 }
]);`} />

        <LearningResources title="MongoDB Learning Resources">
          <ResourceLink
            href="https://www.mongodb.com/docs/manual/"
            title="MongoDB Official Documentation"
            description="Complete MongoDB documentation and reference"
            type="docs"
          />
          <ResourceLink
            href="https://university.mongodb.com/"
            title="MongoDB University"
            description="Free official MongoDB courses and certifications"
            type="tutorial"
          />
          <ResourceLink
            href="https://mongoosejs.com/docs/guide.html"
            title="Mongoose Documentation"
            description="Official Mongoose ODM guide and API reference"
            type="docs"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=ofme2o29ngU"
            title="MongoDB Crash Course (Traversy Media)"
            description="Complete MongoDB tutorial for beginners"
            type="video"
          />
          <ResourceLink
            href="https://www.mongodb.com/cloud/atlas"
            title="MongoDB Atlas"
            description="Free cloud-hosted MongoDB database"
            type="tool"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['mongodb-basics'];
};

// ============ PHASE 5 CONTENT: INTEGRATION & AUTH ============
const Phase5Content = ({ subsection }) => {
  const content = {
    'fullstack-integration': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Full-Stack Integration</h1>
        <p className="text-slate-400">Connecting React frontend to Express backend.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
          <h3 className="font-semibold text-white mb-3">Bringing It All Together</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            This is where the MERN stack truly comes together. Your React frontend needs to communicate with your Express backend, which in turn interacts with MongoDB. This communication happens through HTTP requests—typically using the Fetch API or libraries like Axios.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            A well-structured approach involves creating an API service layer in your React app that handles all HTTP requests. This centralizes your API logic, making it easier to manage authentication headers, error handling, and API URL configuration across your application.
          </p>
        </div>

        <Callout type="tip" title="Development Setup">
          During development, your React app typically runs on port 5173 (Vite) while your Express server runs on port 5000. You'll need to configure CORS on your backend or use a proxy to allow cross-origin requests.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">API Service</h2>
        <p className="text-slate-300 mb-4">
          Create a centralized API service to handle all HTTP requests. This pattern keeps your components clean and makes it easy to add features like authentication tokens and error handling.
        </p>

        <CodeBlock title="API Service (Frontend)" language="javascript" code={`// services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_URL;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    const token = this.getToken();
    if (token) {
      headers.Authorization = \`Bearer \${token}\`;
    }

    const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
      ...options,
      headers
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Request failed');
    }

    return response.json();
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export default new ApiService();`} />

        <h2 className="text-xl font-semibold text-white mt-8">Using in Components</h2>

        <CodeBlock title="Component Integration" language="jsx" code={`import { useState, useEffect } from 'react';
import api from '../services/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.get('/users');
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(\`/users/\${id}\`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          {user.name}
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">CORS Configuration</h2>

        <CodeBlock title="Backend CORS" language="javascript" code={`// server.js
const cors = require('cors');

// Simple - allow all origins
app.use(cors());

// Production - specific origins
app.use(cors({
  origin: ['http://localhost:5173', 'https://yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));`} />
      </div>
    ),

    'jwt-auth': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">JWT Authentication</h1>
        <p className="text-slate-400">Secure authentication with JSON Web Tokens.</p>

        <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <h3 className="font-semibold text-white mb-3">How JWT Authentication Works</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            JSON Web Tokens (JWT) provide a stateless authentication mechanism. Instead of storing session data on the server, the server generates a signed token containing user information that the client stores and sends with each request.
          </p>
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">1</span>
              <p className="text-sm text-slate-300">User sends credentials (email/password) to login endpoint</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">2</span>
              <p className="text-sm text-slate-300">Server verifies credentials and generates a signed JWT containing user ID</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">3</span>
              <p className="text-sm text-slate-300">Client stores the token (localStorage or httpOnly cookie) and includes it in the Authorization header</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">4</span>
              <p className="text-sm text-slate-300">Server validates the token on protected routes and extracts user information</p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Security Considerations">
          Store tokens in httpOnly cookies when possible (not accessible to JavaScript). If using localStorage, be aware of XSS vulnerabilities. Always use HTTPS in production. Set appropriate token expiration times.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Auth Controller</h2>

        <CodeBlock title="Auth Controller" language="javascript" code={`const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);

  res.status(201).json({
    user: { id: user._id, name: user.name, email: user.email },
    token
  });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken(user._id);

  res.json({
    user: { id: user._id, name: user.name, email: user.email },
    token
  });
};

// Get current user
exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};`} />

        <h2 className="text-xl font-semibold text-white mt-8">Auth Middleware</h2>

        <CodeBlock title="Protect Middleware" language="javascript" code={`const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

// Routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);`} />
      </div>
    ),

    'security-best-practices': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Security Best Practices</h1>
        <p className="text-slate-400">Protect your application from common vulnerabilities.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Essential Security Packages</h2>

        <CodeBlock title="Security Setup" language="javascript" code={`const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Set security HTTP headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: 'Too many requests, please try again later'
});
app.use('/api', limiter);

// Sanitize data against NoSQL injection
app.use(mongoSanitize());

// Prevent XSS attacks
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(hpp());`} />

        <h2 className="text-xl font-semibold text-white mt-8">Password Security</h2>

        <CodeBlock title="Password Hashing" language="javascript" code={`const bcrypt = require('bcryptjs');

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};`} />

        <Callout type="warning" title="Security Checklist">
          <ul className="list-disc list-inside space-y-1">
            <li>Never store plain text passwords</li>
            <li>Use HTTPS in production</li>
            <li>Validate and sanitize all user input</li>
            <li>Keep dependencies updated</li>
            <li>Use environment variables for secrets</li>
            <li>Implement rate limiting</li>
          </ul>
        </Callout>

        <LearningResources title="Authentication & Security Resources">
          <ResourceLink
            href="https://jwt.io/introduction"
            title="JWT.io - Introduction"
            description="Learn how JSON Web Tokens work"
            type="docs"
          />
          <ResourceLink
            href="https://owasp.org/www-project-top-ten/"
            title="OWASP Top 10"
            description="Most critical web application security risks"
            type="article"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=mbsmsi7l3r4"
            title="JWT Authentication Tutorial"
            description="Complete JWT auth implementation guide"
            type="video"
          />
          <ResourceLink
            href="https://auth0.com/docs"
            title="Auth0 Documentation"
            description="Learn authentication best practices"
            type="docs"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['fullstack-integration'];
};

// ============ PHASE 6 CONTENT: DEPLOYMENT ============
const Phase6Content = ({ subsection }) => {
  const content = {
    'deployment-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Deployment Basics</h1>
        <p className="text-slate-400">Prepare and deploy your MERN application.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30">
          <h3 className="font-semibold text-white mb-3">From Development to Production</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Deploying a MERN application involves several steps: building your React frontend for production, configuring your Express server to serve static files, setting up environment variables, and choosing hosting platforms. The goal is to make your application accessible to users worldwide while ensuring security and performance.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            MERN applications can be deployed as a monolith (frontend and backend together) or as separate services. Separate deployments offer more flexibility—you can scale the API independently and use specialized platforms for each tier.
          </p>
        </div>

        <Callout type="tip" title="Deployment Checklist">
          <ul className="space-y-1">
            <li>Remove console.log statements and debug code</li>
            <li>Set NODE_ENV to "production"</li>
            <li>Configure all environment variables</li>
            <li>Enable HTTPS and security headers</li>
            <li>Set up error logging and monitoring</li>
            <li>Test the production build locally first</li>
          </ul>
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Environment Variables</h2>
        <p className="text-slate-300 mb-4">
          Never hardcode sensitive values like API keys or database URLs. Use environment variables that are set differently in development and production.
        </p>

        <CodeBlock title="Production Config" language="bash" code={`# .env.production
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=your-super-secret-key-here
CLIENT_URL=https://yourdomain.com`} />

        <h2 className="text-xl font-semibold text-white mt-8">Production Build</h2>

        <CodeBlock title="Build Scripts" language="json" code={`{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm run build --prefix client",
    "heroku-postbuild": "npm run build"
  }
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Serve Static Files</h2>

        <CodeBlock title="Express Static" language="javascript" code={`const path = require('path');

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}`} />
      </div>
    ),

    'ci-cd': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">CI/CD Basics</h1>
        <p className="text-slate-400">Automate testing and deployment.</p>

        <h2 className="text-xl font-semibold text-white mt-8">GitHub Actions</h2>

        <CodeBlock title=".github/workflows/deploy.yml" language="yaml" code={`name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build`} />
      </div>
    ),

    'cloud-services': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Cloud Deployment</h1>
        <p className="text-slate-400">Deploy to popular cloud platforms.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Vercel (Frontend)</h2>

        <CodeBlock title="vercel.json" language="json" code={`{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Render (Backend)</h2>

        <CodeBlock title="render.yaml" language="yaml" code={`services:
  - type: web
    name: api
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false`} />

        <h2 className="text-xl font-semibold text-white mt-8">MongoDB Atlas</h2>

        <Callout type="tip" title="MongoDB Atlas Setup">
          <ol className="list-decimal list-inside space-y-1">
            <li>Create account at mongodb.com/atlas</li>
            <li>Create a free cluster</li>
            <li>Add database user</li>
            <li>Whitelist IP addresses (0.0.0.0/0 for all)</li>
            <li>Get connection string for your app</li>
          </ol>
        </Callout>

        <LearningResources title="Deployment & DevOps Resources">
          <ResourceLink
            href="https://vercel.com/docs"
            title="Vercel Documentation"
            description="Deploy React apps with zero configuration"
            type="docs"
          />
          <ResourceLink
            href="https://render.com/docs"
            title="Render Documentation"
            description="Deploy Node.js/Express apps easily"
            type="docs"
          />
          <ResourceLink
            href="https://docs.github.com/en/actions"
            title="GitHub Actions Docs"
            description="Automate CI/CD workflows"
            type="docs"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=l134cBAJCuc"
            title="Deploy MERN App Tutorial"
            description="Complete MERN deployment walkthrough"
            type="video"
          />
          <ResourceLink
            href="https://railway.app/"
            title="Railway"
            description="Easy deployment platform for full-stack apps"
            type="tool"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['deployment-basics'];
};

// ============ CAREER CONTENT ============
const CareerContent = ({ subsection }) => {
  const content = {
    'projects': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Project Ideas</h1>
        <p className="text-slate-400">Build these projects to solidify your MERN skills.</p>

        <div className="p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30">
          <h3 className="font-semibold text-white mb-3">Why Projects Matter</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Tutorials can only take you so far. Building real projects forces you to solve problems, make architectural decisions, and encounter the same challenges you'll face in professional work. Employers value demonstrable skills over certifications—your portfolio of projects is your proof of competence.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Start with beginner projects to reinforce fundamentals, then progress to more complex applications that integrate all parts of the MERN stack. Each project should teach you something new and be polished enough to showcase in your portfolio.
          </p>
        </div>

        <Callout type="tip" title="Project Best Practices">
          <ul className="space-y-1">
            <li>Include a detailed README with setup instructions</li>
            <li>Deploy each project with a live demo link</li>
            <li>Write clean, well-commented code</li>
            <li>Use Git with meaningful commit messages</li>
            <li>Add features beyond the basic requirements to stand out</li>
          </ul>
        </Callout>

        <div className="grid gap-4">
          {[
            { level: 'Beginner', color: '#22C55E', projects: [
              { name: 'Todo App', desc: 'CRUD operations, local storage, simple UI' },
              { name: 'Weather App', desc: 'API integration, async data fetching' },
              { name: 'Portfolio Site', desc: 'React components, responsive design' }
            ]},
            { level: 'Intermediate', color: '#3B82F6', projects: [
              { name: 'Blog Platform', desc: 'User auth, CRUD posts, comments, rich text' },
              { name: 'E-commerce Store', desc: 'Product catalog, cart, checkout flow' },
              { name: 'Task Manager', desc: 'Teams, assignments, due dates, notifications' }
            ]},
            { level: 'Advanced', color: '#8B5CF6', projects: [
              { name: 'Real-time Chat', desc: 'Socket.io, online status, typing indicators' },
              { name: 'Social Media App', desc: 'Posts, likes, follows, feed algorithm' },
              { name: 'Job Board', desc: 'Search, filters, applications, admin panel' }
            ]}
          ].map((category) => (
            <div key={category.level} className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="font-bold text-lg mb-3" style={{ color: category.color }}>{category.level}</h3>
              <div className="space-y-2">
                {category.projects.map((project) => (
                  <div key={project.name} className="flex justify-between items-start">
                    <span className="font-medium text-white">{project.name}</span>
                    <span className="text-sm text-slate-400">{project.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    'portfolio': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Building Your Portfolio</h1>
        <p className="text-slate-400">Showcase your skills to potential employers.</p>

        <Callout type="tip" title="Portfolio Must-Haves">
          <ul className="list-disc list-inside space-y-1">
            <li>3-5 quality projects with live demos</li>
            <li>Clean, well-documented GitHub repos</li>
            <li>Professional README files</li>
            <li>Responsive design</li>
            <li>Contact information</li>
          </ul>
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">GitHub Profile Tips</h2>
        <ul className="space-y-2 text-slate-300">
          <li>• Commit code regularly (green squares matter)</li>
          <li>• Write meaningful commit messages</li>
          <li>• Create a profile README</li>
          <li>• Pin your best repositories</li>
          <li>• Contribute to open source</li>
        </ul>
      </div>
    ),

    'interview-prep': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Interview Preparation</h1>
        <p className="text-slate-400">Common topics and questions for MERN interviews.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Key Topics</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { area: 'JavaScript', topics: ['Closures', 'Promises/async-await', 'Event loop', 'Prototypes', 'ES6+ features'] },
            { area: 'React', topics: ['Virtual DOM', 'Hooks lifecycle', 'State management', 'Performance optimization', 'Component patterns'] },
            { area: 'Node.js', topics: ['Event-driven architecture', 'Middleware', 'Error handling', 'Streams', 'Security'] },
            { area: 'MongoDB', topics: ['Schema design', 'Indexing', 'Aggregation', 'Transactions', 'Replication'] }
          ].map((section) => (
            <div key={section.area} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="font-bold text-cyan-400 mb-2">{section.area}</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                {section.topics.map((topic) => (
                  <li key={topic}>• {topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Callout type="info" title="Interview Tips">
          <ul className="list-disc list-inside space-y-1">
            <li>Practice coding on LeetCode/HackerRank</li>
            <li>Be ready to explain your projects in detail</li>
            <li>Understand the "why" behind technologies</li>
            <li>Ask thoughtful questions about the role</li>
          </ul>
        </Callout>

        <LearningResources title="Career & Interview Resources">
          <ResourceLink
            href="https://leetcode.com/"
            title="LeetCode"
            description="Practice coding problems and prepare for interviews"
            type="tool"
          />
          <ResourceLink
            href="https://www.hackerrank.com/"
            title="HackerRank"
            description="Coding challenges and skill certification"
            type="tool"
          />
          <ResourceLink
            href="https://github.com/sudheerj/reactjs-interview-questions"
            title="React Interview Questions"
            description="500+ React interview questions with answers"
            type="article"
          />
          <ResourceLink
            href="https://github.com/lydiahallie/javascript-questions"
            title="JavaScript Questions"
            description="Advanced JavaScript questions explained"
            type="article"
          />
          <ResourceLink
            href="https://www.youtube.com/watch?v=xr4cZvTXLzE"
            title="MERN Stack Interview Questions"
            description="Common MERN interview questions explained"
            type="video"
          />
          <ResourceLink
            href="https://www.pramp.com/"
            title="Pramp"
            description="Free mock technical interviews"
            type="tool"
          />
        </LearningResources>
      </div>
    )
  };

  return content[subsection] || content['projects'];
};
