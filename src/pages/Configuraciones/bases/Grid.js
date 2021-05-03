import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// plantillas

import TituloDescripcion from "../../../components/TituloDescripcion/TituloDescripcion";
import Toolbar from "../../../components/Toolbar/Toolbar";
import Container from "../../../components/Container/Container";

//componentes

import DataTable from "../../../components/DataTable/databable";
import BackdropSpinner from "../../../components/BackDrop/backDrop";

function Grid() {
  //local state

  const [rows, setRows] = useState({});

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [atrib, setAtrib] = useState("Id_Bases_Aeronaval");
  const [order, setOrder] = useState("desc");

  //plantillas de columnas

  const columns = [
    { tittle: "Base Ref", atributo: "Id_Bases_Aeronaval" },
    { tittle: "Region", atributo: "region" },
    { tittle: "Zona", atributo: "zona" },
    { tittle: "Provincia", atributo: "provincia" },
    { tittle: "Tipologia", atributo: "tipologia" },
    { tittle: "Nombre", atributo: "Nombre_Base" },
    { tittle: "Estatus", atributo: "Estatus_Base" },
  ];

  // funciones

  const handleChangePage = (page) => setPage(page + 1);
  const handleChangeLimit = (limit) => setLimit(limit);
  const handleChangeAtrib = (atrib) => setAtrib(atrib);
  const handleChangeOrder = (order) => setOrder(order);

  //destructuracion de los datos de la fuente

  const { results } = rows;
  const { total } = rows;

  return (
    <>
      <TituloDescripcion
        titulo="Bases"
        descripcion="Pantalla de modificacion y creacion de nuevas Bases."
      />
      <Toolbar type="bases" />
      <Container padding={10}>
        <DataTable
          columns={columns}
          total={total}
          page={page}
          limit={limit}
          handleChangeLimit={handleChangeLimit}
          handleChangePage={handleChangePage}
          atrib={atrib}
          order={order}
          handleChangeAtrib={handleChangeAtrib}
          handleChangeOrder={handleChangeOrder}
        ></DataTable>
      </Container>
    </>
  );
}

export default Grid;
