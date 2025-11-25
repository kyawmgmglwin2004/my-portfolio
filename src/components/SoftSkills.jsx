// src/components/SoftSkills.jsx
import React from 'react';

const defaultSkills = [
  { id: 1, title: 'Communication', desc: "Clear writing and speaking; active listening.", emoji: '🗣️' },
  { id: 2, title: 'Teamwork', desc: 'Collaborating effectively with diverse teams.', emoji: '🤝' },
  { id: 3, title: 'Problem Solving', desc: 'Analytical thinking and creative solutions.', emoji: '🧠' },
  { id: 4, title: 'Adaptability', desc: "Quickly adjust to new tools, teams, and requirements.", emoji: '🌊' },
  { id: 5, title: 'Time Management', desc: 'Prioritizing tasks and meeting deadlines.', emoji: '⏱️' },
  { id: 6, title: 'Creativity', desc: 'Generating ideas and improving UX/code.', emoji: '✨' },
];

const SoftSkills = ({ skills = defaultSkills, className = '' }) => {
  return (
    <section id="soft-skills" className={`py-12 ${className}`}>
      <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s.id || s.title}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex items-start gap-4"
          >
            <div className="text-3xl leading-none">{s.emoji || '⭐'}</div>
            <div>
              <div className="font-semibold">{s.title}</div>
              {s.desc && (
                <div className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
