import { OpenAPIRoute, Str, Int } from "chanfana";
import { z } from "zod";

export class ExamplePostEndpoint extends OpenAPIRoute {
  schema = {
    tags: ["Example Endpoints"],
    summary: "Post simple data",
    description: "A simple POST endpoint for testing API functionality.",
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              name: Str({ example: 'John Doe' }),
              age: Int({ example: '43' })
            })
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Success",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              data: z.object({
                name: z.string(),
                age: z.number(),
              })
            }),
          },
        },
      },
    }
  }

  async handle(c: AppContext) {
    const data = await this.getValidatedData<typeof this.schema>();

    console.log({ "Example Variable": c.env.EXAMPLE_VARIABLE });

    return {
      success: true,
      data: data.body,
    };
  }
}

