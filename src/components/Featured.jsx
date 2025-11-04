export default function Featured({ title, description, tech, link, hard, easy, lightwork }) {
  return (
    <article className="featured-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="tech-stack"><strong>Technologies:</strong> {tech}</p>
      <img src={link} alt={`${title} screenshot`} className="featured-image" />
      <section className="badge">Hard: {hard}</section>
      <section className="badge">Easy: {easy}</section>
      <section className="badge">Light Work: {lightwork}</section>
    </article>
  );
}
