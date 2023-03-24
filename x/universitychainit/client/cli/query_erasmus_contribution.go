package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"university_chain_it/x/universitychainit/types"
)

func CmdShowErasmusContribution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-erasmus-contribution",
		Short: "shows erasmus_contribution",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetErasmusContributionRequest{}

			res, err := queryClient.ErasmusContribution(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
