module.exports = {
  "/api/auth/register": {
    post: {
      tags: ["Autenticação"],
      summary: "Cadastra um novo tutor",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/TutorInput" }
          }
        }
      },
      responses: {
        201: {
          description: "Tutor cadastrado com sucesso",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Tutor" }
            }
          }
        },
        409: {
          description: "E-mail já cadastrado"
        },
        500: { $ref: "#/components/responses/ServerError" }
      }
    }
  },
  "/api/auth/login": {
    post: {
      tags: ["Autenticação"],
      summary: "Autentica um tutor ou administrador",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "senha"],
              properties: {
                email: { type: "string" },
                senha: { type: "string" }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Login bem sucedido",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: { type: "string" },
                  user: { $ref: "#/components/schemas/Tutor" }
                }
              }
            }
          }
        },
        401: {
          description: "Credenciais inválidas"
        },
        403: {
          description: "Acesso inativo ou pendente"
        },
        500: { $ref: "#/components/responses/ServerError" }
      }
    }
  },
  "/api/auth/me": {
    get: {
      tags: ["Autenticação"],
      summary: "Retorna os dados do tutor autenticado",
      responses: {
        200: {
          description: "Dados do usuário logado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Tutor" }
            }
          }
        },
        401: {
          description: "Não autorizado"
        },
        500: { $ref: "#/components/responses/ServerError" }
      }
    }
  }
};
