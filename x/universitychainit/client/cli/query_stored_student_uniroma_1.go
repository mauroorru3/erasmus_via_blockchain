package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"university_chain_it/x/universitychainit/types"
)

func CmdListStoredStudentUniroma1() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-stored-student-uniroma-1",
		Short: "list all stored_student_uniroma1",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllStoredStudentUniroma1Request{
				Pagination: pageReq,
			}

			res, err := queryClient.StoredStudentUniroma1All(context.Background(), params)
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

func CmdShowStoredStudentUniroma1() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-stored-student-uniroma-1 [index]",
		Short: "shows a stored_student_uniroma1",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetStoredStudentUniroma1Request{
				Index: argIndex,
			}

			res, err := queryClient.StoredStudentUniroma1(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
