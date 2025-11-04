import featured from '../libs/featured';
import Featured from './Featured';

export default function FeaturedList() {
  return (
    <section className="featured" id="featured">
      <h2>Featured Projects</h2>
      <div className="featured-grid">
        {featured.map((item, index) => (
          <Featured
            key={index}
            title={item.title}
            description={item.description}
            tech={item.tech}
            link={item.link}
            hard={item.hard}
            easy={item.easy}
            lightwork={item.lightwork}
          />
        ))}
      </div>
    </section>
  );
}
