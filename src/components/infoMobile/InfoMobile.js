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
      <div className=" bg-black h-full">
        <div
          className="flex justify-end"
          onClick={() => {
            if (showInformation) setShowInformation(!showInformation);
          }}
        >
          <button className={`mt-4 mr-4 w-12`}>
            <img src={CloseButton} alt="" className="filter invert" />
          </button>
        </div>

        <div className=" mt-4 m-4">
          <h1 className="w-12 bg-white text-center rounded-md ml-3">INFO</h1>
          <div className="text-left text-white ">
            <h1
              className={`custom-font-shadow mt-4  ml-2 mb-10 ${
                isTablet < 767 ? "text-4xl" : "text-5xl"
              }`}
            >
              Instrucciones
            </h1>
            <div className="pb-20">
              {infoContainer.map((element, index) => (
                <div className="text-white m-3">
                  <h1
                    className={`custom-font mb-4 ${
                      isTablet < 767 ? "text-xl" : "text-3xl"
                    }`}
                  >
                    {element.title}
                  </h1>
                  <h2
                    className={`${
                      isTablet < 767 ? "text-base pb-4" : "text-xl pb-4"
                    }`}
                  >
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
