import { NavBarProductor } from "../NavBarProductor"


export const ProductorRoutes = () => {
  return (
    <>
    <NavBarProductor/>
    
    <Routes>
          <Route exact path="/extraccion" element={<ExtraccionScreen />} />
          <Route exact path="/densidad" element={<DensidadScreen />} />
          <Route exact path="/politicadatos" element={<DatosperScreen />} />
          <Route exact path="/suelos" element={<SuelosScreen />} />
         
          <Route exact path="/inventario" element={<InventarioScreen />} />
          <Route
            exact
            path="/productoGeneral"
            element={<ProductoGeneralScreen />}
          />
          <Route
            exact
            path="/productorDatos"
            element={<ProductorDatosScreen />}
          />
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/*para volver a la pagina principal si no encuentra la ruta*/}
        </Routes>
    
    </>
  )
}
