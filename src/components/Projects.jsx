
export default function ProjectsList({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <img src={link} alt="an image" className="project-image" />
      <p className="description">{description}</p>
      <p className="tech-stack"><strong>Technologies:</strong> {tech}</p>
    </article>
  );
}
