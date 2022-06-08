import { createServer, Model } from "miragejs";

type User = {
	name: string;
	email: string;
	created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},
		// seeds(server) {
		// 	server.create("user", {
        //         name: "John Doe",
		// 		email: "esbnet@gmail",
        //         created_at: "2020-01-01",
		// 	});
		// },
		routes() {
            this.namespace = "api";
            this.timing = 750;

			this.get("/users");
			this.post("/users");
            
            this.namespace = "";
            this.passthrough();
		},
	});

	return server;
}
