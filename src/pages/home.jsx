import React from "react";
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

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://i.pinimg.com/564x/c4/f3/cc/c4f3ccb9af4158f2bddeb855c6d17708.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ¡Bienvenidos a nuestro mundo verde!
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                En nuestro sitio web, te sumergirás en el fascinante universo del compostaje. 
                Descubre cómo transformar tus desechos orgánicos en oro negro para tu jardín. 
                Explora consejos prácticos, guías paso a paso y consejos de expertos para convertir 
                tus residuos en nutrientes naturales para la tierra.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
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
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
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
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Nuestro equipo">
            Estudiantes, profesores y colaboradores de la Universidad Central de Venezuela.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form
            className="mx-auto mt-12 max-w-3xl text-center"
            action="https://formspree.io/f/mvojdqzd"
            method="POST"
          >
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" name="name" />
              <Input variant="standard" size="lg" label="Email Address" name="_replyto" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} name="message" />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
