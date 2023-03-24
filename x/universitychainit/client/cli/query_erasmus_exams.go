package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"university_chain_it/x/universitychainit/types"
)

func CmdListErasmusExams() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-erasmus-exams",
		Short: "list all erasmus_exams",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllErasmusExamsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ErasmusExamsAll(context.Background(), params)
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

func CmdShowErasmusExams() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-erasmus-exams [exam-name]",
		Short: "shows a erasmus_exams",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argExamName := args[0]

			params := &types.QueryGetErasmusExamsRequest{
				ExamName: argExamName,
			}

			res, err := queryClient.ErasmusExams(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
