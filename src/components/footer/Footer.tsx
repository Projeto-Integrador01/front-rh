import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="bg-[rgb(0,105,92)] text-white">
      <div className="container mx-auto py-6 flex flex-col items-center">
        <p className="text-xl font-bold text-center">
          RH Sistema | Copyright: {data}
        </p>
        <p className="text-lg text-center mb-4">Acesse nossas redes sociais</p>
        <div className="flex gap-4 justify-center">
          <LinkedinLogo size={48} weight="bold" />
          <InstagramLogo size={48} weight="bold" />
          <FacebookLogo size={48} weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
