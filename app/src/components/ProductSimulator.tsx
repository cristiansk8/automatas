'use client'
import React, { useState, useCallback } from "react";
import { CheckCircle } from "lucide-react";


function parseProductInfo(text: string) {
    const skuMatch = text.match(/CODIGO?:?\s*([A-Z0-9]+)/i);
    const priceMatch = text.match(/(\d+[\.,]?\d*)/);
    const price = priceMatch ? priceMatch[1] : "0";
    const sku = skuMatch ? skuMatch[1] : "N/A";

    let name = text;
    if (skuMatch) name = name.replace(skuMatch[0], "");
    if (priceMatch) name = name.replace(priceMatch[0], "");
    name = name.replace(/Disponible|CODIGO?:?/gi, "").trim();

    return {
        name,
        price,
        sku,
        shortDesc: name,
        longDesc: `Descripción larga para ${name} - precio: ${price} - SKU: ${sku}`,
    };
}

export default function ProductSimulator() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [inputText, setInputText] = useState("");
    const [product, setProduct] = useState<any>(null);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            const url = URL.createObjectURL(file);
            setImageSrc(url);
            e.dataTransfer.clearData();
        }
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const url = URL.createObjectURL(e.target.files[0]);
            setImageSrc(url);
        }
    };

    const handleGenerate = () => {
        if (!imageSrc || !inputText.trim()) return alert("Sube imagen y agrega texto");
        const parsed = parseProductInfo(inputText);
        setProduct(parsed);
    };

    return (

        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Simulador de Producto Ecommerce</h1>

            {/* Contenedor único que cambia según estado */}
            {imageSrc && !product && (
                <div className="flex items-center gap-2 text-green-600 mb-2 text-lg font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    Imagen subida con éxito
                </div>
            )}
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className={`w-full max-w-5xl h-96 border-4 border-dashed rounded-lg bg-white cursor-pointer
          ${product ? "border-gray-300 p-4 flex" : "border-gray-400 flex flex-col justify-center items-center"}
        `}
                onClick={() => !product && document.getElementById("fileInput")?.click()}
            >
                {!product && (
                    <>
                        <p className="text-5xl font-extrabold text-gray-600 text-center px-4 select-none">
                            Arrastra una imagen o haz clic para subir
                        </p>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </>
                )}

                {product && imageSrc && (
                    <>
                        {/* Imagen */}
                        <div className="w-1/2 flex items-center justify-center border border-gray-200 rounded-md p-2">
                            <img
                                src={imageSrc}
                                alt={product.name}
                                className="max-h-80 object-contain rounded-md"
                            />
                        </div>

                        {/* Información producto */}
                        <div className="w-1/2 flex flex-col justify-center px-6">
                            <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                            <p className="text-2xl font-semibold text-green-600 mb-3">Precio: ${product.price}</p>
                            <p className="text-lg font-medium text-gray-700 mb-2">SKU: {product.sku}</p>
                            <p className="text-lg mb-4">{product.shortDesc}</p>
                            <p className="text-gray-600">{product.longDesc}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Input texto */}
            {!product && (
                <textarea
                    placeholder='Ejemplo: "NIKE SB Disponible Dama 👩🏻‍🦰 90.000🐎 CODIGO: 063D"'
                    className="w-full max-w-5xl h-24 p-4 border border-gray-300 rounded-md text-lg resize-none mt-6"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            )}

            {/* Botón generar */}
            {!product && (
                <button
                    onClick={handleGenerate}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl mt-6 transition"
                >
                    Generar producto
                </button>
            )}
        </div>
    );
}
