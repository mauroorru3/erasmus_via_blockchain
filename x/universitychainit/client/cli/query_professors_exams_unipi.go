package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"university_chain_it/x/universitychainit/types"
)

func CmdListProfessorsExamsUnipi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-professors-exams-unipi",
		Short: "list all professors_exams_unipi",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllProfessorsExamsUnipiRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ProfessorsExamsUnipiAll(context.Background(), params)
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

func CmdShowProfessorsExamsUnipi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-professors-exams-unipi [exam-name]",
		Short: "shows a professors_exams_unipi",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argExamName := args[0]

			params := &types.QueryGetProfessorsExamsUnipiRequest{
				ExamName: argExamName,
			}

			res, err := queryClient.ProfessorsExamsUnipi(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
