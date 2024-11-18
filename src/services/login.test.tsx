import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    login("John");
    expect(mockAlert).toHaveBeenCalledWith("Boas vindas ao usuário John");
  });
});
