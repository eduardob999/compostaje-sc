import { SimpleFooter } from "@/widgets/layout";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

export function SignUp() {
  const ref = useRef(null)
  const ref0 = useRef(null)

  const isInView = useInView(ref, { once: true })
  const isInView0 = useInView(ref0, { once: true })

  const mainControls = useAnimation()
  const mainControls0 = useAnimation()

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

  return (
    <>
      <img
        src="https://i.imgur.com/whkGJpw.jpeg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <section className="h-screen px-10 pt-10 pb-40 overflow-y-auto">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <motion.div className="pt-32 ml-auto mr-auto w-full px-4 text-center lg:w-8/12"
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100 },
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
                Compostaje 101<br />
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                ¿Eres nuevo en el mundo del compostaje? En esta sección,
                te guiamos a través de los conceptos básicos del compostaje
                mediante entretenidos videos.
              </Typography>
            </motion.div>
          </div>
        </div>
        <div className="container pb-12 mx-auto">
          <motion.div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4"
            ref={ref0}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls0}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {teamData.map(({ img, name, position, socials, url }) => (
              <Link
                to={url}
              >
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                />
              </Link>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-36 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-36 bg-black" />
        <div className="absolute top-0 left-0 w-full h-24 bg-black" />
        <div className="absolute top-24 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black pointer-events-none" />
      </section>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
