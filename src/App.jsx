import React, { useState, useEffect } from 'react';

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
      id: 'week1',
      title: 'Week 1: JavaScript & Node.js',
      icon: Icons.Code,
      color: '#3B82F6',
      subsections: ['es6-features', 'async-javascript', 'nodejs-basics', 'npm-modules']
    },
    {
      id: 'week2',
      title: 'Week 2: React & Express',
      icon: Icons.Globe,
      color: '#10B981',
      subsections: ['react-fundamentals', 'react-hooks', 'express-basics', 'rest-api']
    },
    {
      id: 'week3',
      title: 'Week 3: MongoDB & Advanced React',
      icon: Icons.Database,
      color: '#8B5CF6',
      subsections: ['mongodb-basics', 'mongoose', 'react-router', 'context-api']
    },
    {
      id: 'week4',
      title: 'Week 4: Auth & Deployment',
      icon: Icons.Rocket,
      color: '#F59E0B',
      subsections: ['jwt-auth', 'security', 'deployment']
    }
  ]
};

// ============ CONTENT PAGES ============
const OverviewContent = () => (
  <div className="space-y-8">
    <div className="text-center py-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="text-cyan-400 text-sm font-medium">4-Week Internship Program</span>
      </div>
      <h1 className="text-5xl font-black text-white mb-4">
        MERN Stack <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Documentation</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto">
        Complete guide to becoming a full-stack developer with MongoDB, Express.js, React, and Node.js
      </p>
    </div>

    {/* MERN Stack Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { letter: 'M', name: 'MongoDB', color: '#10B981', desc: 'NoSQL Database', details: 'Document-based database for storing JSON-like data' },
        { letter: 'E', name: 'Express.js', color: '#64748B', desc: 'Backend Framework', details: 'Fast, minimalist web framework for Node.js' },
        { letter: 'R', name: 'React', color: '#3B82F6', desc: 'Frontend Library', details: 'JavaScript library for building user interfaces' },
        { letter: 'N', name: 'Node.js', color: '#84CC16', desc: 'Runtime', details: 'JavaScript runtime built on Chrome V8 engine' }
      ].map((tech) => (
        <div key={tech.letter} className="group p-5 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all cursor-pointer">
          <span className="text-4xl font-black" style={{ color: tech.color }}>{tech.letter}</span>
          <p className="font-bold text-white mt-2">{tech.name}</p>
          <p className="text-sm text-slate-500">{tech.desc}</p>
          <p className="text-xs text-slate-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{tech.details}</p>
        </div>
      ))}
    </div>

    <Callout type="info" title="What You'll Learn">
      This roadmap covers everything from JavaScript fundamentals to deploying full-stack applications. 
      Each week builds upon the previous, with hands-on projects and real-world examples.
    </Callout>

    {/* Timeline */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Learning Timeline</h2>
      <div className="grid gap-4">
        {[
          { week: 1, title: 'JavaScript Advanced & Node.js', desc: 'ES6+, Async/Await, Node.js core modules', color: '#3B82F6' },
          { week: 2, title: 'React & Express.js', desc: 'Components, Hooks, REST APIs, Middleware', color: '#10B981' },
          { week: 3, title: 'MongoDB & React Advanced', desc: 'Mongoose, React Router, Context API', color: '#8B5CF6' },
          { week: 4, title: 'Authentication & Deployment', desc: 'JWT, Security best practices, Vercel/Render', color: '#F59E0B' }
        ].map((item) => (
          <div key={item.week} className="flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white" style={{ backgroundColor: item.color }}>
              W{item.week}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Prerequisites */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Icons.Check className="w-5 h-5 text-emerald-400" /> Prerequisites
        </h3>
        <ul className="space-y-2">
          {['HTML5 & semantic elements', 'CSS3 (Flexbox, Grid)', 'JavaScript fundamentals', 'Basic Git knowledge'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Icons.Terminal className="w-5 h-5 text-blue-400" /> Required Tools
        </h3>
        <ul className="space-y-2">
          {['VS Code', 'Node.js (LTS)', 'Git & GitHub', 'MongoDB Compass', 'Postman'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Week 1 Content
const Week1Content = ({ subsection }) => {
  const content = {
    'es6-features': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">ES6+ Features</h1>
        <p className="text-slate-400">Modern JavaScript features that every developer should know.</p>
        
        <h2 className="text-xl font-semibold text-white mt-8">let and const</h2>
        <p className="text-slate-300">Block-scoped variable declarations that replace <code className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400">var</code>.</p>
        
        <CodeBlock title="Variable Declarations" language="javascript" code={`// const - cannot be reassigned
const API_URL = 'https://api.example.com';
const user = { name: 'John', age: 25 };

// Objects declared with const can be mutated
user.age = 26; // ✅ This works
// user = {}; // ❌ Error: Assignment to constant variable

// let - can be reassigned, block-scoped
let count = 0;
count = 1; // ✅ This works

// Block scoping
if (true) {
  let blockScoped = 'only available here';
  const alsoBlockScoped = 'same here';
}
// console.log(blockScoped); // ❌ ReferenceError`} />

        <h2 className="text-xl font-semibold text-white mt-8">Arrow Functions</h2>
        <p className="text-slate-300">Concise syntax for writing functions with lexical <code className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400">this</code> binding.</p>
        
        <CodeBlock title="Arrow Functions" language="javascript" code={`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter (parentheses optional)
const double = n => n * 2;

// With function body
const greet = name => {
  const greeting = 'Hello';
  return \`\${greeting}, \${name}!\`;
};

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
console.log(sum);     // 15`} />

        <Callout type="warning" title="Arrow Functions & this">
          Arrow functions don't have their own <code>this</code> context. They inherit <code>this</code> from the enclosing scope. 
          This makes them great for callbacks but unsuitable for object methods that need to access <code>this</code>.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Destructuring</h2>
        <p className="text-slate-300">Extract values from arrays and objects into distinct variables.</p>
        
        <CodeBlock title="Destructuring" language="javascript" code={`// Object Destructuring
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Basic destructuring
const { name, email } = user;
console.log(name); // 'John Doe'

// With default values
const { phone = 'N/A' } = user;
console.log(phone); // 'N/A'

// Renaming variables
const { name: userName, email: userEmail } = user;
console.log(userName); // 'John Doe'

// Nested destructuring
const { address: { city, country } } = user;
console.log(city); // 'New York'

// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'

// Skip elements
const [, , lastColor] = colors;
console.log(lastColor); // 'blue'

// Rest pattern
const [primary, ...rest] = colors;
console.log(rest); // ['green', 'blue']

// Function parameters
function createUser({ name, email, role = 'user' }) {
  return { name, email, role, createdAt: new Date() };
}

const newUser = createUser({ name: 'Jane', email: 'jane@example.com' });`} />

        <h2 className="text-xl font-semibold text-white mt-8">Spread & Rest Operators</h2>
        
        <CodeBlock title="Spread & Rest" language="javascript" code={`// Spread Operator (...) - Expands elements

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Clone array (shallow copy)
const clone = [...arr1];

// Objects
const defaults = { theme: 'dark', language: 'en' };
const userPrefs = { theme: 'light' };
const settings = { ...defaults, ...userPrefs };
// { theme: 'light', language: 'en' }

// Rest Operator (...) - Collects elements

// Function parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Destructuring with rest
const [first, ...remaining] = [1, 2, 3, 4, 5];
console.log(remaining); // [2, 3, 4, 5]

const { id, ...userData } = { id: 1, name: 'John', email: 'john@example.com' };
console.log(userData); // { name: 'John', email: 'john@example.com' }`} />

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

// Expressions in template literals
const price = 99.99;
const tax = 0.1;
const total = \`Total: $\${(price * (1 + tax)).toFixed(2)}\`;
// "Total: $109.99"

// Tagged template literals (advanced)
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const highlighted = highlight\`Hello \${name}, welcome!\`;
// "Hello <mark>John</mark>, welcome!"`} />

        <h2 className="text-xl font-semibold text-white mt-8">Modules (import/export)</h2>
        
        <CodeBlock title="ES6 Modules" language="javascript" code={`// ============ math.js ============
// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export (one per module)
export default class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(n) {
    this.result += n;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

// ============ app.js ============
// Import default export
import Calculator from './math.js';

// Import named exports
import { add, multiply, PI } from './math.js';

// Import with alias
import { add as sum } from './math.js';

// Import all as namespace
import * as MathUtils from './math.js';

console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.add(2, 3)); // 5

// Usage
const calc = new Calculator();
calc.add(5).add(10);
console.log(calc.getResult()); // 15`} />

        <Callout type="tip" title="Best Practice">
          Use named exports for utility functions and constants. Use default exports for main module functionality (like a class or primary function).
        </Callout>
      </div>
    ),

    'async-javascript': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Asynchronous JavaScript</h1>
        <p className="text-slate-400">Master Promises and async/await for handling asynchronous operations.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Understanding Promises</h2>
        <p className="text-slate-300">A Promise represents a value that may be available now, later, or never.</p>

        <CodeBlock title="Promises Basics" language="javascript" code={`// Creating a Promise
const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'John Doe' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
};

// Using Promises with .then() and .catch()
fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return user.id; // Chain another promise
  })
  .then(id => {
    console.log('User ID:', id);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operation completed');
  });

// Promise states:
// - Pending: Initial state
// - Fulfilled: Operation completed successfully
// - Rejected: Operation failed`} />

        <h2 className="text-xl font-semibold text-white mt-8">async/await</h2>
        <p className="text-slate-300">Modern syntax for handling Promises that makes async code look synchronous.</p>

        <CodeBlock title="async/await" language="javascript" code={`// Async function declaration
async function getUser(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error; // Re-throw to let caller handle it
  }
}

// Arrow function with async
const fetchPosts = async (userId) => {
  const response = await fetch(\`https://api.example.com/users/\${userId}/posts\`);
  return response.json();
};

// Using async functions
async function displayUserData() {
  try {
    const user = await getUser(1);
    console.log('User:', user);
    
    const posts = await fetchPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
displayUserData();`} />

        <h2 className="text-xl font-semibold text-white mt-8">Parallel Execution</h2>

        <CodeBlock title="Promise.all & Promise.allSettled" language="javascript" code={`// Promise.all - Waits for ALL promises to resolve
// Fails fast if ANY promise rejects
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('One of the requests failed:', error);
  }
}

// Promise.allSettled - Waits for ALL promises to settle
// Returns results for both fulfilled and rejected promises
async function fetchWithStatus() {
  const results = await Promise.allSettled([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/invalid').then(r => r.json()), // This might fail
    fetch('/api/posts').then(r => r.json())
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`Request \${index} succeeded:\`, result.value);
    } else {
      console.log(\`Request \${index} failed:\`, result.reason);
    }
  });
}

// Promise.race - Returns first settled promise
const timeout = (ms) => new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), ms)
);

async function fetchWithTimeout(url, ms = 5000) {
  return Promise.race([
    fetch(url),
    timeout(ms)
  ]);
}`} />

        <Callout type="info" title="Error Handling Best Practices">
          Always wrap async operations in try/catch blocks. Consider creating a utility function for API calls that handles common errors like timeouts, network errors, and HTTP status codes.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Real-World Example: API Service</h2>

        <CodeBlock title="API Service Class" language="javascript" code={`class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || \`HTTP \${response.status}\`);
      }
      
      return response.json();
    } catch (error) {
      console.error(\`API Error [\${endpoint}]:\`, error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
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

// Usage
const api = new ApiService('https://api.example.com');

async function main() {
  // GET request
  const users = await api.get('/users');
  
  // POST request
  const newUser = await api.post('/users', {
    name: 'John Doe',
    email: 'john@example.com'
  });
  
  // PUT request
  const updatedUser = await api.put(\`/users/\${newUser.id}\`, {
    name: 'John Updated'
  });
  
  // DELETE request
  await api.delete(\`/users/\${newUser.id}\`);
}`} />
      </div>
    ),

    'nodejs-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Node.js Fundamentals</h1>
        <p className="text-slate-400">Server-side JavaScript runtime for building scalable applications.</p>

        <Callout type="info" title="What is Node.js?">
          Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server, 
          enabling full-stack JavaScript development.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Creating Your First Server</h2>

        <CodeBlock title="Basic HTTP Server" language="javascript" code={`const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // Handle different routes
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

        <CodeBlock title="fs Module Operations" language="javascript" code={`const fs = require('fs');
const path = require('path');

// ============ Synchronous Operations ============
// Reading file (blocking)
const data = fs.readFileSync('config.json', 'utf8');
console.log(JSON.parse(data));

// Writing file (blocking)
fs.writeFileSync('output.txt', 'Hello, World!');

// ============ Asynchronous Operations (Recommended) ============
// Reading file (non-blocking)
fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(JSON.parse(data));
});

// Using Promises (modern approach)
const fsPromises = require('fs').promises;

async function readConfig() {
  try {
    const data = await fsPromises.readFile('config.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Common file operations
async function fileOperations() {
  // Check if file exists
  const exists = fs.existsSync('myfile.txt');
  
  // Create directory
  await fsPromises.mkdir('uploads', { recursive: true });
  
  // List directory contents
  const files = await fsPromises.readdir('./');
  console.log('Files:', files);
  
  // Get file stats
  const stats = await fsPromises.stat('package.json');
  console.log('Size:', stats.size, 'bytes');
  console.log('Is Directory:', stats.isDirectory());
  
  // Delete file
  await fsPromises.unlink('temp.txt');
  
  // Rename/Move file
  await fsPromises.rename('old.txt', 'new.txt');
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Path Module</h2>

        <CodeBlock title="path Module" language="javascript" code={`const path = require('path');

// Join path segments
const filePath = path.join(__dirname, 'uploads', 'image.png');
// /home/user/project/uploads/image.png

// Get directory name
console.log(path.dirname(filePath)); // /home/user/project/uploads

// Get file name
console.log(path.basename(filePath)); // image.png
console.log(path.basename(filePath, '.png')); // image

// Get extension
console.log(path.extname(filePath)); // .png

// Parse path into object
const parsed = path.parse(filePath);
console.log(parsed);
// {
//   root: '/',
//   dir: '/home/user/project/uploads',
//   base: 'image.png',
//   ext: '.png',
//   name: 'image'
// }

// Resolve absolute path
const absolute = path.resolve('src', 'index.js');

// Normalize path (clean up)
const messy = path.normalize('/users//john/../jane/./docs');
// /users/jane/docs`} />

        <h2 className="text-xl font-semibold text-white mt-8">Environment Variables</h2>

        <CodeBlock title="Environment Variables" language="javascript" code={`// Access environment variables
console.log(process.env.NODE_ENV); // 'development' or 'production'
console.log(process.env.PORT);     // e.g., '3000'

// Using dotenv package for .env files
// First: npm install dotenv

// .env file:
// PORT=3000
// DATABASE_URL=mongodb://localhost:27017/mydb
// JWT_SECRET=your-secret-key

// Load at the top of your entry file
require('dotenv').config();

// Now you can use them
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;

// Config file pattern
// config/index.js
module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL,
    name: process.env.DB_NAME || 'myapp'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  }
};`} />

        <Callout type="warning" title="Security Note">
          Never commit <code>.env</code> files to version control. Add <code>.env</code> to your <code>.gitignore</code>. 
          Create a <code>.env.example</code> file with placeholder values for documentation.
        </Callout>
      </div>
    ),

    'npm-modules': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">npm & Package Management</h1>
        <p className="text-slate-400">Managing dependencies and creating Node.js projects.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Essential npm Commands</h2>

        <CodeBlock title="npm Commands" language="bash" code={`# Initialize a new project
npm init
npm init -y  # Skip questions, use defaults

# Install dependencies
npm install express         # Add to dependencies
npm install nodemon -D      # Add to devDependencies
npm install                 # Install all from package.json

# Install specific version
npm install express@4.18.0
npm install express@^4.0.0  # Any 4.x version

# Global installation
npm install -g nodemon

# Update packages
npm update              # Update all packages
npm update express      # Update specific package

# Remove packages
npm uninstall express
npm uninstall -g nodemon

# View installed packages
npm list               # All packages
npm list --depth=0     # Top-level only

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit
npm audit fix          # Auto-fix vulnerabilities

# Run scripts
npm start              # Run "start" script
npm test               # Run "test" script
npm run dev            # Run custom "dev" script`} />

        <h2 className="text-xl font-semibold text-white mt-8">package.json Configuration</h2>

        <CodeBlock title="package.json" language="json" code={`{
  "name": "my-mern-app",
  "version": "1.0.0",
  "description": "A full-stack MERN application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "client": "npm start --prefix client",
    "build": "npm run build --prefix client",
    "dev:full": "concurrently \\"npm run dev\\" \\"npm run client\\""
  },
  "keywords": ["mern", "react", "node", "mongodb"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "concurrently": "^8.0.1"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Creating Custom Modules</h2>

        <CodeBlock title="Custom Modules" language="javascript" code={`// ============ utils/helpers.js ============
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\\w\\s-]/g, '')
    .replace(/\\s+/g, '-');
};

module.exports = {
  formatDate,
  generateId,
  slugify
};

// ============ utils/validators.js ============
const isValidEmail = (email) => {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
};

const isStrongPassword = (password) => {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
  return regex.test(password);
};

module.exports = { isValidEmail, isStrongPassword };

// ============ Usage in app.js ============
const { formatDate, generateId, slugify } = require('./utils/helpers');
const { isValidEmail, isStrongPassword } = require('./utils/validators');

console.log(formatDate(new Date())); // "January 15, 2025"
console.log(generateId());           // "k5m3n2p1q"
console.log(slugify('Hello World!')); // "hello-world"
console.log(isValidEmail('test@example.com')); // true`} />
      </div>
    )
  };

  return content[subsection] || content['es6-features'];
};

// Week 2 Content
const Week2Content = ({ subsection }) => {
  const content = {
    'react-fundamentals': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Fundamentals</h1>
        <p className="text-slate-400">Build interactive user interfaces with components and JSX.</p>

        <h2 className="text-xl font-semibold text-white mt-8">JSX Syntax</h2>

        <CodeBlock title="JSX Basics" language="jsx" code={`// JSX lets you write HTML-like syntax in JavaScript
function Welcome() {
  const name = 'John';
  const isLoggedIn = true;
  
  return (
    <div className="container">
      {/* Comments in JSX use curly braces */}
      <h1>Hello, {name}!</h1>
      
      {/* Conditional rendering */}
      {isLoggedIn && <p>Welcome back!</p>}
      
      {/* Ternary operator */}
      <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
      
      {/* Inline styles use objects */}
      <p style={{ color: 'blue', fontSize: '16px' }}>
        Styled text
      </p>
    </div>
  );
}

// JSX Rules:
// 1. Return a single root element (use <> </> for fragments)
// 2. Use className instead of class
// 3. Use camelCase for attributes (onClick, onChange)
// 4. Self-close empty tags: <img />, <input />`} />

        <h2 className="text-xl font-semibold text-white mt-8">Components & Props</h2>

        <CodeBlock title="Components & Props" language="jsx" code={`// Functional Component
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
  size = 'medium',
  disabled = false,
  onClick 
}) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Using components
function App() {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com', avatar: '/john.jpg' },
    { id: 2, name: 'Jane', email: 'jane@example.com', avatar: '/jane.jpg' }
  ];
  
  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };
  
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
          onDelete={() => handleDelete(user.id)}
        />
      ))}
      
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}`} />

        <Callout type="info" title="Key Prop">
          When rendering lists, always provide a unique <code>key</code> prop. 
          This helps React identify which items have changed, been added, or removed.
        </Callout>
      </div>
    ),

    'react-hooks': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Hooks</h1>
        <p className="text-slate-400">Use state and lifecycle features in functional components.</p>

        <h2 className="text-xl font-semibold text-white mt-8">useState Hook</h2>

        <CodeBlock title="useState" language="jsx" code={`import { useState } from 'react';

function Counter() {
  // Declare state variable with initial value
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Or use an object for related state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,          // Keep existing values
      [name]: value     // Update specific field
    }));
  };
  
  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}

// Functional updates (when new state depends on previous)
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    // ❌ May not work correctly with batched updates
    setCount(count + 1);
    
    // ✅ Use functional form when depending on previous state
    setCount(prevCount => prevCount + 1);
  };
  
  return <button onClick={increment}>{count}</button>;
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">useEffect Hook</h2>

        <CodeBlock title="useEffect" language="jsx" code={`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when component mounts or userId changes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Dependency array - re-run when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// useEffect patterns
function Examples() {
  // 1. Run once on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function runs on unmount
    return () => console.log('Component unmounted');
  }, []);

  // 2. Run on every render (no dependency array)
  useEffect(() => {
    console.log('Component rendered');
  });

  // 3. Run when specific values change
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  // 4. Cleanup subscriptions
  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <div>Examples</div>;
}`} />

        <Callout type="warning" title="Common Mistakes">
          Don't forget the dependency array! Without it, useEffect runs on every render. 
          Include all values from the component scope that change over time and are used by the effect.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Custom Hooks</h2>

        <CodeBlock title="Custom Hooks" language="jsx" code={`// Custom hook for API fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: cancel request if component unmounts
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Using custom hooks
function App() {
  const { data: users, loading, error } = useFetch('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
      {users?.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}`} />
      </div>
    ),

    'express-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Express.js Basics</h1>
        <p className="text-slate-400">Build web servers and APIs with Express.js.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Setting Up Express</h2>

        <CodeBlock title="Express Setup" language="javascript" code={`// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ============ Middleware ============
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next(); // Pass control to next middleware
});

// ============ Routes ============
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// ============ Error Handling ============
// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ============ Start Server ============
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
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

// Multiple route parameters: /posts/:postId/comments/:commentId
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.json({ postId, commentId });
});

// Route handlers with multiple callbacks
const validateUser = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email required' });
  }
  next();
};

app.post('/users', validateUser, (req, res) => {
  // This only runs if validateUser calls next()
  res.json({ message: 'User created', data: req.body });
});

// Using Router for modular routes
// routes/users.js
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ users: [] });
});

