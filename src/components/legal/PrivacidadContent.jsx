import { Link } from 'react-router-dom'

export default function PrivacidadContent() {
  return (
    <div className="space-y-10 text-cmr-ink transition-colors duration-300 dark:text-white">
      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          1. Responsable del tratamiento
        </h2>

        <div className="mt-5 space-y-3 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            El responsable del tratamiento de los datos personales recogidos
            a través de esta web y de los servicios de CMRBolsa es:
          </p>

          <div className="rounded-3xl border border-cmr-line bg-cmr-light p-6 transition-colors duration-300 dark:border-white/[0.14] dark:bg-cmr-dark2">
            <p>
              <strong className="text-cmr-ink dark:text-white">
                Responsable:
              </strong>{' '}
              Carlos Martín Rodríguez
            </p>

            <p>
              <strong className="text-cmr-ink dark:text-white">
                NIF:
              </strong>{' '}
              42859056M
            </p>

            <p>
              <strong className="text-cmr-ink dark:text-white">
                Nombre comercial:
              </strong>{' '}
              CMRBolsa – PEV
            </p>

            <p>
              <strong className="text-cmr-ink dark:text-white">
                Domicilio:
              </strong>{' '}
              Calle General Vives, 23-25, 1.º, oficina 2, 35007 Las Palmas
              de Gran Canaria, Las Palmas, España
            </p>

            <p>
              <strong className="text-cmr-ink dark:text-white">
                Correo electrónico:
              </strong>{' '}

              <a
                href="mailto:rotinlos@gmail.com"
                className="font-semibold text-cmr-green underline decoration-cmr-green/30 underline-offset-4 dark:text-[#79CFC4]"
              >
                rotinlos@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          2. Qué datos podemos recoger
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Dependiendo de la forma en la que contactes con CMRBolsa o de los
            servicios que utilices, podremos tratar los siguientes datos:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              Datos identificativos, como nombre y apellidos.
            </li>

            <li>
              Datos de contacto, como correo electrónico y teléfono.
            </li>

            <li>
              Datos incluidos en formularios, solicitudes o mensajes enviados
              a CMRBolsa.
            </li>

            <li>
              Información sobre tu experiencia, objetivos y disponibilidad
              cuando solicites una valoración para la Mentoría PEV.
            </li>

            <li>
              Datos necesarios para gestionar el alta, la contratación, los
              pagos, las facturas y el acceso a la Comunidad o a la Mentoría.
            </li>

            <li>
              Información relacionada con tu participación en los cursos,
              reuniones, chats, sala escrita y demás espacios formativos.
            </li>

            <li>
              Datos técnicos básicos relacionados con el uso de la web, siempre
              de acuerdo con la Política de cookies y las preferencias que
              hayas seleccionado.
            </li>
          </ul>

          <p>
            No solicitaremos datos personales que no sean necesarios para
            atender tu consulta, valorar tu solicitud o prestar el servicio
            contratado.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          3. Para qué utilizamos tus datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Los datos personales podrán utilizarse para las siguientes
            finalidades:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              Contestar preguntas, consultas o solicitudes de información.
            </li>

            <li>
              Revisar las solicitudes de acceso a la Mentoría PEV y valorar si
              el servicio puede encajar con la persona interesada.
            </li>

            <li>
              Gestionar el registro, la contratación y el acceso a la Comunidad
              Trading PEV o a la Mentoría PEV.
            </li>

            <li>
              Prestar la formación, resolver dudas y facilitar el acceso a
              cursos, reuniones, chats, sala escrita y demás contenidos.
            </li>

            <li>
              Gestionar pagos, facturas, cancelaciones, devoluciones o
              incidencias relacionadas con los servicios contratados.
            </li>

            <li>
              Enviar comunicaciones necesarias relacionadas con el servicio,
              como confirmaciones, avisos de acceso, recordatorios, cambios o
              incidencias.
            </li>

            <li>
              Enviar información comercial sobre CMRBolsa cuando exista una
              autorización previa o cuando la normativa permita hacerlo.
            </li>

            <li>
              Cumplir las obligaciones legales, fiscales, contables y
              administrativas aplicables.
            </li>

            <li>
              Proteger la seguridad de la web, evitar usos fraudulentos y
              resolver problemas técnicos.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          4. Base que permite tratar los datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            El tratamiento de los datos se realizará, según cada caso, sobre
            alguna de las siguientes bases:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong className="text-cmr-ink dark:text-white">
                Aplicación de medidas precontractuales:
              </strong>{' '}
              cuando solicitas información o envías una solicitud para la
              Mentoría.
            </li>

            <li>
              <strong className="text-cmr-ink dark:text-white">
                Ejecución de un contrato:
              </strong>{' '}
              cuando contratas y utilizas la Comunidad, la Mentoría u otro
              servicio de CMRBolsa.
            </li>

            <li>
              <strong className="text-cmr-ink dark:text-white">
                Consentimiento:
              </strong>{' '}
              cuando aceptas recibir determinadas comunicaciones, completas un
              formulario voluntario o autorizas cookies no necesarias.
            </li>

            <li>
              <strong className="text-cmr-ink dark:text-white">
                Cumplimiento de obligaciones legales:
              </strong>{' '}
              para atender obligaciones fiscales, contables, administrativas o
              requerimientos de las autoridades.
            </li>

            <li>
              <strong className="text-cmr-ink dark:text-white">
                Interés legítimo:
              </strong>{' '}
              para garantizar la seguridad, prevenir fraudes, defender
              reclamaciones y mejorar el funcionamiento de los servicios,
              siempre respetando los derechos del usuario.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          5. Comunidad, Mentoría y Comudia
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            La Comunidad Trading PEV y la Mentoría PEV se alojan y gestionan a
            través de Comudia.com. Por este motivo, determinados datos necesarios
            para el registro, contratación, pago, acceso y participación en los
            servicios se tratarán mediante dicha plataforma.
          </p>

          <p>
            Entre estos datos pueden encontrarse el nombre, correo electrónico,
            información fiscal, producto contratado, estado del acceso,
            facturas, pagos, participación en la comunidad y progreso en los
            contenidos.
          </p>

          <p>
            Comudia es una plataforma gestionada por el mismo titular indicado
            en esta Política de privacidad, aunque dispone de sus propias
            condiciones y políticas aplicables al uso general de la plataforma.
          </p>

          <p>
            Antes de completar el registro o la contratación dentro de Comudia,
            el usuario podrá consultar y aceptar la documentación legal
            correspondiente.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          6. Pagos y facturación
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Cuando se contrata un servicio de pago, podrán tratarse los datos
            necesarios para gestionar el cobro, emitir la factura, atender una
            cancelación o tramitar una devolución.
          </p>

          <p>
            Los pagos pueden gestionarse mediante proveedores especializados,
            como Stripe. CMRBolsa no tiene acceso a los datos completos de la
            tarjeta bancaria, que son tratados directamente por el proveedor de
            pago de acuerdo con sus propias medidas de seguridad y políticas.
          </p>

          <p>
            Los datos fiscales y de facturación se conservarán durante los
            plazos exigidos por la normativa aplicable.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          7. Con quién pueden compartirse los datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Los datos personales no se venderán a terceros.
          </p>

          <p>
            Para poder prestar los servicios, algunos proveedores pueden tener
            acceso limitado a determinados datos, siempre dentro de sus
            funciones y bajo las garantías correspondientes. Entre ellos pueden
            encontrarse:
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              Proveedores de alojamiento web e infraestructura tecnológica.
            </li>

            <li>
              Servicios de correo electrónico y comunicaciones.
            </li>

            <li>
              Proveedores de pago y facturación.
            </li>

            <li>
              Herramientas de almacenamiento de imágenes, vídeos o archivos.
            </li>

            <li>
              Servicios de analítica, únicamente cuando hayan sido aceptados
              por el usuario.
            </li>

            <li>
              Asesorías, profesionales o proveedores necesarios para cumplir
              obligaciones legales, fiscales o administrativas.
            </li>
          </ul>

          <p>
            También podrán comunicarse datos a administraciones públicas,
            juzgados o autoridades cuando exista una obligación legal.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          8. Servicios y enlaces externos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            CMRBolsa puede utilizar o enlazar servicios como YouTube, Substack,
            redes sociales, herramientas de videoconferencia, proveedores de
            almacenamiento u otras plataformas necesarias para ofrecer los
            contenidos.
          </p>

          <p>
            Cuando el usuario accede voluntariamente a una plataforma externa,
            el tratamiento de sus datos también estará sujeto a las condiciones
            y políticas de privacidad de ese proveedor.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          9. Durante cuánto tiempo conservamos los datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Los datos se conservarán durante el tiempo necesario para atender
            la consulta, revisar una solicitud o prestar el servicio contratado.
          </p>

          <p>
            Una vez finalizada la relación, podrán mantenerse bloqueados durante
            los plazos necesarios para cumplir obligaciones legales o atender
            posibles responsabilidades.
          </p>

          <p>
            Los datos utilizados para comunicaciones comerciales se conservarán
            hasta que el usuario retire su consentimiento o solicite dejar de
            recibirlas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          10. Derechos de las personas
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Puedes solicitar el acceso a tus datos personales, su rectificación,
            supresión, limitación, portabilidad u oposición al tratamiento.
            También puedes retirar un consentimiento previamente concedido.
          </p>

          <p>
            Para ejercer estos derechos puedes escribir a{' '}

            <a
              href="mailto:rotinlos@gmail.com"
              className="font-semibold text-cmr-green underline decoration-cmr-green/30 underline-offset-4 dark:text-[#79CFC4]"
            >
              rotinlos@gmail.com
            </a>
            , indicando qué derecho quieres ejercer y aportando la información
            necesaria para comprobar tu identidad.
          </p>

          <p>
            Si consideras que tus derechos no han sido atendidos correctamente,
            puedes presentar una reclamación ante la Agencia Española de
            Protección de Datos.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          11. Datos de menores
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Los servicios de CMRBolsa relacionados con trading y mercados
            financieros no están dirigidos a menores de edad.
          </p>

          <p>
            No se deben facilitar datos personales ni contratar los servicios
            si no se tiene la edad legal necesaria para hacerlo.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          12. Seguridad de los datos
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Se aplican medidas razonables de seguridad para proteger los datos
            personales frente a accesos no autorizados, pérdidas, alteraciones
            o usos indebidos.
          </p>

          <p>
            Sin embargo, ningún sistema conectado a Internet puede garantizar
            una seguridad absoluta. El usuario también debe proteger sus
            contraseñas y no compartir sus credenciales de acceso.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          13. Cookies
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            La información sobre las cookies utilizadas en esta web y la forma
            de aceptar, rechazar o modificar las preferencias puede consultarse
            en la{' '}

            <Link
              to="/cookies"
              className="font-semibold text-cmr-green underline decoration-cmr-green/30 underline-offset-4 dark:text-[#79CFC4]"
            >
              Política de cookies
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink dark:text-white">
          14. Cambios en esta política
        </h2>

        <div className="mt-5 space-y-4 leading-8 text-cmr-muted dark:text-white/[0.68]">
          <p>
            Esta Política de privacidad podrá actualizarse cuando cambien los
            servicios, las herramientas utilizadas o la normativa aplicable.
          </p>

          <p>
            La versión publicada en cmrbolsa.com será la que se encuentre
            vigente en cada momento.
          </p>
        </div>
      </section>

      <section className="border-t border-cmr-line pt-8 dark:border-white/[0.14]">
        <p className="text-sm leading-7 text-cmr-muted dark:text-white/[0.52]">
          Última actualización: 21 de julio de 2026.
        </p>
      </section>
    </div>
  )
}