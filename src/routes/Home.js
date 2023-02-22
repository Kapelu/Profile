import Nav from '../components/Nav'
import './home.css'
import fotoPerfil from '../img/kapelu.png';

export default function Home() {
	return (
		<>
			<Nav />
			<div className='container-home'>
				<div className='card'>
					<div className='foto-perfil'>
					<img src={fotoPerfil} alt="Kapelü" className='foto'/>
					</div>
					<br />
					<div className='nombre'>
						<h1>Daniel Calderon</h1>
					</div>
					<div className='profesion'>
						<h3>Full stack developer</h3>
					</div>
					<div className='redes-sociales'>
						<div className='linkedin'>
						<a href='https://www.linkedin.com/in/daniel-calderon-4a4854215/' target='_blank' rel='noreferrer' className='logo'>
                    <svg viewBox='0 0 24 24' fill='none'>
                      <title>Linkedin</title>
                      <path d='M7.2 20.8h-4v-12h4v12zM5.202 7.2a2 2 0 11-.004-4 2 2 0 01.004 4zM21.6 20.8h-3.845v-5.84c0-1.393-.027-3.183-2-3.183-2.002 0-2.31 1.516-2.31 3.082V20.8H9.6V8.791h3.69v1.64h.054c.512-.944 1.768-1.939 3.64-1.939 3.896 0 4.616 2.488 4.616 5.722V20.8z'>
                      </path>
                    </svg>
                  </a>
						</div>
						<div className='github'>
							<a href='https://github.com/Kapelu'	target='_blank' rel='noreferrer' className='logo'>
								<svg role='img'	viewBox='0 0 24 24'	xmlns='http://www.w3.org/2000/svg'>
									<title>GitHub</title>
									<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'>
									</path>
								</svg>
							</a>
						</div>
						<div className='email'>
						<a href='mailto:ddaniel_calderon@hotmail.com?Subject=IMPORTANTE!!!%20Estamos%20interesados%20en%20tú%20perfil' target='_blank' rel='noreferrer' className='logo'>
                    <svg viewBox='0 0 48 48' fill='none'>
                      <title>Email</title>
                      <path d='M46.652 1.348L45.432.084 1.302 14.12l-.466 3.484L14.33 28.31 40.746 7.254 19.69 33.67l10.706 13.494 3.484-.466 14.036-44.13-1.264-1.22z'>
                      </path>
                    </svg>
                  </a>
						</div>
						<div className='whatsapp'>
						<a href='https://api.whatsapp.com/send?phone=%2B542615370075&text=Hola%20Daniel%20!!!%20Estamos%20interesados%20en%20tú%20perfil.%20Desearías%20coordinar%20una%20entrevista?' target='_blank' rel='noreferrer' className='logo'>
                    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <title>WhatsApp</title>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'>
                      </path>
                    </svg>
                  </a>
						</div>
					</div>
					<br />
					<br />
					<div className='frase-pele'>
						<p className='frase'>
							El éxito no es un accidente. Es trabajo duro,
							perseverancia, aprendizaje, estudio, sacrificio, y
							sobre todo, amor por lo que estás haciendo o
							aprendiendo a hacer.
						</p>
						<p className='pele'>Pelé</p>
					</div>
				</div>
			</div>
		</>
	)
}