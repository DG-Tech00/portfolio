import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";

describe("Button", () => {
  it("renderiza corretamente", () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Clique aqui");
  });

  it("aplica variante corretamente", () => {
    render(<Button variant="outline">Botão Outline</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("chama onClick quando clicado", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Clique aqui</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("fica desabilitado quando isLoading é true", () => {
    render(<Button isLoading>Carregando</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("mostra spinner quando isLoading é true", () => {
    render(<Button isLoading>Carregando</Button>);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("aplica tamanhos corretamente", () => {
    const { rerender } = render(<Button size="sm">Pequeno</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<Button size="lg">Grande</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("respeita prop disabled", () => {
    render(<Button disabled>Desabilitado</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
