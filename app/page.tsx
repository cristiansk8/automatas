import { redirect } from "next/navigation";

export default function Home() {
  redirect("/es"); // Redirige a español por defecto
}