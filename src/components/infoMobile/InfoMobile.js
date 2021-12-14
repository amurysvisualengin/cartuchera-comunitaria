import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";
const InfoMobile = () => {
  const { showInformation, setShowInformation, isTablet } =
    useContext(CardListContext);
  const infoContainer = [
    {
      title: "1. Reúne a tu comunidad",
      description:
        "Sean dos, veinte o doscientas personas, ¡no hay problema! Lo importante es que cada unx tenga el deseo de trabajar en conjunto por una mejor comunidad.",
    },
    {
      title: "2. Selecciona uno de los cinco kits",
      description:
        "Si tu comunidad ya tiene una meta en mente, pueden irdirectamente al kit que mejor se ajuste a ella. Y si no sabes por dónde empezar, ¡no hay problema! Te recomendamos seguir la secuencia sugerida de kits, comenzando con el de Mapeo Comunitario.",
    },
    {
      title: "3. Utiliza una (o varias) de las herramientas",
      description:
        "Las herramientas de nuestra cartuchera están diseñadas para que puedas usarlas tanto en secuencia como por separado. Consideren sus prioridades comunitarias, o simplemente comiencen con la primera. ¡Ustedes deciden!",
    },
    {
      title: "4. ¡Cuéntanos cómo te va!",
      description:
        "Accede a nuestro blog comunitario y comparte tus preguntas, comentarios y experiencias utilizando estas herramientas.",
    },
    {
      title: "5. ¡Repite!",
      description: " Te quedan cuatro kits por descubrir. ¡Zúmbate!",
    },
  ];
  return (
    <div className={`${!showInformation ? "hidden" : "visible"}`}>
      <div className=" bg-black min-h-screen lg:h-screen">
        <div
          className="flex justify-end"
          onClick={() => {
            if (showInformation) setShowInformation(!showInformation);
          }}
        >
          <button className={`mt-4 mr-4 lg:mt-6 lg:mr-6 `}>
            <img src={CloseButton} alt="" className="filter invert" />
          </button>
        </div>

        <div className="w-full mt-4 p-4 lg:px-96 ">
          <h1 className="w-12 inter-font text-xs p-2 bg-white font-bold text-center rounded-md mb-6">
            INFO
          </h1>
          <div className="text-left text-white ">
            <h1 className={`custom-font-shadow text-4.5xl lg:text-5.5xl`}>
              Instrucciones
            </h1>
            <div className="pb-20">
              {infoContainer.map((element, index) => (
                <div className="text-whiteº my-3 lg:mt-6">
                  <h1 className="custom-font text-base lg:text-xlLg leading-6">
                    {element.title}
                  </h1>
                  <h2 className="inter-font text-base mt-4">
                    {element.description}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMobile;
