import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
	styles: {
		global: {
			body: {
				bg: "blue.900",
				color: "blue.100",
			},
		},
	},
});
