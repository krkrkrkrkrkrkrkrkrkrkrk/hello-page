import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    // Verifica se tem usuário mock logado
    const stored = localStorage.getItem("mockUser");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      navigate("/auth");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    toast.success("Logout realizado!");
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Sair
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Você está logado como: <strong>{user.email}</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Este é um login mock. A autenticação real será implementada no futuro.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
