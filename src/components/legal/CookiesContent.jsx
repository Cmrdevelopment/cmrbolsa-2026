import { Link } from 'react-router-dom'

export default function CookiesContent() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          1. Qué son las cookies
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Las cookies son pequeños archivos que algunas páginas web guardan
            en el dispositivo del usuario cuando las visita.
          </p>

          <p>
            Pueden utilizarse para permitir el funcionamiento de la web,
            recordar determinadas preferencias, conocer cómo se utiliza una
            página o mostrar contenidos de servicios externos.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          2. Responsable de esta web
        </h2>

        <div className="mt-5 space-y-3 leading-8 text-cmr-muted">
          <div className="rounded-3xl border border-cmr-line bg-cmr-light p-6">
            <p>
              <strong className="text-cmr-ink">Titular:</strong>{' '}
              Carlos Martín Rodríguez
            </p>

            <p>
              <strong className="text-cmr-ink">NIF:</strong>{' '}
              42859056M
            </p>

            <p>
              <strong className="text-cmr-ink">Nombre comercial:</strong>{' '}
              CMRBolsa – PEV
            </p>

            <p>
              <strong className="text-cmr-ink">Correo electrónico:</strong>{' '}
              <a
                href="mailto:rotinlos@gmail.com"
                className="font-semibold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
              >
                rotinlos@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          3. Qué tipos de cookies existen
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Dependiendo de su finalidad, las cookies pueden dividirse en las
            siguientes categorías:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong className="text-cmr-ink">
                Cookies técnicas o necesarias:
              </strong>{' '}
              permiten que la web funcione, que el usuario navegue por ella y
              que se utilicen sus funciones básicas.
            </li>

            <li>
              <strong className="text-cmr-ink">
                Cookies de preferencias:
              </strong>{' '}
              permiten recordar determinadas elecciones realizadas por el
              usuario.
            </li>

            <li>
              <strong className="text-cmr-ink">
                Cookies de análisis:
              </strong>{' '}
              permiten conocer de forma general cómo se utiliza la web, qué
              páginas se visitan y si se producen errores.
            </li>

            <li>
              <strong className="text-cmr-ink">
                Cookies publicitarias:
              </strong>{' '}
              pueden utilizarse para medir campañas o mostrar publicidad
              relacionada con los intereses del usuario.
            </li>

            <li>
              <strong className="text-cmr-ink">
                Cookies de terceros:
              </strong>{' '}
              son gestionadas por servicios externos integrados o enlazados
              desde la web.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          4. Cookies utilizadas actualmente
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            En este momento, cmrbolsa.com no utiliza cookies propias de
            analítica, seguimiento publicitario o elaboración de perfiles.
          </p>

          <p>
            La web podrá utilizar únicamente los elementos técnicos necesarios
            para su funcionamiento, seguridad y navegación.
          </p>

          <div className="overflow-hidden rounded-3xl border border-cmr-line">
            <div className="grid gap-2 bg-cmr-light p-5 sm:grid-cols-3">
              <p className="font-bold text-cmr-ink">
                Tipo
              </p>

              <p className="font-bold text-cmr-ink">
                Finalidad
              </p>

              <p className="font-bold text-cmr-ink">
                Estado
              </p>
            </div>

            <div className="grid gap-2 border-t border-cmr-line bg-white p-5 sm:grid-cols-3">
              <p className="font-semibold text-cmr-ink">
                Técnicas
              </p>

              <p>
                Funcionamiento y seguridad de la web.
              </p>

              <p>
                Activas cuando sean necesarias.
              </p>
            </div>

            <div className="grid gap-2 border-t border-cmr-line bg-white p-5 sm:grid-cols-3">
              <p className="font-semibold text-cmr-ink">
                Analíticas
              </p>

              <p>
                Medición del uso y las conversiones.
              </p>

              <p>
                No instaladas actualmente.
              </p>
            </div>

            <div className="grid gap-2 border-t border-cmr-line bg-white p-5 sm:grid-cols-3">
              <p className="font-semibold text-cmr-ink">
                Publicitarias
              </p>

              <p>
                Medición de campañas y publicidad.
              </p>

              <p>
                No instaladas actualmente.
              </p>
            </div>
          </div>

          <p>
            Esta información se actualizará cuando se incorporen nuevas
            herramientas de medición, publicidad o servicios que utilicen
            cookies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          5. Contenidos y servicios de terceros
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Esta web puede mostrar vídeos, botones, enlaces o contenidos
            procedentes de servicios externos como YouTube, Substack, redes
            sociales u otras plataformas.
          </p>

          <p>
            Estos proveedores pueden utilizar sus propias cookies cuando el
            usuario reproduce un contenido, pulsa un enlace o accede a sus
            plataformas.
          </p>

          <p>
            El uso de esas cookies se rige por las políticas del proveedor
            correspondiente y no por esta Política de cookies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          6. Comunidad, Mentoría y Comudia
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            La Comunidad Trading PEV y la Mentoría PEV se alojan y gestionan
            dentro de Comudia.
          </p>

          <p>
            Cuando el usuario abandona cmrbolsa.com y accede a Comudia para
            registrarse, contratar o utilizar alguno de estos servicios, serán
            aplicables las condiciones y preferencias de cookies de dicha
            plataforma.
          </p>

          <p>
            Comudia dispone de su propia Política de cookies, que podrá
            consultarse antes de utilizar la plataforma.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          7. Consentimiento y configuración
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Las cookies técnicas necesarias podrán utilizarse sin solicitar
            autorización cuando sean imprescindibles para el funcionamiento de
            la web.
          </p>

          <p>
            Si en el futuro se incorporan cookies de análisis, publicidad o
            cualquier otra cookie no necesaria, no se activarán antes de que
            el usuario haya podido aceptarlas o rechazarlas.
          </p>

          <p>
            El usuario podrá aceptar todas las cookies, rechazarlas o configurar
            sus preferencias mediante el panel de cookies que se habilite en la
            web.
          </p>

          <p>
            También podrá cambiar o retirar su consentimiento posteriormente
            desde un enlace permanente de configuración de cookies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          8. Cómo eliminar cookies desde el navegador
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies
            instaladas en su dispositivo desde la configuración del navegador
            que utilice.
          </p>

          <p>
            La forma de hacerlo puede variar según el navegador y el
            dispositivo. Normalmente, estas opciones se encuentran dentro de
            los apartados de privacidad, seguridad o configuración del
            navegador.
          </p>

          <p>
            El bloqueo de determinadas cookies técnicas podría afectar al
            funcionamiento de algunas partes de la web.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          9. Protección de datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Para obtener más información sobre el tratamiento de los datos
            personales puedes consultar la{' '}
            <Link
              to="/privacidad"
              className="font-semibold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
            >
              Política de privacidad
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
          10. Cambios en esta política
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted">
          <p>
            Esta Política de cookies podrá modificarse cuando cambien las
            herramientas utilizadas, se incorporen nuevos servicios o sea
            necesario adaptarla a cambios legales o técnicos.
          </p>

          <p>
            La versión publicada en cmrbolsa.com será la que se encuentre
            vigente en cada momento.
          </p>
        </div>
      </section>

      <section className="border-t border-cmr-line pt-8">
        <p className="text-sm leading-7 text-cmr-muted">
          Última actualización: 21 de julio de 2026.
        </p>
      </section>
    </div>
  )
}