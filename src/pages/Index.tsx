import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Olá</h1>
      <p className="text-muted-foreground">Bem-vindo ao seu app</p>
      <Link to="/auth">
        <Button>Entrar</Button>
      </Link>
    </main>
  );
};

export default Index;