router.get('/:id', (req, res) => {
  res.json({ user: { id: req.params.id } });
});

router.post('/', (req, res) => {
  res.status(201).json({ user: req.body });
});

module.exports = router;

// server.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
// Routes: GET /api/users, GET /api/users/:id, POST /api/users`} />

        <h2 className="text-xl font-semibold text-white mt-8">Middleware</h2>

        <CodeBlock title="Middleware Examples" language="javascript" code={`// Middleware is a function with access to req, res, and next

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user to request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Role-based authorization
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
});

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage with async routes
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find(); // No try/catch needed
  res.json(users);
}));`} />
      </div>
    ),

    'rest-api': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Building REST APIs</h1>
        <p className="text-slate-400">Create RESTful APIs with Express.js following best practices.</p>

        <Callout type="info" title="REST Principles">
          REST (Representational State Transfer) uses HTTP methods to perform operations:
          GET (read), POST (create), PUT (update), PATCH (partial update), DELETE (remove).
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Complete CRUD API</h2>

        <CodeBlock title="CRUD API Example" language="javascript" code={`// controllers/userController.js
const users = []; // In-memory storage (use database in production)
let nextId = 1;

// GET /api/users - Get all users
exports.getUsers = (req, res) => {
  const { page = 1, limit = 10, sort = 'name' } = req.query;
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const results = {
    data: users.slice(startIndex, endIndex),
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: users.length,
      pages: Math.ceil(users.length / limit)
    }
  };
  
  res.json(results);
};

// GET /api/users/:id - Get single user
exports.getUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ data: user });
};

// POST /api/users - Create user
exports.createUser = (req, res) => {
  const { name, email, role = 'user' } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  // Check for duplicate email
  if (users.some(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already exists' });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email,
    role,
    createdAt: new Date()
  };
  
  users.push(newUser);
  res.status(201).json({ data: newUser });
};

// PUT /api/users/:id - Update user (full)
exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { name, email, role } = req.body;
  
  users[index] = {
    ...users[index],
    name,
    email,
    role,
    updatedAt: new Date()
  };
  
  res.json({ data: users[index] });
};

// DELETE /api/users/:id - Delete user
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users.splice(index, 1);
  res.status(204).send(); // No content
};

// routes/users.js
const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;`} />

        <h2 className="text-xl font-semibold text-white mt-8">API Response Standards</h2>

        <CodeBlock title="Response Patterns" language="javascript" code={`// Consistent response helper
const sendResponse = (res, statusCode, data, message = null) => {
  const response = {
    success: statusCode < 400,
    ...(message && { message }),
    ...(data && { data })
  };
  res.status(statusCode).json(response);
};

// Success responses
sendResponse(res, 200, users, 'Users retrieved successfully');
// { success: true, message: '...', data: [...] }

sendResponse(res, 201, newUser, 'User created');
// { success: true, message: '...', data: {...} }

// Error responses
sendResponse(res, 400, null, 'Validation error');
sendResponse(res, 404, null, 'Resource not found');
sendResponse(res, 500, null, 'Internal server error');

// Custom error class
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
  }
}

// Usage
if (!user) {
  throw new ApiError(404, 'User not found');
}

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});`} />
      </div>
    )
  };

  return content[subsection] || content['react-fundamentals'];
};

