import { OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";

export class ExampleGetEndpoint extends OpenAPIRoute {
  schema = {
    tags: ["Example Endpoints"],
    summary: "Get simple data",
    description: "A simple GET endpoint for testing API functionality.",
    request: {
      query: z.object({
        name: Str({default: "Guest" }),
      }),
    },
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              message: z.string(),
              greeting: z.string(),
            }),
          },
        },
      },
    },
  };

  async handle(c: any) {
    const data = await this.getValidatedData<typeof this.schema>();
    
    console.log({ "Example Variable": c.env.EXAMPLE_VARIABLE });

    return {
      success: true,
      message: "API is reachable",
      greeting: `Hello, ${data.query.name}!`,
    };
  }
}