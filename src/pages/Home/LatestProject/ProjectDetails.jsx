import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaUserTie,
  FaReact,
  FaLightbulb,
  FaCheckCircle,
  FaExclamationTriangle,
  FaServer,
  FaDatabase,
  FaMobile,
  FaCode,
  FaLock,
  FaHistory,
  FaNodeJs,
} from 'react-icons/fa';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaStripe } from 'react-icons/fa6';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        const data = await response.json();
        const foundProject = data.find((p) => p.id === parseInt(id));

        if (!foundProject) {
          navigate('/not-found', { replace: true });
          return;
        }

        setProject(foundProject);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-red-500 mr-3" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{project.title}</h1>
        <p className="text-xl text-emerald-600 mb-2">{project.shortDescription}</p>
        <div className="flex items-center text-gray-500 mb-4 flex-wrap gap-4">
          <span className="flex items-center">
            <FaUserTie className="mr-2" />
            Role: {project.role}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            Duration: {project.developmentDuration}
          </span>
          {project.deployment && (
            <span className="flex items-center">
              <FaServer className="mr-2" />
              {project.deployment.client} + {project.deployment.server}
            </span>
          )}
        </div>
        <div className="w-20 h-1 bg-emerald-500 mb-6"></div>
      </div>

      {/* Project Image */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-8 border border-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Overview */}
      <section className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="text-emerald-500 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.uiPackages && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FaCode className="text-emerald-500 mr-2" />
                UI Packages Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.uiPackages.map((pkg, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {pkg}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-center mb-2">
                <div className="text-emerald-500 mr-3 text-xl">
                  {tech.name === 'React' && <FaReact />}
                  {tech.name === 'Node.js' && <FaNodeJs />}
                  {tech.name === 'Express.js' && <FaCode />}
                  {tech.name === 'MongoDB' && <FaDatabase />}
                  {tech.name === 'Firebase Auth' && <RiFirebaseFill />}
                  {tech.name === 'Firebase' && <RiFirebaseFill />}
                  {tech.name === 'Tailwind CSS' && <FaCode />}
                  {tech.name === 'JWT' && <FaLock />}
                  {tech.name === 'Stripe' && <FaStripe />}
                  {tech.name === 'jodit-react' && <FaCode />}
                  {tech.name === 'Framer Motion' && <FaMobile />}
                </div>
                <h4 className="font-medium text-gray-800">{tech.name}</h4>
              </div>
              <p className="text-sm text-gray-500 pl-9">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Links & Demo */}
      <section className="mb-8 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Links</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded flex items-center transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded flex items-center transition-colors"
          >
            <FaGithub className="mr-2" />
            GitHub Repository
          </a>
        </div>

        {project.demoCredentials && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Demo Credentials</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(project.demoCredentials).map(([role, creds]) => (
                <div key={role} className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 capitalize mb-2">{role}</h4>
                  <p className="text-sm text-gray-600 mb-1">Email: {creds.email}</p>
                  <p className="text-sm text-gray-600">Password: {creds.password}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Deployment & Development */}
      <section className="mb-8 grid md:grid-cols-2 gap-8">
        {project.deployment && (
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaServer className="text-blue-500 mr-2" />
              Deployment
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Client:</span>
                <span className="font-medium">{project.deployment.client}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Server:</span>
                <span className="font-medium">{project.deployment.server}</span>
              </li>
              {project.deployment.database && (
                <li className="flex justify-between">
                  <span className="text-gray-600">Database:</span>
                  <span className="font-medium">{project.deployment.database}</span>
                </li>
              )}
            </ul>
          </div>
        )}

        {project.commitHistory && (
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaHistory className="text-purple-500 mr-2" />
              Development History
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Client Commits:</span>
                <span className="font-medium">{project.commitHistory.client}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Server Commits:</span>
                <span className="font-medium">{project.commitHistory.server}</span>
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-2" />
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLightbulb className="text-blue-500 mr-2" />
              Solutions Implemented
            </h2>
            <ul className="space-y-3">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="mb-8 bg-purple-50 p-6 rounded-lg border border-purple-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Future Enhancements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {project.futurePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-sm flex items-start border border-gray-100 hover:border-emerald-100 transition-colors"
            >
              <div className="bg-emerald-100 p-2 rounded-full mr-3 flex-shrink-0">
                <FaLightbulb className="text-emerald-600" />
              </div>
              <p className="text-gray-600">{plan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Features */}
      {project.securityFeatures && (
        <section className="mb-8 bg-green-50 p-6 rounded-lg border border-green-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaLock className="text-green-500 mr-2" />
            Security Features
          </h2>
          <ul className="space-y-3">
            {project.securityFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Final Back Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2" />
          Back to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