// Week 3 Content
const Week3Content = ({ subsection }) => {
  const content = {
    'mongodb-basics': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">MongoDB Basics</h1>
        <p className="text-slate-400">Document-based NoSQL database for modern applications.</p>

        <Callout type="info" title="Why MongoDB?">
          MongoDB stores data in flexible, JSON-like documents. It's schema-less, horizontally scalable, 
          and perfect for applications with rapidly evolving data requirements.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">MongoDB vs SQL</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="p-3 text-slate-300">SQL</th>
                <th className="p-3 text-slate-300">MongoDB</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800"><td className="p-3">Database</td><td className="p-3">Database</td></tr>
              <tr className="border-b border-slate-800"><td className="p-3">Table</td><td className="p-3">Collection</td></tr>
              <tr className="border-b border-slate-800"><td className="p-3">Row</td><td className="p-3">Document</td></tr>
              <tr className="border-b border-slate-800"><td className="p-3">Column</td><td className="p-3">Field</td></tr>
              <tr><td className="p-3">JOIN</td><td className="p-3">Embedding / $lookup</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-white mt-8">CRUD Operations</h2>

        <CodeBlock title="MongoDB CRUD" language="javascript" code={`// MongoDB Shell / Compass Commands

// ============ CREATE ============
// Insert one document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  roles: ["user"],
  createdAt: new Date()
});

// Insert many documents
db.users.insertMany([
  { name: "Jane", email: "jane@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 35 }
]);

// ============ READ ============
// Find all documents
db.users.find();

// Find with filter
db.users.find({ age: { $gte: 30 } });

// Find one document
db.users.findOne({ email: "john@example.com" });

// Projection (select specific fields)
db.users.find({}, { name: 1, email: 1, _id: 0 });

// Sorting and limiting
db.users.find().sort({ age: -1 }).limit(10);

// ============ UPDATE ============
// Update one document
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 } }
);

// Update many documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
);

// Increment a value
db.users.updateOne(
  { email: "john@example.com" },
  { $inc: { loginCount: 1 } }
);

// Add to array
db.users.updateOne(
  { email: "john@example.com" },
  { $push: { roles: "admin" } }
);

// ============ DELETE ============
// Delete one document
db.users.deleteOne({ email: "john@example.com" });

// Delete many documents
db.users.deleteMany({ status: "inactive" });`} />

        <h2 className="text-xl font-semibold text-white mt-8">Query Operators</h2>

        <CodeBlock title="Query Operators" language="javascript" code={`// Comparison Operators
db.products.find({ price: { $gt: 100 } });    // Greater than
db.products.find({ price: { $gte: 100 } });   // Greater than or equal
db.products.find({ price: { $lt: 50 } });     // Less than
db.products.find({ price: { $lte: 50 } });    // Less than or equal
db.products.find({ price: { $ne: 100 } });    // Not equal
db.products.find({ price: { $in: [50, 100, 150] } }); // In array

// Logical Operators
db.users.find({
  $and: [
    { age: { $gte: 18 } },
    { status: "active" }
  ]
});

db.users.find({
  $or: [
    { role: "admin" },
    { role: "moderator" }
  ]
});

// Element Operators
db.users.find({ phone: { $exists: true } });  // Field exists
db.users.find({ age: { $type: "number" } });  // Field type

// Array Operators
db.posts.find({ tags: "mongodb" });           // Array contains value
db.posts.find({ tags: { $all: ["mongodb", "node"] } }); // Contains all
db.posts.find({ tags: { $size: 3 } });        // Array size

// Text Search (requires text index)
db.articles.createIndex({ title: "text", content: "text" });
db.articles.find({ $text: { $search: "mongodb tutorial" } });`} />
      </div>
    ),

    'mongoose': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Mongoose ODM</h1>
        <p className="text-slate-400">Elegant MongoDB object modeling for Node.js.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Connection Setup</h2>

        <CodeBlock title="Database Connection" language="javascript" code={`// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are no longer needed in Mongoose 6+
      // but shown for reference
    });
    
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

// Connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});

module.exports = connectDB;

// server.js
require('dotenv').config();
const connectDB = require('./config/database');

connectDB();`} />

        <h2 className="text-xl font-semibold text-white mt-8">Schemas & Models</h2>

        <CodeBlock title="Mongoose Schema" language="javascript" code={`// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false // Don't include in queries by default
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  avatar: {
    type: String,
    default: 'default-avatar.png'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true, // Adds createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field (not stored in DB)
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

// Pre-save middleware (hash password)
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
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

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });

module.exports = mongoose.model('User', userSchema);`} />

        <h2 className="text-xl font-semibold text-white mt-8">CRUD with Mongoose</h2>

        <CodeBlock title="Mongoose CRUD Operations" language="javascript" code={`const User = require('./models/User');

// CREATE
const createUser = async (userData) => {
  const user = await User.create(userData);
  // OR
  const user2 = new User(userData);
  await user2.save();
  return user;
};

// READ
const getUsers = async () => {
  // Find all
  const users = await User.find();
  
  // Find with conditions
  const activeUsers = await User.find({ isActive: true });
  
  // Find with query builder
  const results = await User.find()
    .where('age').gte(18)
    .where('role').equals('user')
    .select('name email')
    .sort({ createdAt: -1 })
    .limit(10)
    .skip(0);
  
  // Find one
  const user = await User.findById(id);
  const userByEmail = await User.findOne({ email });
  
  // Populate references
  const userWithPosts = await User.findById(id).populate('posts');
  
  return users;
};

// UPDATE
const updateUser = async (id, updateData) => {
  // findByIdAndUpdate returns the OLD document by default
  const user = await User.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true } // Return updated doc, run validators
  );
  return user;
};

// DELETE
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  // OR
  await User.deleteOne({ _id: id });
  // Delete many
  await User.deleteMany({ isActive: false });
};

// AGGREGATION
const getUserStats = async () => {
  const stats = await User.aggregate([
    { $match: { isActive: true } },
    { $group: {
      _id: '$role',
      count: { $sum: 1 },
      avgAge: { $avg: '$age' }
    }},
    { $sort: { count: -1 } }
  ]);
  return stats;
};`} />
      </div>
    ),

    'react-router': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">React Router</h1>
        <p className="text-slate-400">Client-side routing for single-page applications.</p>

        <CodeBlock title="React Router Setup" language="jsx" code={`// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper for common elements */}
        <Route path="/" element={<Layout />}>
          {/* Index route */}
          <Route index element={<Home />} />
          
          {/* Static routes */}
          <Route path="about" element={<About />} />
          
          {/* Nested routes */}
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userId" element={<UserDetail />} />
          </Route>
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Redirect */}
          <Route path="old-path" element={<Navigate to="/new-path" replace />} />
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Navigation & Hooks</h2>

        <CodeBlock title="Router Hooks" language="jsx" code={`import { 
  Link, 
  NavLink, 
  useNavigate, 
  useParams, 
  useSearchParams,
  useLocation 
} from 'react-router-dom';

// Navigation Components
function Navigation() {
  return (
    <nav>
      {/* Basic link */}
      <Link to="/">Home</Link>
      
      {/* NavLink with active styling */}
      <NavLink 
        to="/about"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        About
      </NavLink>
      
      {/* Link with state */}
      <Link to="/users" state={{ from: 'navigation' }}>
        Users
      </Link>
    </nav>
  );
}

// useNavigate - Programmatic navigation
function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    
    // Navigate to dashboard
    navigate('/dashboard');
    
    // Navigate with replace (no back button)
    navigate('/dashboard', { replace: true });
    
    // Navigate back
    navigate(-1);
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}

