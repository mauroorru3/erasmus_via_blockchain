package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"university_chain_it/x/universitychainit/types"
)

func CmdListStoredStudentUnipi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-stored-student-unipi",
		Short: "list all stored_student_unipi",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllStoredStudentUnipiRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.StoredStudentUnipiAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowStoredStudentUnipi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-stored-student-unipi [index]",
		Short: "shows a stored_student_unipi",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetStoredStudentUnipiRequest{
				Index: argIndex,
			}

			res, err := queryClient.StoredStudentUnipi(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
