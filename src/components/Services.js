import { services } from "../data"
import Title from "./Title"

function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='our' spanTitle='services' />
      <div className='section-center services-center'>
        {/* Loop through the services and display each */}
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className='service'>
              <span className='service-icon'>
                <i className={`fas ${icon} fa-fw`}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
