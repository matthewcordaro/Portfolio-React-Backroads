function Title({ title, spanTitle }) {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{spanTitle}</span>
      </h2>
    </div>
  )
}
export default Title