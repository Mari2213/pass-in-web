import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/events", async (request, reply) => {
  const createEventSchema = z.object({
    title: z.string().min(3),
    details: z.string().nullable(),
    maxinumAttendees: z.number().int().positive().nullable(),
  });

  const data = createEventSchema.parse(request.body);
  console.log(data);

  const events = await prisma.event.create({
    data: {
      title: data.title,
      details: data.details,
      maximumAttendees: data.maxinumAttendees,
      slug: new Date().toISOString(),
    },
  });

  return { eventId: events.id };
  // return reply.status(201).send({ eventId: events.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("http server running!!");
});