// useParams - Access route parameters
function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>{user?.name}</div>;
}

// useSearchParams - Query string management
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page')) || 1;
  
  const handleSearch = (newQuery) => {
    setSearchParams({ q: newQuery, page: 1 });
  };
  
  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => handleSearch(e.target.value)} 
      />
      <p>Page: {page}</p>
    </div>
  );
}

// useLocation - Access current location
function CurrentRoute() {
  const location = useLocation();
  
  console.log(location.pathname);  // /users/123
  console.log(location.search);    // ?sort=name
  console.log(location.state);     // { from: 'navigation' }
  
  return <div>Current: {location.pathname}</div>;
}`} />

        <h2 className="text-xl font-semibold text-white mt-8">Protected Routes</h2>

        <CodeBlock title="Protected Route Component" language="jsx" code={`// components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, requiredRole }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    // Redirect to login, save intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  // Render children or Outlet for nested routes
  return children ? children : <Outlet />;
}

// Usage in routes
<Route element={<ProtectedRoute />}>
  <Route path="dashboard" element={<Dashboard />} />
</Route>

<Route 
  path="admin" 
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminPanel />
    </ProtectedRoute>
  } 
/>`} />
      </div>
    ),

    'context-api': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Context API</h1>
        <p className="text-slate-400">Global state management without prop drilling.</p>

        <CodeBlock title="Auth Context Example" language="jsx" code={`// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext(null);

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('/api/auth/me', {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error('Auth check failed:', error);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const { user, token } = await response.json();
    localStorage.setItem('token', token);
    setUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// App.jsx
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>...</Routes>
      </Router>
    </AuthProvider>
  );
}

