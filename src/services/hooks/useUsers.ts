import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: string;
};

export async function getUsers(): Promise<User[]> {
	const { data } = await api.get("users");
	const users = data.users.map((user: User) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			created_at: new Date(user.createdAt).toLocaleString("pt-BR", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
		};
	});
	return users;
}

export function useUsers() {
	return useQuery("users", getUsers, { staleTime: 1000 * 5 }); // 5 segundos
}