import Title from "./Title"
import { tours } from "../data"

function Tours() {
  return (
    <section className='section' id='tours'>
      <Title title='featured' spanTitle='tours' />

      <div className='section-center featured-center'>
        {/* load the tours data from the data.js file */}
        {tours.map((tour) => {
          const {
            id,
            name,
            image,
            info,
            date,
            location,
            duration,
            startingPrice,
          } = tour
          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <h4>{name}</h4>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${startingPrice}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