// Usage in components
function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}`} />
      </div>
    )
  };

  return content[subsection] || content['mongodb-basics'];
};

// Week 4 Content
const Week4Content = ({ subsection }) => {
  const content = {
    'jwt-auth': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">JWT Authentication</h1>
        <p className="text-slate-400">Secure your API with JSON Web Tokens.</p>

        <Callout type="info" title="What is JWT?">
          JWT (JSON Web Token) is a compact, self-contained token for securely transmitting information.
          It consists of three parts: Header, Payload, and Signature.
        </Callout>

        <h2 className="text-xl font-semibold text-white mt-8">Backend Implementation</h2>

        <CodeBlock title="Auth Controller" language="javascript" code={`// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create user (password hashed by mongoose pre-save hook)
    const user = await User.create({ name, email, password });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Find user and include password
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get current user
exports.getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
};`} />

        <h2 className="text-xl font-semibold text-white mt-8">Auth Middleware</h2>

        <CodeBlock title="Auth Middleware" language="javascript" code={`// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;

    // Get token from header
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized' });
  }
};

// Role authorization
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Not authorized to access this route' 
      });
    }
    next();
  };
};

// routes/auth.js
const router = require('express').Router();
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;`} />
      </div>
    ),

    'security': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Security Best Practices</h1>
        <p className="text-slate-400">Protect your application from common vulnerabilities.</p>

        <CodeBlock title="Security Middleware" language="javascript" code={`const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

