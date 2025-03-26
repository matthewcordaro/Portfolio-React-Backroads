import { pageLinks } from "../data"
function PageLinksList({ classPrefix }) {
  const ulClassName = classPrefix + '-links'
  const liClassName = classPrefix + '-link'
  console.log(liClassName, ulClassName)
  return (
    <ul className={ulClassName} id={ulClassName}>      
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={liClassName}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinksList
