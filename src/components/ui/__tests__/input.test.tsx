import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../input";

describe("Input", () => {
  it("renderiza corretamente", () => {
    render(<Input placeholder="Digite algo" />);
    expect(screen.getByPlaceholderText("Digite algo")).toBeInTheDocument();
  });

  it("renderiza label quando fornecido", () => {
    render(<Input label="Nome" />);
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
  });

  it("mostra mensagem de erro quando fornecida", () => {
    render(<Input label="Email" error="Email inválido" />);
    expect(screen.getByText("Email inválido")).toBeInTheDocument();
  });

  it("define aria-invalid quando há erro", () => {
    render(<Input error="Erro" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("permite digitação", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Digite seu nome" />);

    const input = screen.getByPlaceholderText("Digite seu nome");
    await user.type(input, "John Doe");

    expect(input).toHaveValue("John Doe");
  });

  it("respeita prop disabled", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("associa erro com input via aria-describedby", () => {
    render(<Input label="Email" error="Email inválido" id="email-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-describedby", "email-input-error");
  });
});
