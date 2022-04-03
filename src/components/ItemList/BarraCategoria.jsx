import React from "react";
import { useEffect, useState } from "react";
import { getCategorias } from "../firebase/firebaseClient";
import BtnBarraCategoria from "./BtnBarraCategoria";

const BarraCategoria = () => {
    const [categorias, setCategorias] = useState([]);

    /* const categorias = [
        {
            'id': "todo",
            'name': "Todo"
        },
        {
            'id': "cpu",
            'name': "Microprocesadores"
        },
        {
            'id': "mother",
            'name': "Placas Madre"
        },
        {
            'id': "pvideo",
            'name': "Placas de video"
        },
        {
            'id': "ram",
            'name': "Memorias RAM"
        },
        {
            'id': "fuentes",
            'name': "Fuentes"
        },
        {
            'id': "monitores",
            'name': "Monitores"
        },
        {
            'id': "teclados",
            'name': "Teclados"
        }
    ] */

    /* useEffect(() => { */
        getCategorias().then((categorias) => {
            setCategorias(categorias);
        });
   /*  }, [categorias]); */

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {categorias.map((categ) => {
                            return (
                                <BtnBarraCategoria
                                    key={categ.id}
                                    categId={categ.id}
                                    categNombre={categ.name}
                                ></BtnBarraCategoria>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default BarraCategoria;
