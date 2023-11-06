import React, { useEffect, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

export function Home() {
  const ref = useRef(null)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const isInView = useInView(ref, { once: true })
  const isInView0 = useInView(ref0, { once: true })
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true })

  const mainControls = useAnimation()
  const mainControls0 = useAnimation()
  const mainControls1 = useAnimation()
  const mainControls2 = useAnimation()
  const mainControls3 = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  useEffect(() => {
    if (isInView0) {
      mainControls0.start("visible")
    }
  }, [isInView0])

  useEffect(() => {
    if (isInView1) {
      mainControls1.start("visible")
    }
  }, [isInView1])

  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visible")
    }
  }, [isInView2])

  useEffect(() => {
    if (isInView3) {
      mainControls3.start("visible")
    }
  }, [isInView3])

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://i.pinimg.com/564x/c4/f3/cc/c4f3ccb9af4158f2bddeb855c6d17708.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <motion.div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12"
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ¡Bienvenidos a nuestro <br />
                mundo verde!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                En nuestro sitio web, te sumergirás en el fascinante universo del compostaje.
                Descubre cómo transformar tus desechos orgánicos en oro negro para tu jardín.
                Explora consejos prácticos, guías paso a paso y consejos de expertos para convertir
                tus residuos en nutrientes naturales para la tierra.
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            ref={ref0}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </motion.div>
          <div className="mt-32 flex flex-wrap items-center">
            <motion.div className="mx-auto -mt-8 w-full px-4 md:w-5/12"
              ref={ref1}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              animate={mainControls1}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                ¡Únete al equipo, nos encantaría trabajar contigo!
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                ¿Eres un amante de la naturaleza y un defensor de un planeta más verde?
                ¿Te apasiona la idea de reducir los residuos y enriquecer la tierra de manera
                sostenible? ¡Entonces, tenemos una oportunidad para ti!
                <br />
                <br />
                En nuestro equipo de compostaje, no solo estamos creando compost,
                estamos cultivando un futuro más saludable y sostenible para todos.
                Si te unes a nosotros, formarás parte de un movimiento dedicado a convertir
                desechos orgánicos en recursos valiosos. Imagina contribuir a un planeta más
                limpio, a jardines más exuberantes y a comunidades más fuertes.
              </Typography>
              <Button variant="outlined">Leer más</Button>
            </motion.div>
            <motion.div
              className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"
              ref={ref3}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              animate={mainControls3}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-auto">
                  <img
                    alt="Card Image"
                    src="/img/pic-1.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Servicio Comunitario
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    ¿Estás buscando un proyecto para hacer tu servicio comunitario?
                    Comunícate con nosotros.
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <motion.div
          className="container mx-auto"
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls2}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle heading="¿Quieres trabajar con nosotros?">
            Completa este formulario y te responderemos en 24 horas.
          </PageTitle>
          <form
            className="mx-auto mt-12 max-w-3xl text-center"
            action="https://formspree.io/f/mvojdqzd"
            method="POST"
          >
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Nombre Completo" name="name" />
              <Input variant="standard" size="lg" label="Dirección de Correo Electrónico" name="_replyto" />
            </div>
            <Textarea variant="standard" size="lg" label="Mensaje" rows={8} name="message" />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Enviar Mensaje
            </Button>
          </form>
        </motion.div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
