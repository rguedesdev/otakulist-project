import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
	# Pontos de entrada para o GraphQL
	type Query {
		hello: String!
		horaCerta: String!
	}
`;

const resolvers = {
	Query: {
		hello() {
			return "Retorne uma strng";
		},
		horaCerta() {
			const data = new Date();
			const horas = data.getHours();
			const minutos = data.getMinutes();

			return `${horas}:${minutos}hs`;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