const app = express();

// Set security HTTP headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later'
});
app.use('/api', limiter);

// Stricter rate limit for auth routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 attempts
  message: 'Too many login attempts'
});
app.use('/api/auth/login', authLimiter);

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser with size limit
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
const hpp = require('hpp');
app.use(hpp({
  whitelist: ['sort', 'fields', 'page', 'limit']
}));`} />

        <Callout type="warning" title="Security Checklist">
          Always: hash passwords, use HTTPS, validate input, sanitize output, 
          use environment variables for secrets, keep dependencies updated, and implement proper error handling.
        </Callout>
      </div>
    ),

    'deployment': (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Deployment</h1>
        <p className="text-slate-400">Deploy your MERN application to production.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Environment Setup</h2>

        <CodeBlock title=".env.example" language="bash" code={`# Server
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# Client
CLIENT_URL=https://your-app.vercel.app`} />

        <h2 className="text-xl font-semibold text-white mt-8">Deployment Platforms</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="font-semibold text-white mb-2">Frontend (Vercel)</h3>
            <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
              <li>Push code to GitHub</li>
              <li>Import project in Vercel</li>
              <li>Set environment variables</li>
              <li>Deploy automatically</li>
            </ol>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="font-semibold text-white mb-2">Backend (Render)</h3>
            <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
              <li>Create Web Service</li>
              <li>Connect GitHub repo</li>
              <li>Set build command: <code>npm install</code></li>
              <li>Set start command: <code>node server.js</code></li>
            </ol>
          </div>
        </div>

        <Callout type="success" title="Congratulations!">
          You've completed the MERN Stack roadmap! You now have the skills to build full-stack applications.
          Keep practicing by building projects and exploring advanced topics.
        </Callout>
      </div>
    )
  };

  return content[subsection] || content['jwt-auth'];
};

