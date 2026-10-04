
'use client'

import { useEffect, useState } from 'react'
import { Camera, ChevronDown, Clock3, ExternalLink, Gift, MapPin, Music, Pause } from 'lucide-react'

const eventDate = new Date('2027-04-10T18:00:00-03:00').getTime()
const mapsUrl = 'https://maps.app.goo.gl/U66Dka9DM7FonY886'
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfnkAGaA69FJmyjZIOa3X2dcOU2iL9jbWfX7Oe23G4MqQInLg/viewform?usp=header'
const albumUrl = 'https://drive.google.com/drive/folders/1_1LtrXGdrJ2qOu9McDdUHu-2LifeTjqB?usp=drive_link'

function getTimeLeft() {
  const difference = Math.max(eventDate - Date.now(), 0)
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="countdown" aria-label="Cuenta regresiva hasta el 10 de abril de 2027">
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 250)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="invitation-shell">
      <section className={`hero-card ${visible ? 'is-visible' : ''}`} aria-labelledby="couple-names">
        <div className="paper-grain" aria-hidden="true" />
        <button className="music-button" type="button" aria-label={playing ? 'Pausar música' : 'Reproducir música'} onClick={() => setPlaying((current) => !current)}>
          {playing ? <Pause size={16} strokeWidth={1.5} /> : <Music size={17} strokeWidth={1.5} />}
        </button>
        <div className="invitation-content">
          <p className="eyebrow" style={{ fontSize: '18px' }}>Una historia de amor</p>
          <h1 id="couple-names" className="names"><span style={{ color: 'rgb(111, 127, 106)', fontFamily: 'inherit' }}>Alan</span><span className="ampersand" style={{ color: 'rgb(217, 163, 160)' }}>&amp;</span><span style={{ color: 'rgb(111, 127, 106)' }}>Mel</span></h1>
          <p className="announcement" style={{ color: 'rgb(111, 127, 106)' }}>¡NOS CASAMOS!</p>
          <div className="divider" style={{ color: 'rgb(217, 163, 160)' }} aria-hidden="true"><span>✦</span></div>
          <p className="date-label">10 · 04 · 2027</p>
          <p className="invitation-copy">Queremos compartir con vos<br />el comienzo de nuestra historia.</p>
          <button className="scroll-cue" type="button" onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}><span style={{ fontWeight: 700 }}>Conocé los detalles</span><ChevronDown size={18} strokeWidth={1.2} style={{ fontWeight: 700 }} /></button>
        </div>
      </section>

      <section id="details" className="details-section" aria-label="Detalles de la celebración">
        <div className="section-inner">
          <p className="eyebrow">Reservá la fecha</p>
          <h2>El gran día se acerca</h2>
          <Countdown />
          <div className="event-card" style={{ backgroundColor: 'rgba(175, 195, 177, 1)' }}>
            <p className="event-date">Sábado 10 de abril · 18:00 hs</p>
            <h3>Quinta La Mona</h3>
            <p>Teniente Origone 5312<br />Trujui</p>
            <a className="gold-button" style={{ backgroundColor: 'rgb(111, 127, 106)', borderRadius: '10px' }} href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} />Cómo llegar<ExternalLink size={13} /></a>
          </div>

          <div className="photo-grid" aria-label="Fotos de Alan y Mel">
            <img src="/alan-mel-photo-1.png" alt="Alan y Mel compartiendo un momento" />
            <img src="/alan-mel-photo-2.png" alt="Alan y Mel juntos al aire libre" />
          </div>

          <div className="info-grid">
            <article className="info-card">
              <Clock3 className="card-icon" size={22} strokeWidth={1.2} />
              <p className="eyebrow">Confirmación de asistencia</p>
              <h3>Esperamos que puedas acompañarnos</h3>
              <p>Esperamos que puedas acompañarnos en este momento tan especial. Te pedimos que completes el siguiente formulario antes del 28/02/2027. Si fuiste invitado con un acompañante, deben completar un formulario por persona.</p>
              <a className="outline-button" style={{ borderRadius: '20px', backgroundColor: 'rgb(111, 127, 106)' }} href={formUrl} target="_blank" rel="noreferrer">Confirmar asistencia <ExternalLink size={13} /></a>
            </article>
            <article className="info-card">
              <Camera className="card-icon" size={22} strokeWidth={1.2} />
              <p className="eyebrow">Álbum compartido</p>
              <h3>Revivamos cada momento</h3>
              <p>Revivamos cada momento de este día a través de tus ojos. Si podés subirlas a este álbum para que todos podamos disfrutarlas.</p>
              <a className="outline-button" href={albumUrl} target="_blank" rel="noreferrer">Compartir fotos <ExternalLink size={13} /></a>
            </article>
          </div>

          <article className="gift-card">
            <Gift className="card-icon" size={22} strokeWidth={1.2} />
            <p className="eyebrow">Un detalle para nosotros</p>
            <h3>¿Qué me pongo?</h3>
            <p>El dress code es elegante.</p>
            <h3>Si querés hacernos un regalo</h3>
            <p>El mejor regalo es tu presencia! Pero si deseas hacernos un regalo, te brindamos nuestros datos bancarios:</p>
            <div className="bank-details"><span>Nombre del titular: Paquito Perez</span><span>CBU: 9938485002</span><span>Alias: Paquito.PEREZ</span><span>Banco Galicia</span></div>
          </article>

          <div className="detail-rule" aria-hidden="true">✦</div>
          <p className="signature">Los esperamos.<br /><span>Alan &amp; Mel</span></p>
        </div>
      </section>
      <footer className="site-footer">Alan &amp; Mel · 10 de abril de 2027</footer>
    </main>
  )
}