import '../styles/footer.css'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer id='ubicacion'>
        <div className='mapa'>
          <div className='container-mapa'>
            <div className='item-mapa'>
              <h2>Ubicación</h2>
              <h3>
                Av. Insurgentes Sur 1188, Tlacoquemecatl del Valle, Benito
                Juárez, 03200 Ciudad de México, CDMX
              </h3>
              <a
                href='https://api.whatsapp.com/send?phone=525652700762'
                target='_blank'
                className='btn-rosa'
                rel='noopener noreferrer'
              >
                Contacto
              </a>
            </div>
            <div className='item-mapa'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8053769241415!2d-99.17997599030991!3d19.377578042362373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9b678aabc3%3A0xe0f997387f0db84f!2sAv.%20Insurgentes%20Sur%201188%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003200%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1699654972168!5m2!1ses-419!2smx'
                width='600'
                height='450'
                title='Mapa de Dental Sonrix'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
        <section className='footer-footer'>
          <article>
            <div className='item-footer-footer'>
              <p>© {year} Todos los derechos reservados Dental Sonrix.</p>
              <p>Desarrollado por Agencia de Marketing Dentarios © {year}</p>
            </div>
            <div className='item-footer-footer'>
              <a
                href='tel:5652700762'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa-solid fa-phone' /> 5652700762
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=525652700762'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa-brands fa-square-whatsapp' /> 5652700762
              </a>
            </div>
          </article>
        </section>
      </footer>
    </>
  )
}

export default Footer
