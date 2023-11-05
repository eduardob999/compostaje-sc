import { SimpleFooter } from "@/widgets/layout";
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
import { featuresData, teamData, contactData, videoData } from "@/data";

export function SignUp() {
  return (
    <>
      <img
        src="/img/background-3.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <section className="h-screen px-10 pt-10 pb-40 overflow-y-auto">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="pt-40 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Compostaje 101<br />
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                ¿Eres nuevo en el mundo del compostaje? En esta sección, 
                te guiamos a través de los conceptos básicos del compostaje
                mediante entretenidos videos.
              </Typography>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
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
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-t from-transparent to-black pointer-events-none" />
      </section>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
