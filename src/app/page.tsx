import { ModeToggle } from "@/components/global/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <>
   <ModeToggle />
   <div className="flex flex-col items-center justify-center gap-4"> 
    <h1 className="text-2xl font-bold">Pagina Inicial</h1>
    <p className="text-center text-lg text-gray-600 dark:text-gray-300">
      Para usar el proyecto se debe contar con <code className="font-mono font-bold">
        Node.js</code> y <code className="font-mono font-bold">npm</code> instalado en su sistema. <br />
      Luego, siga estos pasos: <br />
      1. Clone el repositorio: <code className="font-mono font-bold">git clone &lt;URL-del-repositorio&gt;</code> <br />
      2. Navegue al directorio del proyecto: <code className="font-mono font-bold">cd &lt;nombre-del-proyecto&gt;</code> <br />
      3. Instale las dependencias: <code className="font-mono font-bold">npm install</code> <br />
      4. Inicie el servidor de desarrollo: <code className="font-mono font-bold">npm run dev</code> <br />
      5. Abre tu navegador y ve a <code className="font-mono font-bold">http://localhost:3000</code> para ver la aplicación en acción. <br />
      ¡Disfruta explorando el proyecto! Si tienes alguna pregunta, no dudes en consultar la documentación o abrir un issue en el repositorio.
    </p>
    <p className="text-center text-lg text-gray-600 dark:text-gray-300">
      El proyecto usa React 19, Next.js 15, NodeJs, TypeScript, Tailwind CSS, ShadCN <br />
    </p>
    <Button variant="outline">Button</Button>
   </div>
   </>
  );
}
