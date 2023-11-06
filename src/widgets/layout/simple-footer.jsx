import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function SimpleFooter({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, Servicio comunitario{" - "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500"
          >
            Universidad Central de Venezuela
          </a>{" "}
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target='blank'
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

SimpleFooter.defaultProps = {
  brandName: "Eduardo Bogado",
  brandLink: "https://github.com/eduardob999",
  routes: [
    { name: "Eduardo Bogado", path: "https://github.com/eduardob999" },
    { name: "LEAIZET", path: "https://leaizetucv.wordpress.com" },
    { name: "UCV", path: "https://ucv.ve" },
    { name: "Facultad de Ciencias", path: "http://www.ciens.ucv.ve/" },
  ],
};

SimpleFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: "",
  routes: PropTypes.arrayOf(PropTypes.object),
};

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;
