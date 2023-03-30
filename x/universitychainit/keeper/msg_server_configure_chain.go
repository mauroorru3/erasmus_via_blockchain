package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

func (k msgServer) ConfigureChain(goCtx context.Context, msg *types.MsgConfigureChain) (*types.MsgConfigureChainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgConfigureChainResponse{}, nil
}
