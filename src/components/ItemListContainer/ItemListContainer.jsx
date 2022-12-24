
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { id } = useParams();
  return <ItemList id={id} />;
};

export default ItemListContainer;
    
    
    /*         <div className="d-flex justify-content-around bd-highlight mb-2 row row-cols-3">
            {cards.map(({ titulo, descripcion, img, id, cantidad, category, precio, marca }, index) => (
              <Card
                key={index}
                titulo={titulo}
                descripcion={descripcion}
                img={img}
                id={id}
                cantidad={cantidad}
                category={category}
                precio={precio}
                marca={marca}
              />))
            }
          </div> */
    /* 
    const cards = [
        {
            id: 1 ,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwaee13afb/products/NI_DQ5014-068/NI_DQ5014-068-1.JPG",
            titulo: "Zapatillas Nike Air More Uptempo 96",
            descripcion: "Las Nike Air More Uptempo te darán un look legendario. Desde el gran diseño A-I-R a cada lado, inspiradas en los grafitis de los 90; hasta la unidad Air en la planta del pie, que proporcionan amortiguación en cada pisada. Estas zapatillas se abrieron camino en las canchas de baloncesto de los años 90 para convertirse en parte de la historia de Nike. Confeccionas en piel sintética para una mayor durabilidad y sujeción. Además, la malla suave que añade ligereza.",
            category: "Hombre", 
            marca: "Nike",
            precio:75.399,
            cantidad: 1,
        },

        {
            id: 2,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd3ca6ba6/products/AD_FY7756/AD_FY7756-1.JPG",
            titulo: "Zapatillas adidas Forum Low",
            descripcion: " Con un estilo urbano y para recorrer diferentes lugares, las zapatillas Adidas Forum Low están confeccionadas en cuero sintético y suela de goma para un mayor agarre sobre la superficie. Su ajuste con cordones y velcro le dan un toque retro, inspirado en 1984 cuando las Forum salieron por primera vez a conquistar canchas de básquet y el mundo del hip-hop. Usalas todo el día, las calles de tu ciudad las estaban esperando.",
            category: "Hombre",
            marca:"Adidas",
            precio: 51.599,
            cantidad: 1
        },

        {
            id:3,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw557863e1/products/NI_DD1068-105/NI_DD1068-105-1.JPG",
            titulo: "Zapatillas Nike Air Huarache",
            descripcion: "Las Zapatillas Nike Air Huarache marcan tendencia. Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
            category: "Hombre", 
            precio: 40.799,
            marca:"Nike",
            cantidad: 1
        },

        {
            id:4,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc08846ff/products/NI_DN4155-001/NI_DN4155-001-1.JPG",
            titulo: "Zapatillas Nike Air Max 90 Se",
            descripcion: "Las zapatillas Nike Air MAx 90 Se son una mirada más de cerca hacia los 90. Presenta una mezcla de materiales reciclados . Su combinación en recortes oscuros superpuestos y tonos en verde, te da un look increible que podés usar con un jogger o jean para cualquier plan. Para completar el diseño, la zapatilla se asienta sobre una suela de goma que aporta tracción y durabilidad, creando un espacio de comodidad extrema. Llenate de estilo con estas zapatillas.",
            category: "Hombre",
            precio: 61.099,
            marca: "Nike",
            cantidad: 1
        },

        {
            id:5,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw893e2f71/products/NI_DN3074-001/NI_DN3074-001-1.JPG",
            titulo: "Zapatillas Nike Air Vapormax 2021 Fk Se",
            descripcion: "Las Zapatillas Nike Air Vapormax 2021 FK Se cuentan con una unidad Air que se creó para el running de alto rendimiento. Confeccionadas a partir de material reciclado su parte superior es de Flyknit elástica y firme elaborada con hilos industriales reciclados. Dueñas de un llamativo look sin costuras, es transpirable y tan ligero como el aire. Su cuello moldea el tobillo y la goma reciclada de la suela ofrece durabilidad y tracción.", 
            category: "Hombre",
            precio: 93.599,
            marca: "Nike",
            cantidad: 1
        },
        
        {
            id:6,
            img:"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3bc49e27/products/PU_388572-01/PU_388572-01-1.JPG",
            titulo:"Zapatillas Puma Mayze Rare",
            descripcion:"Roba todas las miradas cada vez que salgas a la calle con las Zapatillas Puma Mayze Raw. Este modelo está pensado para adaptarse a toda tu rutina; podes lucirlas en el trabajo, camino a la facultad y en cada salida con amigos. Combinalas como más te guste y aprovecha su versatilidad siempre. Cuentan con detalles en gamuza y colores variados y suaves, además del logo de Puma a lo largo de la capellada para darte el toque de originalidad que buscabas. Nunca fue tan fácil mejorar un look casual y darle un extra de elegancia.",
            category: "Mujer",
            precio: 35699,
            marca:"Puma",
            cantidad: 1
        },
        
        {
            id:7,
            img:"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbd417659/products/NI_DJ6377-100/NI_DJ6377-100-1.JPG",
            titulo:"Zapatillas Nike Air Force 1 07 Se",
            descripcion:"La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
            category:"Mujer", 
            precio: 51999 ,
            marca: "Nike",
            cantidad: 1
        },
        
        {
            id:8,
            img:"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwec905906/products/PU_387999-01/PU_387999-01-1.JPG",
            titulo:"Zapatillas Puma Slipstream Retro Grade",
            descripcion: "Las Zapatillas Puma Slipstream Invdr Ret representan una reinvención de las Slipstream Mid, creadas para jugar al básquetbol, saltar alto y crear grandes lanzamientos. Con esta nueva versión, la marca propone renvar las energías entregándote un calzado para todo el día creado con un empeine de cuero y gamuza que te dan un estilo impecáblemente elegante y una suela de goma que encaja perféctamente en este par. Su combinación de colores crea un diseño elegante y delicado para vos.",
            category: "Mujer",
            precio: 42599,
            marca: "Puma",
            cantidad: 1
        },
        
        {
            id:9,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4fcd4733/products/PU_385043-04/PU_385043-04-1.JPG",
            titulo: "Zapatillas Puma Rs-Fast Limiter",
            descripcion: "Diseñadas para personas de vanguardia y arriesgados, las Zapatillas Puma Rs-Fast Limiter cuentan con una onda retro con elementos gráficos de gran tamaño, a la vez que te imprimen una combinación de materiales y herramientas que te harán lucir cómodo y un paso más allá de todos. Su entresuela en EVA te da pasos más amortiguados, ligeros y con mejor resistencia a impactos. Lucí con orgullo un modelo pensado para destacarte entre la multitud, con colores audaces y toda la onda de Puma.",
            category: "Unisex",
            precio: 40299,
            marca: "Puma",
            cantidad: 1
        },
        
        {
            id:10,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf4fffab9/products/PU_306995-02/PU_306995-02-1.JPG",
            titulo: "Zapatillas Puma Bmw Mms Maco Sl",
            descripcion: "Las Zapatillas Puma Bmw Mms Maco Sl llevan tu pasión por los motores a la ciudad. Su combinación de colores le da un aire elegante impecable, sin perder modernidad. Además, prestan una comodidad extrema que te permite llevarlas en tu día a día gracias a su plantilla con tecnología SoftFoam para una pisada adaptable y confortable. La suela con talón más alto agrega un toque atlético al calzado y los apliques BMW en combinación con el logo y los colores de Puma, completan este calzado a la perfección. Además, su silueta moderna, inspirada en la era del “tiburón” de BMW te da toda la onda que tanto te gusta.",
            category: "Unisex",
            precio: 41399,
            marca: "Puma",
            cantidad: 1
        },
        
        {
            id:11 ,
            img:"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb72e8af8/products/AD_GX6849/AD_GX6849-1.JPG",
            titulo:"Zapatillas adidas Ultraboost DNA XXII",
            descripcion: "Disfrutá de la comodidad de las Zapatillas Adidas Ultraboost DNA XXII en cada momento de tus días llenos de acción. Este calzado para correr tienen cientos de cápsulas BOOST que se fusionan para brindar un retorno de energía increíble y una amortiguación confiable. Tiene revestimientos similares al cuero que brindan soporte al pie y maximizan la durabilidad. Una suela exterior de goma con agarre para brindarte estabilidad.",
            category: "Unisex",
            precio: 74399,
            marca: "Adidas",
            cantidad: 1
        },
        
        {
            id:12 ,
            img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw36f477ad/products/NI_DM0025-001/NI_DM0025-001-1.JPG",
            titulo: "Zapatillas Nike Air Vapormax 2021 Flyknit",
            descripcion: "Las Zapatillas Nike Air Vapormax 2021 Flyknit combinan llegaron para traer un aire moderno a tu look. Su material de confección FlyKnit es transpirable y se combina con un cuello elástico para ofrecer un soporte sin costuras. De esta manera, se convierte en un calzado súper confortable, que mantiene tus pies en libertad de movimiento y frescos en todo momento. Su estampa sobre el talón, crea un diseño único que se completa con el logo swoosh en rojo terminando tu look que fue creado específicamente para el running pero que te lleva a la ciudad con un estilo súper casual. Su unidad Air a lo largo de de todo el calzado, te ofrece una excelente amortiguación y capacidad de transiciones. No esperabas tanto de unas zapatillas, pero aceptalo. Ya son parte de tu vida.",
            category: "Hombre",
            precio: 93599 ,
            marca: "Nike",
            cantidad: 1
        },
    ]
 */