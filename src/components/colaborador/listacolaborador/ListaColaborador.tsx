import CardColaborador from "../cardcolaborador/CardColaborador"

function ListaColaborador() {

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            <CardColaborador />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaColaborador;