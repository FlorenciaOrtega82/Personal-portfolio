import { Link } from "react-scroll";

const LinkInicio = ({ seccion }) => {
    return (
        <Link
        to={seccion.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            className='pr-7 font-semibold text-white'
            spy={true}

        >
            {seccion}
        </Link>
    );
};

export default LinkInicio;
