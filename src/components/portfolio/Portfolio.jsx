import IMG1 from '../../assets/portfolio/placeholder.png';
import './portfolio.scss'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Title 2',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Title 3',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  },
  {
    id: 4,
    image: IMG1,
    title: 'Title 4',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  },
  {
    id: 5,
    image: IMG1,
    title: 'Title 5',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  },
  {
    id: 6,
    image: IMG1,
    title: 'Title 6',
    github: 'https://github.com',
    demo: 'https://davidbaptista.github.io',
  }
]

const Portfolio = () => {
  return (
	  <section id='portfolio'>
      <h2>Work</h2>

      <div className='container portfolio-container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio-item-img'>
                  <img src={image} alt={title} />
                </div>
                <h3 className='text-center'>{title}</h3>
                <div className='portfolio-item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio