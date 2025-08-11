import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const MyLatestProject = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.slice(0, 3)); // Show only 3 latest projects
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading projects: {error}</div>;
  }

  return (
    <section id="projects-section" className="py-12 bg-emerald-500/5 shadow rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-600">My Latest Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Here are some of my recent web development projects that showcase my skills in frontend
          and full-stack development.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors text-sm"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live
                    </a>

                    <Link
                      to={`/project/${project.id}`}
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded transition-colors text-sm"
                    >
                      <FaInfoCircle className="mr-2" />
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyLatestProject;