// ============ SIDEBAR ============
const Sidebar = ({ activeSection, setActiveSection, activeSubsection, setActiveSubsection, isOpen, setIsOpen }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-slate-900 border-r border-slate-800 
        transform transition-transform duration-300 z-50 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Icons.Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white">MERN Docs</h1>
                <p className="text-xs text-slate-500">v1.0.0</p>
              </div>
            </div>
            <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>
              <Icons.X />
            </button>
          </div>
        </div>

        <nav className="p-4">
          {docData.sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const hasSubsections = section.subsections?.length > 0;
            const isExpanded = expanded[section.id];

            return (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => {
                    if (hasSubsections) {
                      toggleExpand(section.id);
                    }
                    setActiveSection(section.id);
                    setActiveSubsection(section.subsections?.[0] || null);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  style={isActive ? { backgroundColor: `${section.color}20`, borderColor: `${section.color}50` } : {}}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" style={{ color: section.color }} />
                    <span className="font-medium text-sm">{section.title}</span>
                  </div>
                  {hasSubsections && (isExpanded ? <Icons.ChevronDown className="w-4 h-4" /> : <Icons.ChevronRight className="w-4 h-4" />)}
                </button>

                {hasSubsections && isExpanded && (
                  <div className="ml-8 mt-1 space-y-1">
                    {section.subsections.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          setActiveSection(section.id);
                          setActiveSubsection(sub);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSubsection === sub 
                            ? 'text-white bg-slate-800' 
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {sub.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

// ============ MAIN APP ============
export default function MERNDocumentation() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeSubsection, setActiveSubsection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewContent />;
      case 'week1':
        return <Week1Content subsection={activeSubsection || 'es6-features'} />;
      case 'week2':
        return <Week2Content subsection={activeSubsection || 'react-fundamentals'} />;
      case 'week3':
        return <Week3Content subsection={activeSubsection || 'mongodb-basics'} />;
      case 'week4':
        return <Week4Content subsection={activeSubsection || 'jwt-auth'} />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeSubsection={activeSubsection}
        setActiveSubsection={setActiveSubsection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="flex-1 min-h-screen">
        <header className="sticky top-0 z-30 lg:hidden bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-400 hover:text-white">
              <Icons.Menu />
            </button>
            <h1 className="font-bold text-white">MERN Documentation</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <div className="p-6 lg:p-10 max-w-4xl mx-auto">
          {renderContent()}
        </div>

        <footer className="border-t border-slate-800 p-6 text-center text-slate-500 text-sm">
          <p>MERN Stack Documentation • Your Company • {new Date().getFullYear()}</p>
        </footer>
      </main>
    </div>
  );
}
