import { socialLinks } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import PageLinksList from "./PageLinksList"

function Footer() {
  library.add(fab) // Add fab to the library
  return (
    <footer className='section footer'>
      <PageLinksList classPrefix='footer' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                className='footer-icon'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={["fab", icon]} />
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy;<span id='date'>{new Date().getFullYear()}</span>{" "}
        Backroads travel tours company all rights reserved
      </p>
    </footer>
  )
}
export default Footer
