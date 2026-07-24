import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hora

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "Faltan variables de entorno." },
        { status: 500 }
      );
    }

    const response = await fetch(
  `https://places.googleapis.com/v1/places/${placeId}`,
  {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,reviews",
    },
    next: {
      revalidate: 3600,
    },
  }
);

    if (!response.ok) {
      const error = await response.text();

      return NextResponse.json(
        {
          error: "Error al consultar Google Places.",
          details: error,
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error interno.",
      },
      {
        status: 500,
      }
    );
  }
}