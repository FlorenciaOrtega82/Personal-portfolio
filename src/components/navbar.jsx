import LinkInicio from "./LinkInicio";

const Navbar = () => {
    return (
        <div className="flex justify-between px-8 py-5 bg-background ">
            <div >
                <h3 className="text-white">Portfolio</h3>
            </div>
            <div>
                    <LinkInicio seccion={'Home'}/>
                    <LinkInicio seccion={'About me'}/>
                    <LinkInicio seccion={'Proyects'}/>
                    <LinkInicio seccion={'Skills'}/>
                    <LinkInicio seccion={'Contact'}/>
            </div>
        </div>
    );
};

export default Navbar;
