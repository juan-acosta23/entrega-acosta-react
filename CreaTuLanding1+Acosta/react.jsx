import React from 'react';
import { ShoppingCart } from 'lucide-react';

// Componente CartWidget
const CartWidget = () => {
    return (
        <div className="flex items-center">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                3
            </span>
        </div>
    );
};

// Componente NavBar
const NavBar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-orange-600">
                            MotoStore
                        </h1>
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-orange-600">Inicio</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">Motocicletas</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">Cascos</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">Accesorios</a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">Contacto</a>
                    </div>

                    {/* Widget del carrito */}
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

// Componente ItemListContainer
const ItemListContainer = ({ greeting }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {greeting}
                </h1>
                <p className="text-xl text-gray-600">
                    Próximamente: Catálogo de productos
                </p>
            </div>
        </div>
    );
};

// Componente App principal
const App = () => {
    const welcomeMessage = "¡Bienvenidos a MotoStore!";

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={welcomeMessage} />
        </div>
    );
};

export default App;