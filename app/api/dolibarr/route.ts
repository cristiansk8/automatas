// src/app/api/dolibarr/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  console.log("🟢 Método GET funcionando correctamente");
  return NextResponse.json({ message: "Método GET funcionando correctamente" });
}

export async function POST(req: NextRequest) {
  console.log("📥 Se recibió un POST en /api/dolibarr");

  try {
    const body = await req.json();
    console.log("📦 Body recibido:", body);

    const { name, email, phone, country } = body;

    if (!name || !email || !phone || !country) {
      console.warn("🚫 Faltan campos requeridos en el body");
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const DOLIBARR_API_URL = process.env.DOLIBARR_API_URL;
    const DOLIBARR_API_KEY = process.env.DOLIBARR_API_KEY;

    if (!DOLIBARR_API_URL || !DOLIBARR_API_KEY) {
      console.error("❌ Variables de entorno no definidas");
      return NextResponse.json({ success: false, error: "Dolibarr env vars missing" }, { status: 500 });
    }

    const response = await fetch(`${DOLIBARR_API_URL}/thirdparties`, {
      method: 'POST',
      headers: {
        'DOLAPIKEY': DOLIBARR_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        country: country,
        client: 1
      })
    });

    const data = await response.json();
    console.log("📤 Respuesta de Dolibarr:", data);

    if (!response.ok) {
      console.error("❌ Error al crear tercero:", data);
      return NextResponse.json({ success: false, error: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Excepción en POST:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
